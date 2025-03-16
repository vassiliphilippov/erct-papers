module Jekyll
  module NewlineToParagraphFilter
    def newline_to_p(input)
      input.to_s.split(/\n/).map{|p| "<p>#{p}</p>"}.join
    end
  end
end

Liquid::Template.register_filter(Jekyll::NewlineToParagraphFilter)