   # ERCT Standard Specification

   ## Introduction to ERCT

   Randomised Controlled Trials (RCTs) are considered the "gold standard" in educational research, but their implementation alone doesn't guarantee reliable or practical results. Many RCTs face challenges like unclear criteria, short-term focus, or limited applicability to real-world settings.

   The **Educational Randomised Controlled Trial (ERCT) Standard** solves these issues by introducing 12 clear criteria, grouped into three levels, to ensure research is rigorous, transparent, and impactful in real-life educational contexts.

   ERCT was specially designed to be LLM friendly to provide well defined and easy to evaluate criteria that can be checked automatically using model Large Language Models like ChatGPT.

   ## What ERCT Is Not

   ERCT is designed **only** for original RCT studies in education measuring influence of some education intervention on education outcomes.

   ERCT is not about:
   - Meta studies
   - Was this intervention effective or not, only how well the study was conducted
   - Statistical significance, you have to determine it yourself based on provided information
   - Educational studies measuring other outcomes than education (like health, social, behavioural, etc.)

   ## The ERCT Framework

   The ERCT Standard has **3 levels**, each containing **4 criteria**

   ### Level 1: Base

   #### Class-level RCT (C)
   Tests interventions at the classroom level to prevent cross-group contamination

   #### Exam-based Assessment (E)
   Uses standardized exams for objective and comparable results

   #### Term Duration (T)
   Ensures studies last at least one academic term to measure meaningful impacts

   #### Documented Control Group (D)
   Requires detailed control group data for proper comparisons

   ### Level 2: Middle

   #### School-level RCT (S)
   Expands testing to whole schools for real-world relevance

   #### All-subject Exams (A)
   Assesses effects across all core subjects, avoiding imbalances

   #### Year Duration (Y)
   Ensures studies last at least one academic year to measure meaningful impacts

   #### Balanced Resources (B)
   Ensures equal time and resources for both groups to isolate the intervention's impact

   ### Level 3: Top

   #### Graduation Tracking (G)
   Tracks students until graduation to evaluate long-term impacts

   #### Replicated Results (R)
   Independently replicated study

   #### Independent Conduct (I)
   Removes bias by using third-party evaluators

   #### Pre-registered Protocol (P)
   Increases transparency by publishing study plans before data collection

   By following these criteria, researchers can **conduct robust studies,**
   and educators can confidently **interpret research findings.**
   This standard guides high-quality educational RCTs and evaluates existing research.

   ## Criteria Details

   ### Level 1: CETD

   #### C - Class-level RCT

   - The study must be a Randomised Controlled Trial (RCT) conducted at the class level.  
   - Randomisation should be clearly described and properly implemented.  
   - Check for: Description of randomisation process, sample size, and unit of randomisation.  
   - A stronger school-level RCT is required at Level 2.  
   - If the study was done as a school-level RCT, then this weaker class-level criterion is considered met.

   ##### Problem
   A study claims to be an RCT but assigns treatments to students within the same classroom. 
   This can lead to contamination effects, where students in the control group are influenced by 
   those in the treatment group, or teachers inadvertently apply intervention techniques to all students. 
   Class-level RCT helps to ensure proper isolation of treatment and control groups, reducing interference.

   ##### Exception
   If an intervention is designed for personal teaching like tutoring then this Class-level RCT 
   criterion isn’t applicable and even normal student-level RCT is considered OK.

   ##### Procedure

   1. **Locate Randomisation Description**
   Search the paper for any section describing how participants were allocated to intervention 
   and control conditions. Extract a direct quote that explains the unit of 
   randomisation (e.g., "Classes were randomly assigned...").  

   2. **Check Unit of Randomisation**
   Verify that the quote states that entire classes or school, not individual students 
   within a single class, were randomized. If it’s unclear, look for additional quotes clarifying randomisation steps.  

   3. **Exception Check (Tutoring/Personal Teaching)**
   If the intervention is specifically about personal tutoring or one-to-one teaching,
   locate a quote in the paper stating this. If such an exception is clearly described,
   then student-level RCT is allowed, and the criterion is satisfied.  

   4. **Decision**
   If the paper clearly states that randomisation was at the class level or stronger 
   school level (or meets the exception criterion), mark this criterion as “met,” 
   including the quotes used to verify this. If randomisation was done at the student 
   level within a single class without a valid exception, mark as “not met” and 
   provide the quote that shows incorrect randomisation.


   #### E - Exam-based Assessment

   - The study must use standardised exam-based assessments.
   - Assessments should not be specially designed for the study but should be standard, widely recognised tests.
   - Check for: Names of standardised tests used, their validity and reliability, and appropriateness for the study population.
   - What is important is that a standard exam-based assessment is used, not whether there is a positive effect.
   - Stronger all-subject exam-based assessment is required at Level 2.

   ##### Problem

   Researchers often create a custom test specifically designed to measure the outcomes of their intervention. 
   This can lead to bias, as the test may be overly aligned with the intervention, inflating its 
   apparent effectiveness. Standardised exams provide a more objective and comparable measure of educational outcomes.

   ##### Procedure

   1. **Identify the Assessment Tool**
      - Locate any quotes from the paper describing the test or examination used to measure outcomes. For example: "We used the national standardised exam in mathematics…" or "We developed a new test for the purpose of this study…"

   2. **Check Standardisations**
      - If the exam name or description indicates it is a widely recognised standardised test (e.g., "state-wide standardised achievement test," "national curriculum exam"), it meets the criterion. Quote the part that confirms its standardization.

   3. **Decision**
      - Mark as "met" if you found a quote confirming a known standardised exam. Mark as "not met" if you found a quote confirming a custom-made assessment.

   #### T - Term Duration

   - The intervention must last for at least one full academic term.
   - A term is typically defined as a semester or equivalent (approximately 3-4 months).
   - Check for: Clear statement of intervention duration, dates, and alignment with academic calendar.
   - Stronger one year-long intervention duration is required at Level 2.
   - If the study duration was year-long then this weaker term-duration criterion is considered met.

   ##### Problem

   Many studies conduct a brief, two-week intervention and immediately measures outcomes. Short-term interventions may show temporary effects that don't persist, or miss delayed effects that take time to manifest. Ensuring at least a term-long intervention allows for more reliable assessment of the intervention's impact.

   ##### Procedure

   1. **Find Intervention Duration**
      - Identify quotes from the paper specifying the start and end dates or the duration of the intervention (e.g., "The program ran from September to December…").

   2. **Assess Documentation Clarity**
      - Ensure that the quoted period covers at least one full academic term (or longer). 
      If the paper’s academic calendar is unclear, look for quotes describing what constitutes a term in that context.

   3. **Decision**
      - Mark as “met” if the quoted duration is at least one full term. Mark as “not met” if the quoted duration is shorter than a term or not clearly stated.

   #### D - Documented Control Group

   - The control group must be well-documented.
   - Documentation should include demographic information, baseline performance, and any treatments received.
   - Check for: Detailed description of control group characteristics, size, and conditions.

   ##### Problem

   Many studies mention having a control group but provide no details about its composition or treatment. Why it's an issue: Without proper documentation, it's impossible to assess whether the control group was truly comparable or if it received any unintended interventions. Detailed documentation of the control group allows for proper comparison and interpretation of results.

   ##### Procedure

   1. **Locate Control Group Description**
      - Find quotes from the methods section describing the control group's demographics, baseline performance, or any conditions placed on them. For example: "The control group received standard instruction, and included 30 students with similar demographic backgrounds…"

   2. **Assess Documentation Clarity**
      - Check if these quotes detail who the control group is, their baseline characteristics, and confirm that no special treatment was given beyond normal schooling. If no such descriptive quote is found, this is a failure.

   3. **Decision**
      - Mark as "met" if you can quote clear documentation of the control group's characteristics. Mark as "not met" if no adequate quote describing the control group is provided.

   ### Level 2: SAYB

   #### S - School-level RCT

   - The study must be a Randomised Controlled Trial (RCT) conducted at the school level.
   - Randomisation should occur among schools, not just classes within schools.
   - Here, 'school' means the educational institution or unit implementing the intervention (e.g., preschool centers, club, sites, K-12 schools, etc).
   - Check for: Description of school selection process, number of schools involved, and randomisation method.
   - If this stronger school-level RCT criterion is met then weaker class-level RCT criterion is also considered as met.

   ##### Problem

   A class-level RCT shows positive results, but when implemented school-wide, the effects disappear. Class-level randomisation might not account for school-level factors that influence the intervention's effectiveness. School-level randomisation captures a more realistic implementation scenario and accounts for school-wide factors. They are the closest to real-life implementations.

   ##### Procedure

   1. **Identify Randomisation Level**
      - Locate quotes describing the randomisation procedure at the school level (e.g., "Twenty schools were randomly assigned to either the intervention or control condition…").

   2. **If Only Class-level or Student-level Mentioned**
      - If you find quotes that randomisation was at class or student level only, this criterion is not met.

   3. **Decision**
      - Mark as "met" if a quote confirms school-level randomisation (here, 'school' means the educational institution or unit implementing the intervention e.g., preschool centers, club, sites, K-12 schools, etc.). Mark as "not met" if no quote indicates school-level assignment.


   #### A - All-subject Exams

   - The study must measure impact on all main subjects taught in the school, not just the subject of intervention.
   - Only standard standardised exam-based assessments are considered (see more details in the "E - Exam-based Assessment" criterion description).
   - This prevents overlooking potential negative impacts on non-intervention subjects.
   - Check for: List of all subjects assessed, description of assessment methods for each subject.
   - If this stronger All Exams criterion is met then weaker "E - Exam-based Assessment" criterion is also considered as met.

   ##### Problem

   For example a maths intervention shows great improvement in maths scores, but researchers 
   don't measure performance in other subjects. This intervention might be improving 
   maths at the expense of other subjects, leading to an imbalanced education. 
   Measuring all subjects ensures the intervention doesn't have unintended negative 
   consequences in non-target areas.

   ##### Exception

   For highly specialised interventions in upper secondary or vocational education, 
   measuring impact on directly related subjects might be sufficient if the rationale is clearly explained.

   ##### Procedure

   1. **Check Subjects Assessed**
      - Locate quotes from the paper listing the subjects tested. For example: "We assessed student performance in math, science, and language arts at the end of the year…"

   2. **Criterion E As Prerequisite**
      - Academic outcomes must be assessed using standardized exam-based assessments that are widely recognized and validated. Teacher ratings or custom-designed measures, while potentially useful as supplementary information, do not satisfy this criterion unless they are part of a standardized testing protocol. If the criterion E is not met then this criterion is not met.

   3. **All Main Subjects Coverage**
      - Verify from the quotes that all main subjects taught in that educational level were assessed. If unsure what the main subjects are, refer to the paper's curriculum description or standard subjects in that context. Make sure that they are standard standardised exam-based assessments, not some custom tests.

   4. **Exceptions**
      - If the paper states a clear rationale for a specialized intervention (e.g., vocational training focused solely on welding certification) and justifies measuring only related outcomes, quote that explanation and consider this acceptable.

   5. **Decision**
      - Mark as "met" if quoted evidence shows all main subjects (or justified exception) were assessed. Mark as "not met" if quoted evidence shows only one or a limited set of subjects without justification.

   #### Y - Year Duration

   - The intervention must last for at least one full academic year.
   - Check for: Clear statement of intervention duration covering a full academic year, with specific start and end dates.
   - If this stronger Year Duration criterion is met then weaker "T - Term Duration" criterion is also considered as met.

   ##### Problem

   A term-long intervention shows promising results, but these gains fade by the end of the school year. 
   Some educational interventions may have short-term effects that don't persist long-term. 
   A year-long study is a reasonable practical compromise - it is long-enough to have good confidence in the 
   intervention results while still practical as schools often are organised around years.

   ##### Procedure

   1. **Find Duration Information**
      - Identify quotes specifying the intervention period. For example: "The intervention was implemented from September 2020 to June 2021."

   2. **Check Length Against a Year**
      - Verify from the quotes that it covers an entire academic year (generally ~9-10 months).

   3. **Decision**
      - Mark as "met" if the quoted duration spans a full academic year. Mark as "not met" if quotes indicate a shorter duration.

   #### B - Balanced Control Group

   - The control group must balance time on education and budget.
   - If the intervention increases time or budget, the control group should match this for "business as usual" activities.
   - Check: Compare time and resources for both groups.

   ##### Problem

   An intervention that provides extra tutoring time (or extra budget) shows positive results, 
   but the control group received no additional educational time (or money). 
   It's unclear whether the positive results are due to the specific intervention or simply 
   the additional time or money spent on education. Ensuring the control group receives 
   balanced time and resources isolates the effect of the specific intervention.

   When an intervention is designed to test the impact of additional resources 
   (such as extra tutoring time or rewards) on outcomes, the control group typically receives 
   the standard 'business as usual' level. In this case, the absence of extra resources 
   in the control group is by design and does not indicate an imbalance.

   ##### Exception

   When an intervention explicitly tests the impact of additional resources 
   (e.g., extra tutoring time or materials) as the primary treatment variable, 
   the control group may receive the standard 'business as usual' level without additional 
   resources, provided this is clearly stated as the study’s intent. 
   Otherwise, any increase in time or budget in the intervention group must be 
   matched in the control group with comparable educational inputs.

   ##### Procedure

   1. **Determine Study Intent**
      - Verify if the study explicitly tests the impact of additional resources (e.g., extra time, materials) as the treatment variable; quote evidence of this intent or lack thereof.

   2. **Identify Intervention Resources**
      - Find quotes describing time, budget, or materials provided to the intervention group (e.g., hours of training, technology access). Examples: "Students in the intervention group received an additional hour of tutoring each day." "Teachers in the intervention group were provided with new tablets and training sessions."

   3. **Determine if Additional Resources were Provided**
      - Based on the quotes, decide if these interventions required extra budget/time/resources compared to standard instruction. If uncertain, look for additional quotes clarifying the nature of the intervention. Include the detailed description of the additional resources into your explanation. If the extra resources are the treatment variable, then the control group should be documented as receiving the standard input.

   4. **If No Additional Resources Required**
      - If the quotes show no extra resources (e.g., "The intervention involved a new teaching method but no additional class time or materials"), mark as "met" without further checking.

   5. **If Additional Resources Required**
      - Locate quotes that describe what the control group received. For example: "Control schools also received additional professional development time equivalent to the intervention group's training hours." Verify that the quoted resources/time for the control group must receive resources comparable to the intervention group in terms of time, budget, and the nature of the support provided. This includes matching the type and quality of resources (e.g., training, expert consultation) to ensure the only difference is the intervention itself. The control group should receive equivalent time and resources for 'business as usual' or alternative activities to isolate the intervention’s specific effect. In within-subjects designs, the no-treatment baseline period must similarly provide equivalent educational engagement (e.g., standard curriculum time or placebo activities) unless the additional resources are the explicit treatment variable being tested.

   6. **Decision**
      - Mark as "met" if the evaluation confirms a balanced allocation—either by matching extra resources or, if the extra resource is the treatment variable, by ensuring all groups receive the same core inputs. Mark as "not met" if no quotes indicate any effort to balance or if baseline inputs differ.


   ### Level 3: GRIP

   #### G - Graduation Tracking

   - The study must follow up and track participants until their graduation.
   - This assesses long-term impacts of the intervention.
   - Check for: Description of follow-up methods, duration of tracking, and graduation data collection processes.
   - Evidence of graduation tracking may not always be present in the original paper but in the follow-up papers by the same authors.


   ##### Problem

   Interventions may show short-term benefits, but researchers often neglect to follow up on long-term outcomes. Tracking until graduation offers insight into the lasting impact on students' educational journeys without needing to track them after leaving school.


   ##### Procedure

   1. **Find Follow-up Period**
      - Locate quotes describing the follow-up duration. For example: "Students were tracked through to the end of their primary education, until Grade 6 graduation."

   2. **Check Graduation Tracking**
      - Confirm from the quotes that the study did not stop measurement immediately after the intervention ended, but continued until the students graduated from that educational stage.

   3. **Check for Follow-up Publications**
      - If graduation tracking is not mentioned in the main paper, look for references to planned follow-up studies or check if the authors have published subsequent papers tracking the same cohort. If such papers exist, apply the same evaluation process to quotes from those follow-up publications.

   4. **Decision**
      - Mark as "met" if quoted evidence shows tracking continued through graduation. Mark as "not met" if quoted evidence shows tracking stopped earlier or no mention of graduation tracking is found.

   #### R - Reproduced

   - The study must be independently replicated.
   - Replication should be conducted by a different research team in a different context.
   - Replication should be published in a peer-reviewed scientific journal.
   - Check for: Reference to original study, description of replication process, and comparison of results.
   - Evidence of independent reproduction may appear after the original study's publication in other papers.

   ##### Problem

   A highly publicised educational intervention fails to show the same positive results when implemented in different schools or contexts. Single studies may have results influenced by specific contexts, leading to non-generalisable findings. There have been numerous cases in educational research where initial studies were promising, but replication efforts revealed little to no effect. Reproduction in different contexts ensures the intervention's effects are robust and generalisable.

   ##### Procedure

   1. **Identify Mention of Replication**
      - Find quotes where the authors mention a previous or separate study that replicated their intervention and results. For example: "A subsequent study by Smith et al. (2022) implemented the same intervention in a different district and found similar effects."

   2. **Check Independence**
      - Confirm from the quotes that the replication was done by a different team or institution, not the same authors.

   3. **Search for External Replication Studies**
      - Check if other researchers have published attempts to replicate the original intervention in peer-reviewed scientific journals. Consider studies that clearly reference the original work and attempt to reproduce its methods and findings. Replication studies may appear years after the original publication and should be considered even if not referenced in the original paper. Confirm that the replication was done by a different team or institution, not the same authors. Provide the relevant quotes from the replication studies.

   4. **Decision**
      - Mark as "met" if quoted references show independent replication in a different context published in peer-reviewed scientific journals. Mark as "not met" if no quotes mention replication or if the replication was by the same research team only.

   #### I - Independent Conduct

   - The study must be conducted independently from the authors who designed the intervention.
   - This reduces potential bias in implementation and analysis.
   - Check for: Clear statement of who conducted the study and their relationship (or lack thereof) to the intervention designers.

   ##### Problem

   When the researchers or authors of an intervention conduct the study themselves, there is a risk of biased reporting or analysis. For example, the authors might subconsciously or consciously influence data collection or interpretation to favour their intervention.

   ##### Procedure

   1. **Check Research Team Independence**
      - Look for quotes in the acknowledgments, methods, or author contribution sections. For example: "Data collection and analysis were conducted by an external evaluation team with no involvement in the intervention's design."

   2. **If Authors are the Designers**
      - If the quotes show that the same authors developed the intervention and also carried out the study, this criterion fails unless there is a statement of third-party oversight.

   3. **Decision**
      - Mark as "met" if quoted evidence confirms independence (e.g., an external evaluation agency). Mark as "not met" if quotes indicate the same team designed and tested the intervention without independent oversight.

   #### P - Pre-Registered

   - The full study protocol must be pre-registered before the study begins.
   - Pre-registration should include hypotheses, methods, and planned analyses.
   - Check for: Link to pre-registration, date of pre-registration (must be before data collection began), and adherence to pre-registered plan.

   ##### Problem

   Researchers often analyse their data in multiple ways and only report the analyses that show significant positive results. This p-hacking or selective reporting can lead to false positive results and an inflated sense of the intervention's effectiveness. Pre-registration of hypotheses and analysis plans prevents selective reporting and increases transparency in research.

   ##### Procedure

   1. **Locate Pre-Registration Statement**
      - Find quotes mentioning a registry platform (e.g., "The study was pre-registered on ClinicalTrials.gov (ID…) before data collection began.").

   2. **Verify Timing**
      - Check quotes for a date of pre-registration and ensure it was before data collection started (e.g., "Pre-registration occurred in June 2020, data collection began in September 2020.").

   3. **Decision**
      - Mark as "met" if quoted evidence confirms a pre-registration reference and timing. Mark as "not met" if no quotes referencing pre-registration are found or if the quoted timing indicates registration occurred after data collection.
