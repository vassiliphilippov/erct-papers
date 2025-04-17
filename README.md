# erct-papers
ERCT (Educational RCT) Standards Paper Repository

Todo:
- Swap I and A
  - update /Users/vassiliphilippov/erct-papers/docs/erct_specification.md
  - update standard.html
  - update home layout
  - update paper loayout
  - update /Users/vassiliphilippov/erct-papers/docs/prompts/3 paper evaluation according to ERCT standard - Deep Research.txt
  - update /Users/vassiliphilippov/erct-papers/docs/prompts/1 paper evaluation according to ERCT standard.txt
  - update /Users/vassiliphilippov/erct-papers/docs/prompts/2 paper evaluation check using Deep Search.txt
- Write good readme
- Increase fonts
- Paper 15, ask Deep Research to provide quotes for R from other papers confirming confirmation
- Paper 16, ask Deep Research to fix small incorrections in quotes
- Paper 17, check if grading is applicable for E, and maybe review grading criteria for university studies
- Paper 17, ask Deep Research if quote in R is from another paper and if so, mention it in the end of the quote
- Paper 18, carefully check logic of E - it seems standard tests were provided, ask Deep Research why it thinks so
- Recheck all papers with new B criteria description
- Update criteria.yml to include level for each criteria and remove custom code for checking letters for each level 
- Add comparison to other framewords
- Add links to papers describing why additional requirements are needed

I have developed ERCT standard and a website with collection of papers market against ERCT standard.

The website is hosted on GitHub Pages and is built using Jekyll.

I want you to analize my code and write python script that will run in Google Colab and will do the following:

1. Clone this repository https://github.com/vassiliphilippov/erct-papers

2. Ask for OpenAI API key

3. Choose which of the papers to check

4. Ask to upload thispaper in PDF format and in text format (to upload two files)

5. Run OpenAI o4-mini model via API to check the paper marketing against ERCT standard, use the following prompts from Git repository:
docs/prompts/2 paper evaluation check using Deep Search.txt

6. Save the results in the following folder:
temp/<paper_id>/
as .md file with the following format:
<paper_id>_<run_number>.md

7. Repeat this process 5 times for the same paper (save the results in the same folder as run #1 , run #2, etc)

8. Use OpenAI o4-mini model via API to compare the results of all 5 runs and output the table for each criterion what was the value in the original paper marking in Github vs what was the result in each of the 5 runs and what is the most common result. 


