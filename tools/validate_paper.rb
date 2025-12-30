#!/usr/bin/env ruby
# Simple YAML front matter validator for Jekyll paper files
# Usage: ruby validate_paper.rb _papers/39.md
#        ruby validate_paper.rb _papers/*.md

require 'yaml'
require 'date'

# Schema definition
REQUIRED_TOP_LEVEL = %w[title authors paper_link erct_level rct]
OPTIONAL_TOP_LEVEL = %w[abstract publication_date pdf_link doi journal date_erct_check tags]
REQUIRED_CRITERIA = %w[c e t d s i y b r a g p]
REQUIRED_CRITERION_FIELDS = %w[met explanation analysis]

def extract_front_matter(file_path)
  content = File.read(file_path, encoding: 'UTF-8')
  # Match YAML front matter between --- markers
  match = content.match(/\A---\s*\n(.*?)\n---/m)
  return nil unless match
  # Allow Date class for Jekyll date fields
  YAML.safe_load(match[1], permitted_classes: [Date, Time])
rescue Psych::SyntaxError => e
  puts "  ✗ YAML Syntax Error: #{e.message}"
  nil
end

def validate_top_level(data, filename)
  errors = []
  
  REQUIRED_TOP_LEVEL.each do |field|
    unless data.key?(field)
      errors << "Missing required field: #{field}"
    end
  end
  
  # Validate erct_level
  if data['erct_level']
    unless data['erct_level'].is_a?(Integer) && (0..3).include?(data['erct_level'])
      errors << "erct_level must be an integer between 0 and 3"
    end
  end
  
  # Validate rct
  if data['rct'] && !data['rct'].is_a?(TrueClass) && !data['rct'].is_a?(FalseClass)
    errors << "rct must be a boolean"
  end
  
  # Validate paper_link format
  if data['paper_link']
    unless data['paper_link'].empty? || data['paper_link'].match?(/^https?:\/\//)
      errors << "paper_link must be empty or a valid URL"
    end
  end
  
  errors
end

def validate_criteria(data, filename)
  errors = []
  
  unless data['criteria']
    errors << "Missing 'criteria' section"
    return errors
  end
  
  REQUIRED_CRITERIA.each do |criterion|
    unless data['criteria'][criterion]
      errors << "Missing criterion: #{criterion}"
      next
    end
    
    criterion_data = data['criteria'][criterion]
    REQUIRED_CRITERION_FIELDS.each do |field|
      unless criterion_data.key?(field)
        errors << "Criterion #{criterion} missing required field: #{field}"
      end
    end
    
    # Validate met field
    if criterion_data['met'] && !criterion_data['met'].is_a?(TrueClass) && !criterion_data['met'].is_a?(FalseClass)
      errors << "Criterion #{criterion}.met must be a boolean"
    end
  end
  
  errors
end

def validate_file(file_path)
  filename = File.basename(file_path)
  print "Validating #{filename}... "
  
  data = extract_front_matter(file_path)
  unless data
    puts "✗ Failed to parse YAML front matter"
    return false
  end
  
  errors = []
  errors.concat(validate_top_level(data, filename))
  errors.concat(validate_criteria(data, filename))
  
  if errors.empty?
    puts "✓ Valid"
    true
  else
    puts "✗ Invalid"
    errors.each { |e| puts "  - #{e}" }
    false
  end
end

# Main execution
if ARGV.empty?
  puts "Usage: ruby validate_paper.rb <file1.md> [file2.md ...]"
  puts "       ruby validate_paper.rb _papers/*.md"
  exit 1
end

failed = 0
total = 0

ARGV.each do |file_path|
  if File.exist?(file_path)
    total += 1
    failed += 1 unless validate_file(file_path)
  else
    puts "File not found: #{file_path}"
  end
end

if total > 1
  puts "\nSummary: #{failed} of #{total} files failed validation"
end

exit failed > 0 ? 1 : 0

