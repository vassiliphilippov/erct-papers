---
title: >-
  Reflection-Satisfaction Tradeoff: Investigating Impact of Reflection on
  Student Engagement with AI-Generated Programming Hints
authors: >-
  Heeryung Choi, Tung Phung, Mengyan Wu, Adish Singla, Christopher Brooks
paper_link: "https://doi.org/10.48550/arXiv.2512.04630"
abstract: >-
  Generative AI tools, such as AI-generated hints, are increasingly integrated
  into programming education to offer timely, personalized support. However,
  little is known about how to effectively leverage these hints while ensuring
  autonomous and meaningful learning. One promising approach involves pairing
  AI-generated hints with reflection prompts, asking students to review and
  analyze their learning, when they request hints. This study investigates the
  interplay between AI-generated hints and different designs of reflection
  prompts in an online introductory programming course. We conducted a two-trial
  field experiment. In Trial 1, students were randomly assigned to receive
  prompts either before or after receiving hints, or no prompt at all. Each
  prompt also targeted one of three SRL phases: planning, monitoring, and
  evaluation. In Trial 2, we examined two types of prompt guidance: directed
  (offering more explicit and structured guidance) and open (offering more
  general and less constrained guidance). Findings show that students in the
  before-hint (RQ1), planning (RQ2), and directed (RQ3) prompt groups produced
  higher-quality reflections but reported lower satisfaction with AI-generated
  hints than those in other conditions. Immediate performance did not differ
  across conditions. This negative relationship between reflection quality and
  hint satisfaction aligns with previous work on student mental effort and
  satisfaction. Our results highlight the need to reconsider how AI models are
  trained and evaluated for education, as prioritizing user satisfaction can
  undermine deeper learning.
publication_date: 2025-12-04
erct_level: 0
rct: true
pdf_link: "https://arxiv.org/pdf/2512.04630.pdf"
doi: "10.48550/arXiv.2512.04630"
journal: "arXiv (preprint)"
date_erct_check: 2026-04-12
tags:
  - higher education
  - US
  - EdTech platform
  - formative assessment
criteria:
  c:
    met: false
    explanation: >-
      Students (not intact classes or schools) were randomized to conditions,
      so the class-level (or stronger) randomization requirement is not met.
    quote: >-
      "In Trial 1, students were randomly assigned to one of three conditions:
      Before-hint Reflection, After-hint Reflection, or Control (See Figure 1a)."
    analysis: >-
      Relevant Quotes:

      1) "In Trial 1, students were randomly assigned to one of three
      conditions: Before-hint Reflection, After-hint Reflection, or Control
      (See Figure 1a)." (Section 3.3)

      2) "In Trial 2, students were randomly assigned to one of the two
      conditions: Open Prompt or Directed Prompt (See Figure 1b)." (Section 3.3)

      Detailed Analysis:

      Criterion C requires randomization at the class level (or stronger, such
      as school/site level) to reduce contamination, with an exception for
      one-to-one tutoring interventions. The quoted passages explicitly state
      that "students were randomly assigned" to conditions within each trial.
      The paper does not describe randomization of intact classes/sections (or
      schools/sites), and the intervention is not framed as one-to-one tutoring.

      Therefore, the unit of randomization is the individual student within a
      course run rather than a class (or school/site), so the criterion is not
      satisfied.

      Criterion C is not met because randomization is at the student level,
      not at the class (or school/site) level.
  e:
    met: false
    explanation: >-
      Outcomes are measured via course interaction and performance proxies
      (submissions, immediate success, hint ratings), not standardized exams.
    quote: >-
      "For RQ1b, we measured problem-solving performance using two metrics:
      First, we computed the number of assignment submissions throughout the
      course."
    analysis: >-
      Relevant Quotes:

      1) "For RQ1b, we measured problem-solving performance using two metrics:
      First, we computed the number of assignment submissions throughout the
      course." (Section 4.1)

      2) "Second, we measured performance using the immediate success rate:
      whether the question was solved in the submission immediately following
      the hint request." (Section 4.1)

      3) "For RQ1a, we measured the hint-seeking experience based on (1) the
      total number of hint requests made by students throughout the course and
      (2) their satisfaction with the hints, as indicated by their hint
      ratings." (Section 4.1)

      Detailed Analysis:

      Criterion E requires that academic outcomes be measured using widely
      recognized standardized exams (not custom or course-local measures). The
      paper describes outcome measures as assignment submission counts, an
      "immediate success rate" on subsequent submissions, and students’ hint
      ratings and usage behavior.

      These measures are not described as standardized exams, and the paper does
      not report any named standardized assessment instrument. Therefore, the
      assessment approach does not satisfy Criterion E.

      Criterion E is not met because the study does not use standardized,
      exam-based outcome measures.
  t:
    met: false
    explanation: >-
      The course and outcome tracking span four weeks, which is shorter than a
      full academic term.
    quote: >-
      "Spanning four weeks, the course included weekly assignments, each
      provided in the form of a JupyterLab notebook containing three to four
      programming questions, for a total of fourteen questions."
    analysis: >-
      Relevant Quotes:

      1) "This study was conducted in two runs of the same introductory data
      science course using Python, which took place in May 2024 and August
      2024." (Section 3.1)

      2) "Spanning four weeks, the course included weekly assignments, each
      provided in the form of a JupyterLab notebook containing three to four
      programming questions, for a total of fourteen questions." (Section 3.1)

      3) "For RQ1b, we measured problem-solving performance using two metrics:
      First, we computed the number of assignment submissions throughout the
      course." (Section 4.1)

      Detailed Analysis:

      Criterion T requires that outcomes be measured at least one full academic
      term (roughly 3–4 months) after the intervention begins. The paper states
      the course "Spanning four weeks" and that outcomes are measured
      "throughout the course" and immediately after hint requests.

      A four-week period is materially shorter than a typical academic term, so
      the minimum follow-up duration is not met.

      Criterion T is not met because the intervention and outcome tracking occur
      within a four-week course rather than at least one academic term.
  d:
    met: false
    explanation: >-
      The control condition is described, but baseline demographics and baseline
      performance needed to document control comparability are not reported.
    quote: >-
      "The Control group received hints without any reflection prompt."
    analysis: >-
      Relevant Quotes:

      1) "The Control group received hints without any reflection prompt."
      (Section 3.3)

      2) "Tables 3 and 4 outline the number of students and their hint requests
      in our two trials, respectively." (Section 3.4)

      Detailed Analysis:

      Criterion D requires a well-documented control group, including baseline
      demographics and baseline performance (or equivalent baseline measures)
      sufficient to evaluate comparability between conditions.

      The paper clearly defines what the control group received (hints only)
      and reports participation and interaction counts via Tables 3 and 4.
      However, within the paper text, there is no reported baseline demographic
      breakdown by condition and no baseline performance measure reported by
      condition (e.g., prior grades, pretest, or other baseline achievement)
      that would allow the reader to assess initial equivalence.

      Criterion D is not met because the control group is described at a high
      level, but baseline demographics and baseline performance are not
      documented.
  s:
    met: false
    explanation: >-
      The randomization occurs among students within a course run, not among
      schools or other institutional sites.
    quote: >-
      "In Trial 2, students were randomly assigned to one of the two conditions:
      Open Prompt or Directed Prompt (See Figure 1b)."
    analysis: >-
      Relevant Quotes:

      1) "This study was conducted in two runs of the same introductory data
      science course using Python, which took place in May 2024 and August
      2024." (Section 3.1)

      2) "In Trial 2, students were randomly assigned to one of the two
      conditions: Open Prompt or Directed Prompt (See Figure 1b)." (Section 3.3)

      Detailed Analysis:

      Criterion S requires randomization at the school level (or an equivalent
      institutional site/unit implementing the intervention). The study is
      conducted within two offerings of the same online course and randomizes
      individual students to conditions.

      No part of the paper indicates that schools, programs, or sites were
      randomized, so the school-level requirement is not met.

      Criterion S is not met because the randomization unit is students within a
      course, not schools (or equivalent sites).
  i:
    met: false
    explanation: >-
      The paper does not document independent third-party implementation or
      evaluation separate from the intervention designers/authors.
    quote: >-
      "Our support system consisted of a front-end JupyterLab extension to
      interact with the students and a back-end server application to execute
      the hint-generation technique detailed in Section 3.2."
    analysis: >-
      Relevant Quotes:

      1) "This study involved two randomized controlled trials (See Figure 1),
      both used a custom support system that can deliver reflection prompts and
      AI-generated hints." (Section 3)

      2) "Our support system consisted of a front-end JupyterLab extension to
      interact with the students and a back-end server application to execute
      the hint-generation technique detailed in Section 3.2." (Section 3.4)

      Detailed Analysis:

      Criterion I requires that the evaluation be conducted independently from
      the designers of the intervention, or that the paper explicitly documents
      independent third-party conduct/oversight for implementation, data
      collection, and/or analysis.

      The paper describes a "custom support system" used in both trials and
      presents it as "our support system," but it does not include an explicit
      statement that an independent evaluation team (separate from the
      designers/authors) conducted implementation and/or evaluation.

      Criterion I is not met because the paper does not provide explicit
      documentation of independent third-party conduct.
  y:
    met: false
    explanation: >-
      The study duration is four weeks and therefore does not meet the academic
      year tracking requirement; it also cannot meet Y because T is not met.
    quote: >-
      "Spanning four weeks, the course included weekly assignments, each
      provided in the form of a JupyterLab notebook containing three to four
      programming questions, for a total of fourteen questions."
    analysis: >-
      Relevant Quotes:

      1) "Spanning four weeks, the course included weekly assignments, each
      provided in the form of a JupyterLab notebook containing three to four
      programming questions, for a total of fourteen questions." (Section 3.1)

      Detailed Analysis:

      Criterion Y requires outcome measurement spanning at least 75% of an
      academic year after the intervention begins. The paper states the course
      spans four weeks, which is far shorter than an academic year.

      Additionally, under the ERCT dependency rule, if Criterion T is not met,
      then Criterion Y is not met. Since this study is four weeks long (and thus
      does not meet term duration), it cannot meet year duration.

      Criterion Y is not met because the study lasts four weeks, far below the
      minimum required fraction of an academic year (and it fails Criterion T).
  b:
    met: true
    explanation: >-
      Reflection prompting adds time/effort only in intervention arms, but this
      added effort is the treatment being tested against a hints-only control.
    quote: >-
      "Trial 1 investigated the impact of reflection prompts (presence vs.
      absence), the placement of prompts (before vs. after a hint), and the SRL
      phase targeted by the prompt (planning vs. monitoring vs. evaluation)."
    analysis: >-
      Relevant Quotes:

      1) "Trial 1 investigated the impact of reflection prompts (presence vs.
      absence), the placement of prompts (before vs. after a hint), and the SRL
      phase targeted by the prompt (planning vs. monitoring vs. evaluation)."
      (Section 3)

      2) "The Control group received hints without any reflection prompt."
      (Section 3.3)

      3) "Depending on their condition, students were also prompted to write a
      reflection, as detailed in Section 3.3 and illustrated in Figure 1a. This
      reflection practice was optional, and students were allowed to leave the
      field blank." (Section 3.4)

      Detailed Analysis:

      Criterion B examines whether the control condition provides a comparable
      substitute for the intervention’s inputs (time/resources), unless the
      additional resources are explicitly the treatment variable being tested.

      Here, the core experimental manipulation is adding reflection prompts to
      AI-generated hints and varying their design (placement, SRL phase, and
      prompt guidance). That manipulation necessarily adds student time/effort
      (writing reflections) relative to the hints-only control. The paper
      explicitly frames reflection prompting as the object of study ("presence
      vs. absence" and prompt design factors), so the extra effort is integral
      to the treatment, not an accidental confound.

      Therefore, a "hints without any reflection prompt" control is an
      appropriate business-as-usual comparator for testing the incremental
      effect of reflective scaffolding.

      Criterion B is met because the additional time/effort is integral to the
      intervention being tested, and the control appropriately omits it by
      design.
  r:
    met: false
    explanation: >-
      No independent replication by a different research team in a different
      context was found.
    quote: null
    analysis: >-
      Relevant Quotes:

      None found in the paper indicating an independent replication by other
      authors.

      Detailed Analysis:

      Criterion R requires an independent replication of this study by a
      different research team in a different context, published in a
      peer-reviewed outlet. The paper reports two trials, but they are both part
      of the same study and author team.

      An internet search (performed on 2026-04-12) using the paper title, the
      arXiv identifier, and the authors’ names did not identify a peer-reviewed
      independent replication that explicitly reproduces this study’s
      experimental design and reports results as a replication attempt.

      Criterion R is not met because independent replication evidence was not
      found.
  a:
    met: false
    explanation: >-
      Because the study does not use standardized exams (E not met), it cannot
      satisfy the all-subject standardized exam requirement.
    quote: null
    analysis: >-
      Relevant Quotes:

      1) "For RQ1b, we measured problem-solving performance using two metrics:
      First, we computed the number of assignment submissions throughout the
      course." (Section 4.1)

      2) "Second, we measured performance using the immediate success rate:
      whether the question was solved in the submission immediately following
      the hint request." (Section 4.1)

      Detailed Analysis:

      Criterion A requires standardized exam-based assessment across all main
      subjects (and per ERCT rules, if Criterion E is not met, Criterion A is
      not met). This study measures outcomes via course-local proxies (submissions
      and immediate success) rather than standardized exams, so Criterion E is not
      met.

      Therefore, Criterion A cannot be satisfied in this study.

      Criterion A is not met because the study does not use standardized exams
      (and thus fails the prerequisite Criterion E).
  g:
    met: false
    explanation: >-
      Participants were not tracked to graduation, and the study is far shorter
      than the year-duration prerequisite (Y not met).
    quote: null
    analysis: >-
      Relevant Quotes:

      1) "Spanning four weeks, the course included weekly assignments, each
      provided in the form of a JupyterLab notebook containing three to four
      programming questions, for a total of fourteen questions." (Section 3.1)

      Detailed Analysis:

      Criterion G requires tracking participants until graduation, potentially
      via follow-up publications on the same cohort. This study takes place
      within a four-week course and reports outcomes during that course, with no
      description of tracking learners to completion of a degree program or any
      other graduation milestone.

      Additionally, under the ERCT dependency rule, if Criterion Y is not met,
      then Criterion G is not met. Since the study duration is four weeks, it
      cannot meet the year-duration prerequisite.

      An internet search (performed on 2026-04-12) for follow-up papers by the
      same authors reporting graduation tracking for this cohort did not yield
      any such publication.

      Criterion G is not met because the study does not track participants to
      graduation and it fails the year-duration prerequisite (Criterion Y).
  p:
    met: false
    explanation: >-
      No protocol registry link, ID, or registration date is reported, and no
      pre-registration record was found.
    quote: null
    analysis: >-
      Relevant Quotes:

      None found in the paper indicating protocol pre-registration (no registry
      name/link, identifier, or registration date).

      Detailed Analysis:

      Criterion P requires a pre-registered protocol with verifiable registry
      information and a registration date that precedes data collection. In the
      paper text, there is no mention of pre-registration or a registry entry.

      An internet search (performed on 2026-04-12) using the paper title, arXiv
      identifier, and authors did not locate a clearly corresponding public
      pre-registration record that can be verified as registered before the May
      2024 and August 2024 study runs.

      Criterion P is not met because no pre-registration record is reported in
      the paper and none was found online.
---
```

## Change Summary

- Added metadata:
  - `paper_link` set to the DOI landing page `https://doi.org/10.48550/arXiv.2512.04630`.
  - `pdf_link` set to the direct arXiv PDF `https://arxiv.org/pdf/2512.04630.pdf`.
  - `date_erct_check` set to `2026-04-12`.
  - `doi` set to `10.48550/arXiv.2512.04630`.
- Updated multiple criteria quotes to match the paper’s wording more
  precisely (especially for C, E, T, B) and removed a non-paper quote that
  had been mistakenly included in Y.
- Re-checked criteria G, R, and P using internet search:
  - No follow-up graduation-tracking publication found (G remains not met,
    also blocked by Y not met).
  - No independent replication found (R remains not met).
  - No pre-registration record found and none is reported in the paper (P
    remains not met).
- Confirmed `erct_level` remains `0` because Level 1 criteria (C, E, T, D)
  are not met.