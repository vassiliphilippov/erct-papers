---
title: >
  Drill-type adaptive debugging to boost programming skills
authors: >
  Gabriele Pozzan, Costanza Padova, Chiara Montuori,
  Barbara Arfé and Tullio Vardanega
paper_link: "https://doi.org/10.1080/08993408.2026.2672717"
abstract: >-
  Background and Context: Informatics Education research has
  often called for including the coverage of debugging skills
  in education, whose acquisition also fosters the learning of
  programming. Programming and debugging alike are complex
  tasks, whose mastering requires operating on multiple
  interconnected parts simultaneously. Cognitive Load Theory
  suggests that reducing the complexity of how new information
  is presented improves educational outcomes. Focusing on
  isolated elements is highlighted as a research gap by a
  recent review of the literature on programming education.
  Objective: To fill this research gap by designing a
  programming-oriented intervention focused on isolated
  elements. The intervention is based on drill-type exercises,
  delivered through an adaptive system, which focus on
  debugging and further scaffold an established educational
  approach based on Code.org, in the intent of reducing its
  cognitive load. Method: A pre-test/post-test study with 89
  fourth-grade learners, comparing the impact on programming
  skills of our experimental intervention against approaches
  based on Code.org and standard STEM activities. Findings:
  Our results show a significant difference in post-test
  performance across the experimental conditions, with the
  experimental adaptive drill-type intervention leading to
  better overall performance. Implications: This work
  showcases the potential of our approach as an effective
  educational strategy. We also highlight the benefits that
  focus on isolated elements and adaptive drill-type exercises
  may have even on environments specifically designed for
  novices, such as Code.org.
publication_date: 2026-05-18
erct_level: 0
rct: false
pdf_link: "https://www.tandfonline.com/doi/pdf/10.1080/08993408.2026.2672717"
doi: 10.1080/08993408.2026.2672717
journal: Computer Science Education
date_erct_check: 2026-07-10
tags:
  - K12
  - EU
  - EdTech platform
  - digital assessment
criteria:
  c:
    met: false
    explanation: >
      The study is explicitly a quasi-experiment with
      best-effort randomization, mixing class-level and
      student-level assignment and assigning one whole
      school to the control without randomization.
    quote: >-
      "Thus, we adopted a quasi-experimental design, using
      best-effort randomization of student-group
      assignments." (p. 17)
    analysis: >-
      Relevant Quotes:

      1) "To answer this question, we conducted a
      quasi-experimental pre-test/post-test study (Gribbons &
      Herman, 2019) that involved 89 fourth-grade learners."
      (p. 3)

      2) "Our study involved 89 fourth-grade learners (mean
      age = 9.62, SD = 0.42) from 3 schools – 5 class groups
      total – located in Italy." (p. 17)

      3) "In most cases, full random assignment of learners
      to experimental conditions was considered too
      disruptive. Thus, we adopted a quasi-experimental
      design, using best-effort randomization of
      student-group assignments." (p. 17)

      4) "Gribbons and Herman (2019) define this experimental
      setup as nonequivalent group, pre-test/post-test and
      consider it appropriate in situations, such as ours, in
      which organizational constraints make full
      randomization impractical." (p. 17)

      5) "School 1 - Class groups randomly assigned to
      experimental condition ... School 2 - Class group split
      in half, students randomly assigned to experimental
      condition ... School 3 - Computer laboratory under
      maintenance at time of study. All students assigned to
      business-as-usual group." (Figure 7, p. 18)

      Detailed Analysis:

      Criterion C requires a properly implemented RCT with
      randomisation at (at least) the class level, unless the
      intervention is one-to-one tutoring. The authors
      themselves describe the design as quasi-experimental
      and use "best-effort" rather than full randomization.
      The unit of assignment is inconsistent: in School 1
      whole class groups were randomly assigned, in School 2
      a single class was split with students randomly
      assigned to conditions (student-level within a class,
      which risks contamination), and in School 3 all
      students were assigned to the BAU control with no
      randomization at all because the computer laboratory
      was under maintenance. The intervention is a classroom
      programming curriculum, not personal tutoring, so the
      tutoring exception does not apply.

      Criterion C is not met because the study is an
      explicitly quasi-experimental, non-equivalent-group
      design with inconsistent and incomplete randomization,
      including student-level assignment within a class and a
      whole school assigned to control without randomization.
  e:
    met: false
    explanation: >
      Outcomes were measured with a custom selection of four
      Code.org exercises scored by number of attempts, not a
      recognized standardized exam.
    quote: >-
      "The evaluations consisted of a selection of four
      exercises from Code.org that were not included in the
      interventions." (p. 20)
    analysis: >-
      Relevant Quotes:

      1) "The evaluations consisted of a selection of four
      exercises from Code.org that were not included in the
      interventions. We administered the same exercises in
      both the pre-test and post-test." (p. 20)

      2) "The following four exercises were used in the
      evaluations, see Table 5 and Figures 8–11" (p. 20)

      3) "For each exercise, the learners received 0 points
      if they failed to solve it in no more than three
      attempts, otherwise they received 4 − n points, where n
      = [1:3] was the number of attempts made. The total
      score of each evaluation thus ranged 0 . 12." (p. 22)

      4) "This scoring method, based on the number of
      attempts, is consistent with prior studies with which
      we compare our results (Arfé et al., 2020; Montuori et
      al., 2025)." (p. 22)

      Detailed Analysis:

      Criterion E requires a widely recognized, standardized
      exam-based assessment that is not custom-built for the
      study. Here the outcome measure is a researcher-chosen
      set of four Code.org block-programming exercises,
      administered on the Code.org interface and scored by a
      bespoke attempts-based rule (0 to 12 points). This is a
      task designed and selected by the authors for this
      study, not a state-wide, national, or otherwise
      recognized standardized test with established validity
      and reliability.

      Criterion E is not met because the assessment is a
      custom, study-specific selection of Code.org exercises
      scored by a bespoke metric rather than a recognized
      standardized exam.
  t:
    met: false
    explanation: >
      The intervention ran for about one month with the
      post-test roughly a month after the pre-test, which is
      shorter than a full academic term.
    quote: >-
      "Each intervention lasted for approximately a month
      (two encounters per week) and the whole project took
      place between February and April 2024." (p. 17)
    analysis: >-
      Relevant Quotes:

      1) "Our programming interventions involved eight
      encounters, each of the duration of ... 1 hour. Each
      intervention lasted for approximately a month (two
      encounters per week) and the whole project took place
      between February and April 2024." (p. 17)

      2) "To mitigate the risk of 'memory effects' we ensured
      a minimum interval of no less than a month between the
      two evaluations." (p. 20)

      Detailed Analysis:

      Criterion T requires that outcomes be measured at least
      one full academic term (about 3-4 months) after the
      intervention begins. The intervention here comprised
      eight roughly one-hour encounters delivered over about
      a month, and the post-test followed the pre-test by a
      minimum of one month. The interval from intervention
      start to outcome measurement is therefore on the order
      of one month, and the whole project spanned only
      February to April 2024. This is well short of a full
      academic term.

      Criterion T is not met because the intervention and
      follow-up to measurement spanned only about one month,
      far shorter than a full academic term.
  d:
    met: true
    explanation: >
      The paper documents the size, gender composition, mean
      age, baseline pre-test scores and treatment (regular
      STEM, no programming) of the control groups.
    quote: >-
      "the business-as-usual (BAU) group, consisting of 34
      learners (F = 19), did not receive interventions during
      the project and only conducted regular STEM activities
      that did not include programming." (p. 17)
    analysis: >-
      Relevant Quotes:

      1) "the active control (CTR) group, consisting of 27
      learners (F = 16) received a programming intervention
      based on programming puzzles exercises in the style of
      Code.org; (3) the business-as-usual (BAU) group,
      consisting of 34 learners (F = 19), did not receive
      interventions during the project and only conducted
      regular STEM activities that did not include
      programming." (p. 17)

      2) "Our study involved 89 fourth-grade learners (mean
      age = 9.62, SD = 0.42) from 3 schools – 5 class groups
      total – located in Italy." (p. 17)

      3) "The BAU group serves as a baseline, to assess the
      learners' improvements in the absence of interventions
      and to confirm that the changes observed in the EXP and
      CTR groups are attributable to the respective
      instructional interventions." (p. 17)

      4) "Table 7. Evaluation scores ... EXP 4.71 ... CTR
      2.70 ... BAU 4.24" (pre-test means, Table 7, p. 24)

      Detailed Analysis:

      Criterion D requires the control group to be
      well-documented, including size, baseline
      characteristics and the conditions/treatment it
      received. The paper reports two comparison groups: an
      active control (CTR, 27 learners) that received
      Code.org-style puzzle exercises and a business-as-usual
      control (BAU, 34 learners) that did only regular STEM
      activities with no programming. It documents group
      sizes, gender composition (F counts per group), overall
      mean age and SD, the number of schools/classes, and
      baseline (pre-test) scores with standard deviations for
      each group in Table 7. It also explicitly states that
      the BAU group received no programming intervention.

      Criterion D is met because the control groups' sizes,
      demographic information, baseline performance and
      conditions are clearly documented.
  s:
    met: false
    explanation: >
      Randomization was not conducted at the school level;
      one whole school was assigned to control and others
      were split by class or student within the school.
    quote: >-
      "School 3 - Computer laboratory under maintenance at
      time of study. All students assigned to
      business-as-usual group." (Figure 7, p. 18)
    analysis: >-
      Relevant Quotes:

      1) "School 1 - Class groups randomly assigned to
      experimental condition ... School 2 - Class group split
      in half, students randomly assigned to experimental
      condition ... School 3 - Computer laboratory under
      maintenance at time of study. All students assigned to
      business-as-usual group." (Figure 7, p. 18)

      2) "Our study involved 89 fourth-grade learners ...
      from 3 schools – 5 class groups total – located in
      Italy." (p. 17)

      3) "Thus, we adopted a quasi-experimental design, using
      best-effort randomization of student-group
      assignments." (p. 17)

      Detailed Analysis:

      Criterion S requires that entire schools be the unit of
      random assignment. Here randomization, where it
      occurred, was at the level of class groups (School 1)
      or individual students within a class (School 2), and
      School 3 was assigned in its entirety to the
      business-as-usual condition for logistical reasons
      (laboratory under maintenance) rather than by
      randomization. Schools were therefore not randomly
      assigned to conditions.

      Criterion S is not met because assignment occurred
      within schools at the class or student level, and one
      school was non-randomly allocated entirely to control,
      so there was no school-level randomization.
  i:
    met: false
    explanation: >
      The authors designed the adaptive drill-type
      intervention and the extended Code.org approach and
      also conducted and analysed the study themselves, with
      no independent evaluator.
    quote: >-
      "We extend an established learning approach (Arfé et
      al., 2020), which involves solving navigational
      problems in Code.org programming microworlds using
      block-based languages" (pp. 2-3)
    analysis: >-
      Relevant Quotes:

      1) "This study aims to address this gap by implementing
      a debugging-focused programming intervention based on
      drill-type exercises ... We extend an established
      learning approach (Arfé et al., 2020)" (p. 2)

      2) "To support the development of debugging skills and
      to also foster programming learning, we designed three
      categories of drill-type exercises" (p. 3)

      3) "Our adaptive system expands on the algorithm
      described by Effenberger and Pelánek (2018)." (p. 15)

      4) "No potential conflict of interest was reported by
      the author(s)." (Disclosure statement, p. 35)

      Detailed Analysis:

      Criterion I requires that the study be conducted
      independently from those who designed the intervention,
      or that third-party oversight of data collection and
      analysis be documented. In this paper the same author
      team designed the experimental adaptive drill-type
      system, designed the CTR condition as an extension of
      their own established approach (Arfé et al., 2020, where
      Arfé and Vardanega are co-authors of the present work),
      delivered the interventions, collected the data and
      performed all statistical analyses. There is no
      external evaluation agency, independent data collection
      team, or blinded assessor described.

      Criterion I is not met because the intervention was
      designed, implemented, and evaluated by the same
      author team, with no independent or third-party
      conduct described.
  y:
    met: false
    explanation: >
      Term Duration (T) is not met and the intervention
      spanned only about a month, far short of a full
      academic year.
    quote: >-
      "Each intervention lasted for approximately a month
      (two encounters per week) and the whole project took
      place between February and April 2024." (p. 17)
    analysis: >-
      Relevant Quotes:

      1) "Our programming interventions involved eight
      encounters ... Each intervention lasted for
      approximately a month (two encounters per week) and the
      whole project took place between February and April
      2024." (p. 17)

      2) "To mitigate the risk of 'memory effects' we ensured
      a minimum interval of no less than a month between the
      two evaluations." (p. 20)

      Detailed Analysis:

      Criterion Y requires that outcomes be tracked for at
      least about 75% of a full academic year (roughly 9-10
      months). The intervention lasted approximately one
      month, and the full project spanned only February to
      April 2024, with the post-test about a month after the
      pre-test. This is nowhere near a full academic year.
      Furthermore, per the standard, if criterion T (Term
      Duration) is not met, criterion Y cannot be met, and T
      is not met here.

      Criterion Y is not met because tracking spanned only
      about one month, far short of a full academic year, and
      criterion T is also not met.
  b:
    met: true
    explanation: >
      The active control (CTR) group received the same total
      instructional time as the experimental group, with the
      differentiating drill-type content being the treatment
      variable under test.
    quote: >-
      "The first half of each encounter revolved around a
      selection of exercises from Code.org, identical for
      both the EXP and CTR group." (p. 18)
    analysis: >-
      Relevant Quotes:

      1) "The first half of each encounter revolved around a
      selection of exercises from Code.org, identical for
      both the EXP and CTR group." (p. 18)

      2) "During the second part of each encounter, learners
      worked individually, and the instructional materials
      were differentiated according to their assigned
      experimental condition." (p. 18)

      3) "During the second part of each encounter, members
      of the CTR group solved additional programming puzzles
      in the style of Code.org." (p. 19)

      4) "Combining the exercises of the first and second
      part, the CTR group solved a total of eight new
      distinct 4C/ID learning tasks per encounter." (p. 20)

      5) "the business-as-usual (BAU) group ... did not
      receive interventions during the project and only
      conducted regular STEM activities that did not include
      programming." (p. 17)

      Detailed Analysis:

      Criterion B compares the time, budget and materials
      given to intervention and control conditions and asks
      whether the control offers a comparable substitute,
      unless the extra resource is itself the treatment
      variable. The primary comparison here is EXP (adaptive
      drill-type exercises) against the active control CTR
      (additional Code.org-style puzzles). Both groups shared
      an identical first half of every encounter and had a
      differentiated second half of equal duration; the CTR
      group worked on eight new distinct learning tasks per
      encounter, matching the EXP group's time on task. Thus
      time and instructional resources are balanced between
      EXP and CTR, and the specific difference (drill-type
      isolated-element exercises vs. additional puzzles) is
      precisely the treatment variable being investigated.
      The BAU group is a business-as-usual baseline receiving
      standard STEM instruction, which is the acceptable
      "business as usual" comparison level. Applying the
      decision tree, the active control matches the
      intervention's time and budget, and the differentiating
      content is the treatment variable, so balance is
      satisfied.

      Criterion B is met because the active control group
      received equivalent instructional time and task load,
      with the drill-type content itself being the treatment
      variable, and the business-as-usual group serves as a
      standard baseline.
  r:
    met: false
    explanation: >
      No independent replication of this study by a different
      research team is reported or found.
    quote: null
    analysis: >-
      Relevant Quotes:

      1) "This work makes two main contributions: (1)
      extending an established approach to conduct
      programming interventions based on Code.org (Arfé et
      al., 2020) with insights from Cognitive Load Theory;
      (2) showing the positive impact of this extended
      approach" (pp. 32-33)

      2) "Future work could also attempt to replicate our
      results with larger populations of learners, possibly
      of different ages." (p. 34)

      Detailed Analysis:

      Criterion R requires that the specific study be
      independently replicated by a different research team
      in a different context and published in a peer-reviewed
      journal. This paper is a novel study published in May
      2026; it extends the authors' own prior work (Arfé et
      al., 2020) rather than being replicated by others, and
      the authors explicitly list replication as future work.
      An internet search across Taylor & Francis, ACM,
      ResearchGate, dblp and general web sources identified
      only related coding-intervention studies by the same
      Padova group (e.g., Montuori, Ronconi, Pozzan, Padova,
      Vardanega & Arfé, "Age-related effects of coding
      interventions", International Journal of Child-Computer
      Interaction, 2025) but no independent reproduction of
      this specific adaptive drill-type debugging trial by a
      separate team. No verbatim replication quotes could be
      found because no such replication exists.

      Criterion R is not met because no independent
      replication of this study by a different research team
      exists, and the authors themselves position replication
      as future work.
  a:
    met: false
    explanation: >
      Only programming performance was assessed via custom
      Code.org exercises; no standardized all-subject exams
      were used and criterion E is not met.
    quote: >-
      "We assessed learners' programming performance based on
      their gains in solving Code.org programming tasks."
      (p. 3)
    analysis: >-
      Relevant Quotes:

      1) "We assessed learners' programming performance based
      on their gains in solving Code.org programming tasks."
      (p. 3)

      2) "The evaluations consisted of a selection of four
      exercises from Code.org that were not included in the
      interventions." (p. 20)

      Detailed Analysis:

      Criterion A requires that impact be measured across all
      main subjects using standardized exam-based
      assessments, and it explicitly depends on criterion E
      being met. Here only a single domain (block-based
      programming) was assessed, and only via custom Code.org
      exercises rather than standardized exams. No other core
      subjects (e.g., mathematics, reading, science) were
      measured, and criterion E is not met.

      Criterion A is not met because only programming was
      assessed, no standardized all-subject exams were used,
      and criterion E is not satisfied.
  g:
    met: false
    explanation: >
      Tracking ended at a post-test about a month after the
      pre-test, with no follow-up to graduation, and
      criterion Y is not met.
    quote: >-
      "To mitigate the risk of 'memory effects' we ensured a
      minimum interval of no less than a month between the
      two evaluations." (p. 20)
    analysis: >-
      Relevant Quotes:

      1) "To mitigate the risk of 'memory effects' we ensured
      a minimum interval of no less than a month between the
      two evaluations." (p. 20)

      2) "Future work could also attempt to replicate our
      results with larger populations of learners, possibly
      of different ages." (p. 34)

      Detailed Analysis:

      Criterion G requires tracking participants through to
      graduation from their educational stage, and it depends
      on criterion Y being met. Here measurement stopped at a
      post-test administered about a month after the pre-test,
      within the same short project window (February to April
      2024). There is no follow-up through the end of primary
      school or any later cohort tracking. An internet search
      for subsequent publications by the same authors found
      related coding-intervention work (e.g., Montuori et
      al., 2025) but no follow-up study tracking these
      specific learners to graduation, and no verbatim
      graduation-tracking quotes could be found because no
      such tracking exists. Criterion Y is also not met.

      Criterion G is not met because outcomes were measured
      only at an immediate post-test with no graduation
      tracking, and criterion Y is not satisfied.
  p:
    met: false
    explanation: >
      Only institutional ethics approval is reported; there
      is no pre-registration of the protocol, hypotheses and
      analysis plan on a public registry before data
      collection.
    quote: >-
      "This study followed the ethical code of conduct
      guidelines and was approved by the Institutional Review
      Board of the Human Inspired Technology Research Centre
      of the University of Padova (protocol number
      2023_234R1, approved 18 December 2023)." (p. 17)
    analysis: >-
      Relevant Quotes:

      1) "This study followed the ethical code of conduct
      guidelines and was approved by the Institutional Review
      Board of the Human Inspired Technology Research Centre
      of the University of Padova (protocol number
      2023_234R1, approved 18 December 2023)." (p. 17)

      2) "Additional materials for this article – drill-type
      exercises/learning tasks specifications and notebook
      with statistical results and analyses – are available
      at the URL: https://github.com/cornacchia/drill_type_
      additional_materials" (Appendix B, p. 40)

      Detailed Analysis:

      Criterion P requires a public pre-registration of the
      full study protocol (hypotheses, methods, planned
      analyses) on a recognized registry before data
      collection begins. The paper reports institutional
      review board (ethics) approval and provides a GitHub
      repository with materials and analysis notebooks, but
      neither of these constitutes a time-stamped
      pre-registration on a trial registry such as
      ClinicalTrials.gov, OSF, or AEA. The paper contains no
      mention of any trial-registry pre-registration, so no
      registry could be checked. IRB approval is not
      pre-registration, and the GitHub materials are shared
      with the publication rather than registered before data
      collection.

      Criterion P is not met because there is no
      pre-registration of the protocol on a public registry
      prior to data collection, only ethics approval and a
      post hoc materials repository.
---
