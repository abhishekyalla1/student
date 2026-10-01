import {
  UserProfile,
  PathwayGraph,
  PathwayNode,
  PathwayEdge,
  NodeState,
  StageId,
  DegreeCourse,
  JobRole
} from '../types/pathway';
import {
  STREAMS_DATA,
  ENTRANCE_EXAMS_DATA,
  DEGREE_COURSES_DATA,
  JOB_ROLES_DATA
} from '../data/pathwayData';

export function generateForwardRoadmap(profile: UserProfile): PathwayGraph {
  const nodes: PathwayNode[] = [];
  const edges: PathwayEdge[] = [];

  const streamCode = profile.selectedStream || 'MPC';
  const streamInfo = STREAMS_DATA.find(s => s.code === streamCode) || STREAMS_DATA[0];

  // 1. Root Node: Class 10
  const isClass10Current = profile.currentStage === 'CLASS_10';
  nodes.push({
    id: 'stage_class_10',
    title: 'Class 10 (Secondary School)',
    subtitle: profile.board ? `${profile.board.replace('_', ' ')} Board` : 'CBSE / State SSC',
    stage: 'CLASS_10',
    stageName: 'Stage 1: Foundation',
    state: isClass10Current ? 'YOU_ARE_HERE' : 'COMPLETED',
    iconType: 'school',
    details: {
      whatItIs: 'Secondary School Certificate (SSC / Class 10) examination accredited by State or Central boards. [OFFICIAL]',
      whyItMatters: 'Mandatory prerequisite qualifying exam for all higher secondary streams, 3-year polytechnic diplomas, and vocational ITI courses across India.',
      mandatoryRequirements: 'Passing marks in Mathematics, Science, Social Studies, and Languages.',
      whenToDoIt: 'Standard examination window: February - April. Results announced in May.',
      nextStep: 'Select your Higher Secondary Stream (MPC/BiPC/MEC/CEC/HEC) or 3-Year Polytechnic Diploma based on career goals.',
      alternativeRoute: 'If seeking hands-on technician skills or immediate vocational job entry, apply for 3-Year Polytechnic Diploma (via POLYCET) or ITI Trades.',
      evidenceLevel: 'OFFICIAL',
      sourceCitation: 'Ministry of Education & Respective State Board Guidelines'
    }
  });

  // 2. Stream Node: e.g. Intermediate MPC, BiPC, etc.
  if (streamInfo.stage === 'POLYTECHNIC') {
    const isDiplomaCurrent = profile.currentStage === 'DIPLOMA_3YR';
    nodes.push({
      id: 'node_stream',
      title: streamInfo.name,
      subtitle: '3-Year Practical Engineering Diploma',
      stage: 'POLYTECHNIC',
      stageName: 'Stage 2: Technical Diploma',
      state: isDiplomaCurrent ? 'YOU_ARE_HERE' : (isClass10Current ? 'NEXT_STEP' : 'COMPLETED'),
      iconType: 'wrench',
      dataRef: { type: 'STREAM', id: streamInfo.id },
      details: {
        whatItIs: streamInfo.description,
        whyItMatters: streamInfo.whoPrefers,
        mandatoryRequirements: 'Class 10 pass with Mathematics and Physical Science. Entrance via State POLYCET. [OFFICIAL]',
        whenToDoIt: 'POLYCET exam conducted in April - May following Class 10 results.',
        nextStep: 'Complete 3-year curriculum with minimum 60% aggregate and prepare for State ECET for B.Tech lateral entry.',
        alternativeRoute: 'Direct recruitment as Junior Engineer (SSC JE / RRB JE) or Industrial Technician.',
        realityCheck: 'Diploma provides practical workshop skills. For executive or senior software engineering roles, completing B.Tech via Lateral Entry is strongly recommended.',
        evidenceLevel: streamInfo.evidenceLevel,
        sourceCitation: streamInfo.sourceCitation
      }
    });
    edges.push({ id: 'edge_10_to_stream', from: 'stage_class_10', to: 'node_stream', label: 'Via POLYCET' });

    // ECET Exam Node
    nodes.push({
      id: 'node_ecet_exam',
      title: 'State ECET (Lateral Entry Exam)',
      subtitle: 'AP ECET / TG ECET',
      stage: 'ENTRANCE_EXAM',
      stageName: 'Stage 3: Lateral Entry Entrance',
      state: isDiplomaCurrent ? 'NEXT_STEP' : 'AVAILABLE',
      iconType: 'award',
      dataRef: { type: 'EXAM', id: 'AP_TS_ECET' },
      details: {
        whatItIs: 'Engineering Common Entrance Test conducted for Diploma and B.Sc holders to enter B.Tech 2nd year. [OFFICIAL]',
        whyItMatters: 'Guarantees direct admission into the 3rd semester (2nd year) of 4-year B.Tech programs, skipping 1st year entirely.',
        mandatoryRequirements: 'Diploma in Engineering with minimum 45% aggregate (40% reserved categories). [OFFICIAL]',
        whenToDoIt: 'Notification in February; Exam conducted in May annually.',
        nextStep: 'Participate in web counseling based on ECET rank to select engineering college branch.',
        alternativeRoute: 'Apply for Public Sector Undertaking (PSU) apprentice posts or Railways Technician roles.',
        realityCheck: 'State universities reserve 10% supernumerary seats for ECET lateral entry. Competition for top colleges is intense.',
        evidenceLevel: 'OFFICIAL',
        sourceCitation: 'AICTE Lateral Entry Provisions & State Higher Education Council'
      }
    });
    edges.push({ id: 'edge_stream_to_ecet', from: 'node_stream', to: 'node_ecet_exam' });

    // B.Tech 2nd Year Node
    nodes.push({
      id: 'node_btech_lateral',
      title: 'B.Tech 2nd Year (Lateral Entry)',
      subtitle: 'Computer Science / Engineering Degree',
      stage: 'UG_DEGREE',
      stageName: 'Stage 4: Degree Completion',
      state: 'AVAILABLE',
      iconType: 'code',
      dataRef: { type: 'COURSE', id: 'BTECH_CSE' },
      details: {
        whatItIs: 'Direct 3-year undergraduate degree completion entering at Semester 3. [OFFICIAL]',
        whyItMatters: 'Completes a full B.Tech engineering degree in the same total timeline post-Class 10 (3 yrs diploma + 3 yrs B.Tech = 6 years total).',
        mandatoryRequirements: 'Valid ECET rank and recognized diploma certificate.',
        whenToDoIt: 'July - August admission cycle.',
        nextStep: 'Focus on Data Structures, Algorithms, and Software Engineering projects during Semesters 3-8.',
        alternativeRoute: 'Core engineering branch or direct job entry as technical associate.',
        realityCheck: 'Lateral entry students must catch up quickly on 1st-year university mathematics while balancing 2nd-year core subjects.',
        evidenceLevel: 'OFFICIAL',
        sourceCitation: 'AICTE Approval Process Handbook (Sec 1.3)'
      }
    });
    edges.push({ id: 'edge_ecet_to_btech', from: 'node_ecet_exam', to: 'node_btech_lateral' });

    // Bridging Node
    nodes.push({
      id: 'node_skills_bridge',
      title: 'Skills & Portfolio Bridge',
      subtitle: 'DSA + 2-3 Deployed GitHub Projects',
      stage: 'SKILL_BRIDGE',
      stageName: 'Stage 5: Industry Readiness',
      state: 'AVAILABLE',
      iconType: 'layers',
      details: {
        whatItIs: 'Self-directed practical preparation: Data Structures & Algorithms, modern frameworks (React/Node), and technical internship.',
        whyItMatters: 'Degrees verify academic qualification; technical coding tests and portfolio repositories determine job offers.',
        mandatoryRequirements: 'Demonstrable problem-solving skills, public code repositories, and system design fundamentals.',
        whenToDoIt: 'Pre-final and final year of engineering (Semesters 5 to 7).',
        nextStep: 'Campus placement technical rounds, hackathons, and off-campus referrals.',
        alternativeRoute: 'GATE exam preparation for M.Tech admissions in IITs/NITs.',
        realityCheck: 'Recruiters do not look at marksheets after screening; they inspect GitHub repositories, deployed projects, and live coding performance.',
        evidenceLevel: 'STRONGLY_SUPPORTED',
        sourceCitation: 'NASSCOM Technical Hiring Guidelines'
      }
    });
    edges.push({ id: 'edge_btech_to_bridge', from: 'node_btech_lateral', to: 'node_skills_bridge' });

    // Job Role
    nodes.push({
      id: 'node_target_job',
      title: 'Software Engineer / Junior Engineer',
      subtitle: 'IT Product Firms / PSU Infrastructure',
      stage: 'JOB_ROLE',
      stageName: 'Stage 6: Target Career',
      state: 'AVAILABLE',
      iconType: 'briefcase',
      dataRef: { type: 'JOB', id: 'SOFTWARE_ENGINEER' },
      details: {
        whatItIs: 'Full-time engineering role building software products or maintaining public engineering infrastructure.',
        whyItMatters: 'Sustainable, high-growth technical career with competitive compensation.',
        mandatoryRequirements: 'Clear technical screening + B.Tech degree or Diploma for JE roles.',
        whenToDoIt: 'Graduation year (Month 42-48).',
        nextStep: 'Senior Developer / Module Lead progression in 2-3 years.',
        alternativeRoute: 'Higher studies (GATE for M.Tech or CAT for MBA).',
        realityCheck: 'Continuous learning is essential as technology stacks evolve rapidly.',
        evidenceLevel: 'OFFICIAL',
        sourceCitation: 'AICTE / Industry Recruitment Benchmarks'
      }
    });
    edges.push({ id: 'edge_bridge_to_job', from: 'node_skills_bridge', to: 'node_target_job' });

  } else {
    // Intermediate Streams (MPC, BiPC, MEC, CEC, HEC, PCMB)
    const isInterCurrent = profile.currentStage === 'CLASS_11_12';

    nodes.push({
      id: 'node_stream',
      title: streamInfo.name,
      subtitle: `${streamInfo.mandatorySubjects.join(', ')}`,
      stage: 'INTERMEDIATE',
      stageName: 'Stage 2: Higher Secondary / Inter',
      state: isInterCurrent ? 'YOU_ARE_HERE' : (isClass10Current ? 'NEXT_STEP' : 'COMPLETED'),
      iconType: 'book-open',
      dataRef: { type: 'STREAM', id: streamInfo.id },
      details: {
        whatItIs: streamInfo.description,
        whyItMatters: streamInfo.whoPrefers,
        mandatoryRequirements: 'Class 10 pass from a recognized board. [OFFICIAL]',
        whenToDoIt: 'Enrollment immediately following Class 10 results (May - July).',
        nextStep: 'Identify targeted national or state entrance exams by Month 3 of Junior Inter / Class 11.',
        alternativeRoute: '3-Year Polytechnic Diploma in Engineering if practical workshop learning is preferred.',
        realityCheck: 'Stream choice fundamentally determines which undergraduate degrees remain statutorily open. Science keeps almost all options open, while Arts/Commerce closes core medical and core engineering.',
        evidenceLevel: streamInfo.evidenceLevel,
        sourceCitation: streamInfo.sourceCitation
      }
    });
    edges.push({ id: 'edge_10_to_stream', from: 'stage_class_10', to: 'node_stream' });

    // Plan B / Alternative branch node
    if (streamCode === 'MPC' || streamCode === 'PCMB') {
      nodes.push({
        id: 'node_alt_diploma',
        title: 'Plan B: 3-Year Polytechnic Diploma',
        subtitle: 'Workshop-first technical route',
        stage: 'POLYTECHNIC',
        stageName: 'Alternative Route',
        state: 'ALTERNATIVE',
        isAlternative: true,
        iconType: 'wrench',
        details: {
          whatItIs: 'Alternative post-10th engineering route offering direct entry to 2nd year B.Tech via ECET. [OFFICIAL]',
          whyItMatters: 'Avoids intense 2-year competitive intermediate coaching while still completing a B.Tech degree in 6 years total.',
          mandatoryRequirements: 'Class 10 pass with Math & Science.',
          whenToDoIt: 'Concurrently with Class 10 admissions.',
          nextStep: 'Appear for State POLYCET.',
          alternativeRoute: 'Standard Intermediate MPC.',
          realityCheck: 'Does not qualify for direct IIT admissions, but fully valid for all state and deemed engineering colleges.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'AICTE Lateral Entry Provisions'
        }
      });
      edges.push({ id: 'edge_10_to_alt_poly', from: 'stage_class_10', to: 'node_alt_diploma', isAlternative: true, isDashed: true });
    }

    // Stage 3: Entrance Exams
    if (streamCode === 'MPC' || streamCode === 'PCMB') {
      nodes.push({
        id: 'node_exam_primary',
        title: 'JEE Main & State EAPCET / EAMCET',
        subtitle: 'National & State Engineering CETs',
        stage: 'ENTRANCE_EXAM',
        stageName: 'Stage 3: Entrance Examinations',
        state: isInterCurrent ? 'NEXT_STEP' : 'AVAILABLE',
        iconType: 'award',
        dataRef: { type: 'EXAM', id: 'JEE_MAIN' },
        details: {
          whatItIs: 'National (JEE Main) and State-level (AP EAPCET / TG EAMCET) entrance examinations for engineering degrees. [OFFICIAL]',
          whyItMatters: 'Determines merit seat allocation and government fee reimbursement eligibility in top universities and NITs.',
          mandatoryRequirements: 'Class 12 with Physics and Mathematics. Minimum 75% for NITs/IITs or 45% for state colleges. [OFFICIAL]',
          whenToDoIt: 'JEE Main Session 1 in Jan, Session 2 in April. State EAMCET in May.',
          nextStep: 'Engage in centralized seat counseling (JoSAA / State Web Counseling) in June - July.',
          alternativeRoute: 'Institutional entrance tests (BITSAT, VITEEE) or direct merit admission in private universities.',
          realityCheck: 'Over 12 Lakh students write JEE Main for ~40,000 NIT/IIIT/GFTI seats. State EAPCET provides high-quality local government/university colleges.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'NTA JEE Bulletin & State Higher Education Councils'
        }
      });
      edges.push({ id: 'edge_stream_to_exam', from: 'node_stream', to: 'node_exam_primary' });

      // Stage 4: Degree
      nodes.push({
        id: 'node_primary_degree',
        title: 'B.Tech in Computer Science / ECE',
        subtitle: '4-Year Engineering Degree',
        stage: 'UG_DEGREE',
        stageName: 'Stage 4: Undergraduate Degree',
        state: 'AVAILABLE',
        iconType: 'code',
        dataRef: { type: 'COURSE', id: 'BTECH_CSE' },
        details: {
          whatItIs: '4-year professional engineering program covering software, algorithms, systems, and computational theory. [OFFICIAL]',
          whyItMatters: 'Most recruited undergraduate qualification in India for software development and technology roles.',
          mandatoryRequirements: 'Class 12 with Math & Physics + Entrance exam qualification.',
          whenToDoIt: 'August start after seat allotment.',
          nextStep: 'Build strong programming fundamentals in C++/Java/Python during 1st and 2nd year.',
          alternativeRoute: 'BCA (3 Years) or B.Sc Computer Science / Data Science.',
          realityCheck: 'Crucial Industry Truth: Having a B.Tech CSE degree alone does not automatically make you a Software Engineer. Real-world job offers require: 300+ solved DSA problems, 2-3 live production projects deployed on GitHub/Cloud, demonstrable system design fundamentals, and active internship experience.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'AICTE Model Curriculum'
        }
      });
      edges.push({ id: 'edge_exam_to_degree', from: 'node_exam_primary', to: 'node_primary_degree' });

      // Alternative Degree: BCA (Plan B)
      nodes.push({
        id: 'node_alt_bca',
        title: 'Plan B: BCA (3 Years)',
        subtitle: 'Rapid software route',
        stage: 'UG_DEGREE',
        stageName: 'Alternative Route',
        state: 'ALTERNATIVE',
        isAlternative: true,
        iconType: 'code',
        dataRef: { type: 'COURSE', id: 'BCA' },
        details: {
          whatItIs: '3-Year Bachelor of Computer Applications focused on practical software and database development. [STRONGLY SUPPORTED]',
          whyItMatters: '1 year shorter duration and lower financial investment compared to 4-year private B.Tech.',
          mandatoryRequirements: 'Class 12 pass.',
          whenToDoIt: 'CUET-UG or college application cycle (May - June).',
          nextStep: 'Self-directed coding and portfolio building.',
          alternativeRoute: 'Follow with 2-year MCA (NIMCET) for NIT credentials.',
          realityCheck: 'Requires strong self-driven DSA practice, as campus placement tiers in tier-3 BCA colleges may have lower initial packages.',
          evidenceLevel: 'STRONGLY_SUPPORTED',
          sourceCitation: 'AICTE Guidelines & University Handbooks'
        }
      });
      edges.push({ id: 'edge_stream_to_alt_bca', from: 'node_stream', to: 'node_alt_bca', isAlternative: true, isDashed: true });

      // Stage 5: Skill Bridge
      nodes.push({
        id: 'node_skills_bridge',
        title: 'Prerequisite Reality Check Bridge',
        subtitle: 'DSA + 2-3 Full-Stack Projects + Internships',
        stage: 'SKILL_BRIDGE',
        stageName: 'Stage 5: Industry Readiness Bridge',
        state: 'AVAILABLE',
        iconType: 'layers',
        details: {
          whatItIs: 'Mandatory bridge from academic syllabus to industry hiring standards.',
          whyItMatters: 'Closes the gap between university theoretical syllabus and practical product engineering expectations.',
          mandatoryRequirements: 'LeetCode DSA proficiency (Arrays, Trees, Graphs, DP), Git/GitHub collaboration, REST/GraphQL APIs, and SQL.',
          whenToDoIt: 'Years 2 through 4 of undergraduate study.',
          nextStep: 'Target technical internships at tech startups or campus placement rounds.',
          alternativeRoute: 'Open-source software contribution or technical blogging.',
          realityCheck: 'Over 80% of engineering graduates face placement rejection due to zero demonstrable coding projects outside course assignments.',
          evidenceLevel: 'STRONGLY_SUPPORTED',
          sourceCitation: 'NASSCOM & Aspiring Minds Employability Reports'
        }
      });
      edges.push({ id: 'edge_degree_to_bridge', from: 'node_primary_degree', to: 'node_skills_bridge' });
      edges.push({ id: 'edge_alt_bca_to_bridge', from: 'node_alt_bca', to: 'node_skills_bridge', isAlternative: true, isDashed: true });

      // Stage 6: Job Role
      nodes.push({
        id: 'node_target_job',
        title: 'Software Engineer / Full-Stack Developer',
        subtitle: '₹4.5 - ₹18 LPA Entry Tier',
        stage: 'JOB_ROLE',
        stageName: 'Stage 6: Target Career',
        state: 'AVAILABLE',
        iconType: 'briefcase',
        dataRef: { type: 'JOB', id: 'SOFTWARE_ENGINEER' },
        details: {
          whatItIs: 'Full-time software engineering role building cloud applications, backend systems, or client interfaces.',
          whyItMatters: 'High long-term career growth, international mobility, and robust compensation bands.',
          mandatoryRequirements: 'Cleared technical interview (DSA + System Design + Live Coding).',
          whenToDoIt: 'Campus drives (Semester 7) and off-campus recruitment.',
          nextStep: 'Transition to Senior Engineer / Tech Lead within 3-5 years.',
          alternativeRoute: 'Higher studies (GATE M.Tech, MS in CS) or Product Management.',
          realityCheck: 'Entry compensation spans widely: ₹3.5 - 6 LPA in service IT companies up to ₹15 - 40 LPA in product tech firms.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'Industry Placement Records & HR Aggregates'
        }
      });
      edges.push({ id: 'edge_bridge_to_job', from: 'node_skills_bridge', to: 'node_target_job' });

      // Locked Route for MPC: Medical MBBS
      nodes.push({
        id: 'node_locked_medical',
        title: 'MBBS (Clinical Medicine)',
        subtitle: 'LOCKED: Requires Class 12 Biology',
        stage: 'UG_DEGREE',
        stageName: 'Restricted Pathway',
        state: 'LOCKED',
        lockReason: 'Statutorily restricted: National Medical Commission (NMC) regulations mandate Biology/Biotechnology in Class 12 for NEET-UG eligibility. [OFFICIAL]',
        iconType: 'lock',
        dataRef: { type: 'COURSE', id: 'MBBS' },
        details: {
          whatItIs: 'Undergraduate clinical medical degree.',
          whyItMatters: 'Statutory medical registration in India.',
          mandatoryRequirements: 'Physics, Chemistry, and Biology/Biotech in 10+2. [OFFICIAL]',
          whenToDoIt: 'NEET-UG exam in May.',
          nextStep: 'Cannot register without Class 12 Biology qualification.',
          alternativeRoute: 'If keen on healthcare from MPC, explore Biomedical Engineering or Healthcare Data Analytics.',
          realityCheck: 'To become eligible for NEET-UG, an MPC student must complete Biology as an additional subject through a recognized open board (such as NIOS).',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'National Medical Commission Graduate Medical Education Regulations'
        }
      });
      edges.push({ id: 'edge_stream_to_locked', from: 'node_stream', to: 'node_locked_medical', isLocked: true });

    } else if (streamCode === 'BiPC') {
      // BiPC Flow
      nodes.push({
        id: 'node_exam_primary',
        title: 'NEET-UG & State EAPCET (Agri/Pharma)',
        subtitle: 'National Medical & State Life Science Entrance',
        stage: 'ENTRANCE_EXAM',
        stageName: 'Stage 3: Entrance Examinations',
        state: isInterCurrent ? 'NEXT_STEP' : 'AVAILABLE',
        iconType: 'award',
        dataRef: { type: 'EXAM', id: 'NEET_UG' },
        details: {
          whatItIs: 'Sole statutory national entrance examination for MBBS, BDS, AYUSH, and veterinary admissions across India. [OFFICIAL]',
          whyItMatters: 'Centralized single-window entrance covering all government, private, and deemed medical colleges.',
          mandatoryRequirements: 'Class 12 with Physics, Chemistry, Biology/Biotech, and English. Minimum age 17. [OFFICIAL]',
          whenToDoIt: 'Conducted first Sunday of May annually.',
          nextStep: 'MCC (Medical Counseling Committee) and state medical counseling in July.',
          alternativeRoute: 'State EAPCET for B.Pharm, Pharm.D, and B.Sc Agriculture.',
          realityCheck: 'Over 23 Lakh candidates compete for ~55,000 government MBBS seats. High cutoff requires thorough NCERT mastery.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'NMC Regulations & NTA NEET Information Bulletin'
        }
      });
      edges.push({ id: 'edge_stream_to_exam', from: 'node_stream', to: 'node_exam_primary' });

      // MBBS Degree Node
      nodes.push({
        id: 'node_primary_degree',
        title: 'MBBS (Bachelor of Medicine & Surgery)',
        subtitle: '5.5 Years (4.5 Yrs + 1 Yr Internship)',
        stage: 'UG_DEGREE',
        stageName: 'Stage 4: Clinical Degree',
        state: 'AVAILABLE',
        iconType: 'heart',
        dataRef: { type: 'COURSE', id: 'MBBS' },
        details: {
          whatItIs: 'Professional medical qualification granting permanent medical council registration to practice medicine. [OFFICIAL]',
          whyItMatters: 'Gateway to clinical diagnosis, patient treatment, and post-graduate medical specialization.',
          mandatoryRequirements: 'Competitive qualifying rank in NEET-UG.',
          whenToDoIt: 'College entry in August/September.',
          nextStep: 'Complete 4.5 years of academic pre-clinical, para-clinical, and clinical phases.',
          alternativeRoute: 'B.Pharm (4 Years) or B.Sc Nursing / Allied Health Sciences.',
          realityCheck: 'Crucial Career Truth: MBBS provides foundational statutory medical council registration (Junior Resident / Medical Officer). Becoming a practicing specialist requires another 3-year MD/MS post-graduate degree via NEET-PG/NEXT, plus optional 3-year Super-Specialization (DM/M.Ch). Total timeline: 8.5 to 11.5 years.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'National Medical Commission Act'
        }
      });
      edges.push({ id: 'edge_exam_to_degree', from: 'node_exam_primary', to: 'node_primary_degree' });

      // Plan B: B.Pharm
      nodes.push({
        id: 'node_alt_bpharm',
        title: 'Plan B: B.Pharm (4 Years)',
        subtitle: 'Pharmaceutical Science & Industry',
        stage: 'UG_DEGREE',
        stageName: 'Alternative Route',
        state: 'ALTERNATIVE',
        isAlternative: true,
        iconType: 'flask-conical',
        dataRef: { type: 'COURSE', id: 'BPHARM' },
        details: {
          whatItIs: '4-Year undergraduate program in drug formulation, pharmacology, and pharmaceutical chemistry. [OFFICIAL]',
          whyItMatters: 'Fast entry into corporate pharma hubs (Hyderabad, Ahmedabad, Bengaluru) with predictable 4-year timeline.',
          mandatoryRequirements: 'Class 12 with Physics and Chemistry, plus Biology or Math.',
          whenToDoIt: 'State EAPCET or institutional admission.',
          nextStep: 'Corporate placement or M.Pharm via GPAT.',
          alternativeRoute: 'Pharm.D (6-Year Clinical Pharmacy) or B.Sc Biotechnology.',
          realityCheck: 'Does not grant clinical medical prescription rights, but opens rapid global pathways in Clinical Research and Regulatory Affairs.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'Pharmacy Council of India Education Regulations'
        }
      });
      edges.push({ id: 'edge_stream_to_alt_bpharm', from: 'node_stream', to: 'node_alt_bpharm', isAlternative: true, isDashed: true });

      // Skill Bridge: 1-Yr Internship + NEET-PG
      nodes.push({
        id: 'node_skills_bridge',
        title: 'Compulsory Rotatory Internship + NEET-PG',
        subtitle: '12 Months Clinical Triage + NEXT Exam',
        stage: 'SKILL_BRIDGE',
        stageName: 'Stage 5: Clinical Training Bridge',
        state: 'AVAILABLE',
        iconType: 'layers',
        details: {
          whatItIs: '1-Year mandatory rotatory clinical internship across Casualty, Surgery, Medicine, Pediatrics, and OBG.',
          whyItMatters: 'Mandatory condition for permanent State Medical Council registration and appearance in NEET-PG/NEXT.',
          mandatoryRequirements: 'Passing all MBBS professional university examinations.',
          whenToDoIt: 'Year 5 of medical training.',
          nextStep: 'Appear for NEET-PG / NEXT for MD/MS specialization seat.',
          alternativeRoute: 'Medical Officer in Primary Health Centres (PHC) or Clinical Research Associate in pharma.',
          realityCheck: 'Internship hours can exceed 70-80 hours per week in government tertiary hospitals.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'NMC Compulsory Rotatory Medical Internship Regulations'
        }
      });
      edges.push({ id: 'edge_degree_to_bridge', from: 'node_primary_degree', to: 'node_skills_bridge' });

      // Job Role
      nodes.push({
        id: 'node_target_job',
        title: 'General Physician / Junior Resident Doctor',
        subtitle: 'Clinical Healthcare Practice',
        stage: 'JOB_ROLE',
        stageName: 'Stage 6: Target Career',
        state: 'AVAILABLE',
        iconType: 'briefcase',
        dataRef: { type: 'JOB', id: 'DOCTOR_PHYSICIAN' },
        details: {
          whatItIs: 'Practicing doctor examining outpatient cases, emergency stabilization, and inpatient management.',
          whyItMatters: 'Direct human life impact, high societal respect, and continuous career stability.',
          mandatoryRequirements: 'MBBS degree + Permanent State Medical Council Registration.',
          whenToDoIt: 'Post-internship (Year 6).',
          nextStep: 'Pursue 3-year MD/MS for specialist practice.',
          alternativeRoute: 'Hospital Administration (MHA) or Clinical Trials.',
          realityCheck: 'Independent private clinic practice usually thrives after post-graduate specialization (MD/MS).',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'National Medical Commission Act'
        }
      });
      edges.push({ id: 'edge_bridge_to_job', from: 'node_skills_bridge', to: 'node_target_job' });

      // Locked Route for BiPC: Core Engineering
      nodes.push({
        id: 'node_locked_engg',
        title: 'B.Tech Core Engineering (Mech/Civil/EE)',
        subtitle: 'LOCKED: Requires Class 12 Math',
        stage: 'UG_DEGREE',
        stageName: 'Restricted Pathway',
        state: 'LOCKED',
        lockReason: 'Statutorily restricted: AICTE and university admissions strictly require Class 12 Mathematics for core engineering disciplines. [OFFICIAL]',
        iconType: 'lock',
        dataRef: { type: 'COURSE', id: 'BTECH_CSE' },
        details: {
          whatItIs: 'Undergraduate core engineering programs.',
          whyItMatters: 'Technical engineering practice.',
          mandatoryRequirements: 'Class 12 Mathematics and Physics. [OFFICIAL]',
          whenToDoIt: 'JEE or EAPCET engineering stream.',
          nextStep: 'Non-math candidates cannot be admitted.',
          alternativeRoute: 'BiPC students can pursue BCA in select universities or B.Tech Biotechnology in universities with bridging provisions.',
          realityCheck: 'To become eligible for core engineering, a BiPC student must clear Class 12 Mathematics through a recognized board like NIOS.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'AICTE Approval Process Handbook (Sec 1.3)'
        }
      });
      edges.push({ id: 'edge_stream_to_locked', from: 'node_stream', to: 'node_locked_engg', isLocked: true });

    } else if (streamCode === 'MEC' || streamCode === 'CEC') {
      // Commerce Flow
      nodes.push({
        id: 'node_exam_primary',
        title: 'CUET-UG & CA Foundation Entrance',
        subtitle: 'Central Universities & ICAI Entrance',
        stage: 'ENTRANCE_EXAM',
        stageName: 'Stage 3: Entrance Examinations',
        state: isInterCurrent ? 'NEXT_STEP' : 'AVAILABLE',
        iconType: 'award',
        dataRef: { type: 'EXAM', id: 'CUET_UG' },
        details: {
          whatItIs: 'Common University Entrance Test (CUET-UG) for top Central Universities and ICAI CA Foundation. [OFFICIAL]',
          whyItMatters: 'Gateway to prestigious colleges (SRCC, Hindu College, Delhi University) and the Chartered Accountancy ladder.',
          mandatoryRequirements: 'Class 12 pass from any recognized board. [OFFICIAL]',
          whenToDoIt: 'CUET in May-June; CA Foundation held twice a year (June & Dec).',
          nextStep: 'Centralized university admission counseling and registering for ICAI Intermediate.',
          alternativeRoute: 'IPMAT (IIM Indore/Rohtak 5-Year Integrated Management) or State University Merit.',
          realityCheck: 'Cutoffs for top commerce colleges in CUET require 98+ percentile in domain subjects.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'UGC Central University Guidelines & ICAI Regulations'
        }
      });
      edges.push({ id: 'edge_stream_to_exam', from: 'node_stream', to: 'node_exam_primary' });

      // B.Com Hons Node
      nodes.push({
        id: 'node_primary_degree',
        title: 'B.Com (Hons) / BBA',
        subtitle: '3-4 Year Commerce & Management',
        stage: 'UG_DEGREE',
        stageName: 'Stage 4: Undergraduate Degree',
        state: 'AVAILABLE',
        iconType: 'file-text',
        dataRef: { type: 'COURSE', id: 'BCOM_HONS' },
        details: {
          whatItIs: 'Undergraduate program covering financial accounting, corporate taxation, cost audit, and mercantile law. [OFFICIAL]',
          whyItMatters: 'Foundational framework for all corporate finance, banking, auditing, and managerial pathways.',
          mandatoryRequirements: 'Class 12 pass with Commerce or Math.',
          whenToDoIt: 'Admission in July.',
          nextStep: 'Pursue professional credentials (CA/CS/CMA/CFA) or learn Financial Modeling in Excel & SQL.',
          alternativeRoute: 'BCA (Computer Applications) for tech-oriented commerce students.',
          realityCheck: 'Crucial Industry Truth: A plain B.Com degree without supplementary professional certifications qualifies graduates primarily for entry-level clerical or basic bookkeeping roles (INR 2-3 LPA). High-value financial analyst or audit careers require concurrently pursuing CA / CS / CMA / CFA Level 1 or mastering Advanced Financial Modeling in Excel & SQL.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'UGC National Higher Education Qualifications Framework'
        }
      });
      edges.push({ id: 'edge_exam_to_degree', from: 'node_exam_primary', to: 'node_primary_degree' });

      // Skill Bridge: CA Articleship / Financial Modeling
      nodes.push({
        id: 'node_skills_bridge',
        title: 'CA Articleship & Financial Modeling Bridge',
        subtitle: '24-Month Practical Audit / Advanced Excel & SQL',
        stage: 'SKILL_BRIDGE',
        stageName: 'Stage 5: Professional Bridge',
        state: 'AVAILABLE',
        iconType: 'layers',
        details: {
          whatItIs: 'Mandatory practical training in an audit firm or corporate finance project portfolio.',
          whyItMatters: 'Transforms academic textbook knowledge into real-world statutory audit, taxation, and financial modeling capability.',
          mandatoryRequirements: 'Clearing CA Intermediate for articleship or demonstrable valuation models.',
          whenToDoIt: 'During or immediately following graduation.',
          nextStep: 'Appear for CA Final or apply for investment banking/corporate finance analyst roles.',
          alternativeRoute: 'Master of Business Administration (MBA Finance via CAT).',
          realityCheck: 'Articleship stipend is modest, but practical exposure to corporate balance sheets is irreplaceable.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'ICAI Practical Training Regulations'
        }
      });
      edges.push({ id: 'edge_degree_to_bridge', from: 'node_primary_degree', to: 'node_skills_bridge' });

      // Target Job
      nodes.push({
        id: 'node_target_job',
        title: 'Chartered Accountant (CA) / Financial Analyst',
        subtitle: '₹8.0 - ₹18 LPA Entry Tier',
        stage: 'JOB_ROLE',
        stageName: 'Stage 6: Target Career',
        state: 'AVAILABLE',
        iconType: 'briefcase',
        dataRef: { type: 'JOB', id: 'CHARTERED_ACCOUNTANT' },
        details: {
          whatItIs: 'High-responsibility corporate advisory, statutory audit, taxation, and financial strategy leadership.',
          whyItMatters: 'Exclusive statutory authority to sign audit reports of companies registered in India.',
          mandatoryRequirements: 'Clearing ICAI CA Final exams and completion of articleship.',
          whenToDoIt: 'Following successful CA Final results.',
          nextStep: 'Senior Audit Associate, CFO track, or independent consulting practice.',
          alternativeRoute: 'Corporate Banking / Private Equity Analyst.',
          realityCheck: 'CA pass percentage in Final ranges from 10% to 20%; requires disciplined persistence.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'ICAI Official Placement Reports'
        }
      });
      edges.push({ id: 'edge_bridge_to_job', from: 'node_skills_bridge', to: 'node_target_job' });

      // Locked Route for Commerce: Core Engineering
      nodes.push({
        id: 'node_locked_engg',
        title: 'B.Tech Core Engineering',
        subtitle: 'LOCKED: Requires Class 12 Math & Physics',
        stage: 'UG_DEGREE',
        stageName: 'Restricted Pathway',
        state: 'LOCKED',
        lockReason: 'Statutorily restricted: AICTE mandates Class 12 Physics & Mathematics for Core Engineering admissions. [OFFICIAL]',
        iconType: 'lock',
        dataRef: { type: 'COURSE', id: 'BTECH_CSE' },
        details: {
          whatItIs: 'Engineering undergraduate degree.',
          whyItMatters: 'Core technical careers.',
          mandatoryRequirements: 'Physics and Mathematics in Class 12. [OFFICIAL]',
          whenToDoIt: 'Engineering CETs.',
          nextStep: 'Not eligible without science bridging.',
          alternativeRoute: 'Commerce students can enter technology via BCA or B.Sc Data Science (via CUET).',
          realityCheck: 'To study core engineering, students must complete physics and math through NIOS open schooling.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'AICTE Approval Process Handbook'
        }
      });
      edges.push({ id: 'edge_stream_to_locked', from: 'node_stream', to: 'node_locked_engg', isLocked: true });

    } else {
      // Humanities / HEC Flow
      nodes.push({
        id: 'node_exam_primary',
        title: 'CLAT, NIFT & CUET-UG Entrance',
        subtitle: 'National Law & Design Entrance',
        stage: 'ENTRANCE_EXAM',
        stageName: 'Stage 3: Entrance Examinations',
        state: isInterCurrent ? 'NEXT_STEP' : 'AVAILABLE',
        iconType: 'award',
        dataRef: { type: 'EXAM', id: 'CLAT' },
        details: {
          whatItIs: 'Premier national competitive entrance exams for 5-Year Integrated Law (CLAT/AILET) and Design (NID/NIFT). [OFFICIAL]',
          whyItMatters: 'Unlocks admissions into 24 National Law Universities (NLUs) and National Institutes of Design/Fashion Technology.',
          mandatoryRequirements: 'Class 12 pass in any stream with minimum 45% marks. [OFFICIAL]',
          whenToDoIt: 'CLAT is conducted in December; NIFT/NID in January.',
          nextStep: 'Participate in centralized counseling for NLU seat allocation.',
          alternativeRoute: 'State LAWCET or CUET-UG for central university humanities.',
          realityCheck: 'CLAT tests comprehension, critical reading, legal reasoning, and current affairs rather than rote memorization.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'Consortium of NLUs & BCI Regulations'
        }
      });
      edges.push({ id: 'edge_stream_to_exam', from: 'node_stream', to: 'node_exam_primary' });

      // BA-LLB Degree Node
      nodes.push({
        id: 'node_primary_degree',
        title: '5-Year Integrated BA-LLB / B.Des',
        subtitle: 'Professional Law / Design Degree',
        stage: 'UG_DEGREE',
        stageName: 'Stage 4: Professional Degree',
        state: 'AVAILABLE',
        iconType: 'scale',
        dataRef: { type: 'COURSE', id: 'BA_LLB' },
        details: {
          whatItIs: '5-Year double degree combining Bachelor of Arts with Bachelor of Laws, accredited by Bar Council of India. [OFFICIAL]',
          whyItMatters: 'Fastest route to becoming an enrolled advocate or corporate legal counsel.',
          mandatoryRequirements: 'Class 12 pass + valid CLAT/LAWCET rank.',
          whenToDoIt: 'Commences in July.',
          nextStep: 'Participate in moot court competitions and secure internships at corporate law firms.',
          alternativeRoute: '3-Year BA followed by 3-Year LLB or UPSC Civil Services preparation.',
          realityCheck: 'Crucial Career Truth: Passing LLB earns your provisional Bar Council enrollment. Becoming an impactful corporate associate or litigation advocate mandates completing 5-6 tier-1 internships at law firms, active moot court participation, and clearing the All India Bar Examination (AIBE).',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'Bar Council of India Legal Education Rules'
        }
      });
      edges.push({ id: 'edge_exam_to_degree', from: 'node_exam_primary', to: 'node_primary_degree' });

      // Skill Bridge: Internships + AIBE
      nodes.push({
        id: 'node_skills_bridge',
        title: 'Moot Courts + 5 Law Firm Internships + AIBE',
        subtitle: 'Practical Legal Training Bridge',
        stage: 'SKILL_BRIDGE',
        stageName: 'Stage 5: Practical Bridge',
        state: 'AVAILABLE',
        iconType: 'layers',
        details: {
          whatItIs: 'Active litigation/corporate internship portfolio and clearing the All India Bar Examination (AIBE).',
          whyItMatters: 'Distinguishes high-performing corporate recruits from generic degree holders.',
          mandatoryRequirements: 'Law degree completion and provisional bar council enrollment.',
          whenToDoIt: 'Throughout years 3-5 of law school.',
          nextStep: 'Placement with tier-1 law firms or chamber practice with Senior Advocates.',
          alternativeRoute: 'Judicial Services Examination or UPSC Civil Services.',
          realityCheck: 'Law firms hire based on research quality, contract drafting speed, and internship feedback.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'Bar Council of India Regulations'
        }
      });
      edges.push({ id: 'edge_degree_to_bridge', from: 'node_primary_degree', to: 'node_skills_bridge' });

      // Target Job: Corporate Lawyer
      nodes.push({
        id: 'node_target_job',
        title: 'Corporate Legal Counsel / Civil Services (IAS)',
        subtitle: 'Corporate Advisory / Public Policy',
        stage: 'JOB_ROLE',
        stageName: 'Stage 6: Target Career',
        state: 'AVAILABLE',
        iconType: 'briefcase',
        dataRef: { type: 'JOB', id: 'CORPORATE_LAWYER' },
        details: {
          whatItIs: 'Corporate transactional legal practice or administrative public leadership.',
          whyItMatters: 'Influential career shaping corporate mergers, policy compliance, or public administration.',
          mandatoryRequirements: 'Permanent Bar License / UPSC CSE qualification.',
          whenToDoIt: 'Post-graduation recruitment.',
          nextStep: 'Partner track or District Administration leadership.',
          alternativeRoute: 'Judicial Magistrate / In-house counsel.',
          realityCheck: 'Top law firms offer ₹14 - 18 LPA starting packages to top 15% NLU graduates with stellar internship records.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'Bar Council of India & Legal Recruitment Reports'
        }
      });
      edges.push({ id: 'edge_bridge_to_job', from: 'node_skills_bridge', to: 'node_target_job' });

      // Locked Route for Humanities: Medical & Engineering
      nodes.push({
        id: 'node_locked_med_engg',
        title: 'MBBS / Core Engineering',
        subtitle: 'LOCKED: Requires Science (PCB/PCM)',
        stage: 'UG_DEGREE',
        stageName: 'Restricted Pathway',
        state: 'LOCKED',
        lockReason: 'Statutorily restricted: NMC and AICTE strictly mandate Physics, Chemistry, and Biology/Math in Class 12. [OFFICIAL]',
        iconType: 'lock',
        details: {
          whatItIs: 'Core medical and engineering professions.',
          whyItMatters: 'Regulated statutory fields.',
          mandatoryRequirements: 'Science group in Class 12. [OFFICIAL]',
          whenToDoIt: 'Not applicable without science schooling.',
          nextStep: 'Not eligible.',
          alternativeRoute: 'Humanities students excel in Law, Civil Services, Product Design, and Public Policy.',
          realityCheck: 'Must sit for Class 12 Science via NIOS to qualify for NEET or JEE.',
          evidenceLevel: 'OFFICIAL',
          sourceCitation: 'NMC / AICTE Statutory Regulations'
        }
      });
      edges.push({ id: 'edge_stream_to_locked', from: 'node_stream', to: 'node_locked_med_engg', isLocked: true });
    }
  }

  return {
    id: `forward_roadmap_${profile.selectedStream || 'default'}`,
    title: `Verified Pathway: ${streamInfo.name}`,
    summary: `Complete step-by-step educational roadmap starting from ${profile.currentStage === 'CLASS_10' ? 'Class 10' : profile.selectedStream || 'Intermediate'} with official prerequisites, entrance exams, reality checks, and Plan-B routes.`,
    nodes,
    edges
  };
}

export function generateBackwardRoadmap(targetJobId: string, currentStage: string = 'CLASS_10'): PathwayGraph {
  const job = JOB_ROLES_DATA.find(j => j.id === targetJobId) || JOB_ROLES_DATA[0];
  const primaryDegree = DEGREE_COURSES_DATA.find(d => job.entryDegreePaths.includes(d.id)) || DEGREE_COURSES_DATA[0];
  const primaryExam = ENTRANCE_EXAMS_DATA.find(e => primaryDegree.entranceExams.includes(e.id)) || ENTRANCE_EXAMS_DATA[0];
  const streamCode = job.directStreams[0] || 'MPC';
  const streamInfo = STREAMS_DATA.find(s => s.code === streamCode) || STREAMS_DATA[0];

  const nodes: PathwayNode[] = [
    {
      id: 'step_10',
      title: 'Class 10 (Secondary School)',
      subtitle: 'Starting Foundation',
      stage: 'CLASS_10',
      stageName: 'Step 1: Starting Foundation',
      state: currentStage === 'CLASS_10' ? 'YOU_ARE_HERE' : 'COMPLETED',
      iconType: 'school',
      details: {
        whatItIs: 'Secondary school completion from CBSE, ICSE, or State Board. [OFFICIAL]',
        whyItMatters: `Establishes eligibility to choose ${streamInfo.name}.`,
        mandatoryRequirements: 'Passing Class 10 with strong grades in foundational subjects.',
        whenToDoIt: 'Standard academic cycle.',
        nextStep: `Enroll in ${streamInfo.name} for Class 11-12.`,
        alternativeRoute: '3-Year Polytechnic Diploma (if targeting engineering technical routes).',
        evidenceLevel: 'OFFICIAL',
        sourceCitation: 'Ministry of Education Guidelines'
      }
    },
    {
      id: 'step_stream',
      title: streamInfo.name,
      subtitle: `Mandatory: ${streamInfo.mandatorySubjects.join(', ')}`,
      stage: 'INTERMEDIATE',
      stageName: 'Step 2: Higher Secondary Selection',
      state: currentStage === 'CLASS_11_12' ? 'YOU_ARE_HERE' : 'NEXT_STEP',
      iconType: 'book-open',
      dataRef: { type: 'STREAM', id: streamInfo.id },
      details: {
        whatItIs: `Mandatory higher secondary stream required to qualify for ${job.title}. [OFFICIAL]`,
        whyItMatters: streamInfo.whoPrefers,
        mandatoryRequirements: `Requires studying: ${streamInfo.mandatorySubjects.join(', ')}.`,
        whenToDoIt: 'Immediately post-Class 10.',
        nextStep: `Begin targeted entrance exam preparation for ${primaryExam.name}.`,
        alternativeRoute: streamInfo.stage === 'INTERMEDIATE' ? 'Polytechnic Diploma route (for engineering jobs)' : 'Class 11-12 MPC',
        realityCheck: 'Failing to take the required subjects at this stage permanently locks the degree route without open schooling bridge exams.',
        evidenceLevel: streamInfo.evidenceLevel,
        sourceCitation: streamInfo.sourceCitation
      }
    },
    {
      id: 'step_exam',
      title: primaryExam.name,
      subtitle: `${primaryExam.conductingAuthority} (${primaryExam.typicalMonthWindow})`,
      stage: 'ENTRANCE_EXAM',
      stageName: 'Step 3: Entrance Gateway',
      state: 'AVAILABLE',
      iconType: 'award',
      dataRef: { type: 'EXAM', id: primaryExam.id },
      details: {
        whatItIs: `Statutory competitive entrance exam required for admission into ${primaryDegree.name}. [OFFICIAL]`,
        whyItMatters: 'Secures subsidized seats in government universities and top autonomous colleges.',
        mandatoryRequirements: primaryExam.eligibilityDescription,
        whenToDoIt: primaryExam.typicalMonthWindow,
        nextStep: 'Participate in centralized counseling.',
        alternativeRoute: 'State-level CETs or Deemed University entrance exams.',
        realityCheck: 'Do not rely on a single entrance exam; register for both National and State examinations as contingency.',
        evidenceLevel: primaryExam.evidenceLevel,
        sourceCitation: primaryExam.sourceCitation
      }
    },
    {
      id: 'step_degree',
      title: primaryDegree.name,
      subtitle: primaryDegree.durationLabel,
      stage: 'UG_DEGREE',
      stageName: 'Step 4: Degree Qualification',
      state: 'AVAILABLE',
      iconType: 'code',
      dataRef: { type: 'COURSE', id: primaryDegree.id },
      details: {
        whatItIs: primaryDegree.name,
        whyItMatters: `Standard recognized educational baseline for becoming a ${job.title}. [OFFICIAL]`,
        mandatoryRequirements: primaryDegree.mandatoryPrerequisites.join('; '),
        whenToDoIt: `Duration: ${primaryDegree.durationLabel}`,
        nextStep: 'Work rigorously on the practical skill bridge alongside the degree curriculum.',
        alternativeRoute: primaryDegree.shortName === 'B.Tech CSE' ? 'BCA (3 Years) + MCA' : 'Alternative specialization degrees',
        realityCheck: primaryDegree.prerequisiteRealityCheck,
        evidenceLevel: primaryDegree.evidenceLevel,
        sourceCitation: primaryDegree.sourceCitation
      }
    },
    {
      id: 'step_reality_bridge',
      title: 'Prerequisite Reality Check Bridge',
      subtitle: 'Mandatory Non-Degree Milestones',
      stage: 'SKILL_BRIDGE',
      stageName: 'Step 5: Real-World Industry Bridge',
      state: 'AVAILABLE',
      iconType: 'layers',
      details: {
        whatItIs: `Essential industry skills and portfolio artifacts needed to bridge from ${primaryDegree.shortName} to ${job.title}.`,
        whyItMatters: job.prerequisiteRealityCheck,
        mandatoryRequirements: `Target Skills: ${job.entryLevelSkills.join(', ')}`,
        whenToDoIt: 'Throughout pre-final and final years of graduation.',
        nextStep: `Complete portfolio milestones: ${job.portfolioMilestones.join('; ')}`,
        alternativeRoute: 'Specialized bootcamps, open-source projects, or formal internships.',
        realityCheck: 'Recruiters reject candidates who only show academic course completion without demonstrable proof of work.',
        evidenceLevel: 'STRONGLY_SUPPORTED',
        sourceCitation: 'Industry Placement & Recruiter Standards'
      }
    },
    {
      id: 'step_target_job',
      title: job.title,
      subtitle: `${job.industrySector} (${job.salaryTiers.entryRange})`,
      stage: 'JOB_ROLE',
      stageName: 'Step 6: Destination Career',
      state: 'AVAILABLE',
      iconType: 'briefcase',
      dataRef: { type: 'JOB', id: job.id },
      details: {
        whatItIs: `Full-time role as ${job.title} in ${job.industrySector}.`,
        whyItMatters: job.typicalDailyWork,
        mandatoryRequirements: `Completion of degree + demonstrable skills (${job.entryLevelSkills.slice(0, 2).join(', ')}).`,
        whenToDoIt: 'Upon graduation and completion of recruitment assessments.',
        nextStep: 'Advance through mid-tier and senior-tier engineering/leadership bands.',
        alternativeRoute: 'Consulting, higher specialization studies, or independent practice.',
        realityCheck: job.salaryTiers.source,
        evidenceLevel: job.evidenceLevel,
        sourceCitation: job.salaryTiers.source
      }
    }
  ];

  const edges: PathwayEdge[] = [
    { id: 'b_edge_1', from: 'step_10', to: 'step_stream' },
    { id: 'b_edge_2', from: 'step_stream', to: 'step_exam' },
    { id: 'b_edge_3', from: 'step_exam', to: 'step_degree' },
    { id: 'b_edge_4', from: 'step_degree', to: 'step_reality_bridge' },
    { id: 'b_edge_5', from: 'step_reality_bridge', to: 'step_target_job' }
  ];

  return {
    id: `backward_roadmap_${job.id}`,
    title: `Reverse Trace: Target ${job.title}`,
    summary: `Backward trace from destination career ${job.title} showing the exact degree, competitive entrance exams, mandatory Class 11-12 stream, and reality check bridge required.`,
    nodes,
    edges
  };
}

export function generateDegreeReverseLookup(degreeId: string): {
  course: DegreeCourse;
  directJobs: JobRole[];
  alternativeJobs: { title: string; bridgeNeeded: string }[];
  higherStudies: string[];
  realityCheck: string;
} {
  const course = DEGREE_COURSES_DATA.find(d => d.id === degreeId) || DEGREE_COURSES_DATA[0];
  const directJobs = JOB_ROLES_DATA.filter(j => course.targetJobRoles.includes(j.id));

  // Non-obvious & alternate roles
  const alternativeJobsMap: Record<string, { title: string; bridgeNeeded: string }[]> = {
    'BTECH_CSE': [
      { title: 'Technical Product Manager', bridgeNeeded: 'Learn Agile, Scrum, user research, and product analytics metrics.' },
      { title: 'Developer Advocate / DevRel', bridgeNeeded: 'Technical blogging, public speaking, GitHub open-source community engagement.' },
      { title: 'Cybersecurity Threat Analyst', bridgeNeeded: 'Network security certs (CompTIA Security+, CEH) and capture-the-flag (CTF) practice.' }
    ],
    'MBBS': [
      { title: 'Medical Director in HealthTech', bridgeNeeded: 'Clinical trial design, regulatory software compliance, medical AI curation.' },
      { title: 'Public Health Epidemiologist (WHO/Govt)', bridgeNeeded: 'Master in Public Health (MPH) + biostatistical analysis.' },
      { title: 'Medico-Legal Consultant', bridgeNeeded: 'Post-graduate diploma in Medical Law & Ethics.' }
    ],
    'BCOM_HONS': [
      { title: 'Data Analyst / BI Specialist', bridgeNeeded: 'Master SQL, Power BI, and Python for financial metrics analysis.' },
      { title: 'FinTech Operations Specialist', bridgeNeeded: 'Learn payment gateway rails, UPI protocols, KYC/AML fraud prevention.' },
      { title: 'Investment Banking Analyst', bridgeNeeded: 'Financial modeling certifications, DCF valuation, and CFA Level 1.' }
    ],
    'BCA': [
      { title: 'Cloud DevOps Engineer', bridgeNeeded: 'Docker, Kubernetes, AWS/GCP certification, CI/CD pipeline automation.' },
      { title: 'UI/UX Product Designer', bridgeNeeded: 'Figma design systems, user journey maps, high-fidelity portfolio case studies.' },
      { title: 'Technical QA Automation Engineer', bridgeNeeded: 'Selenium, Cypress, Playwright automated testing in TypeScript.' }
    ],
    'BA_LLB': [
      { title: 'Data Privacy & AI Ethics Counsel', bridgeNeeded: 'Specialization in Digital Personal Data Protection (DPDP) Act & EU GDPR.' },
      { title: 'Legal Operations Specialist', bridgeNeeded: 'Legal tech workflows, contract lifecycle management (CLM) software.' },
      { title: 'Arbitration & Alternative Dispute Specialist', bridgeNeeded: 'Mediation training and certification with Indian Arbitration Council.' }
    ],
    'BDES_DESIGN': [
      { title: 'Creative Technologist', bridgeNeeded: 'Learn creative coding (Three.js, WebGL, Shader programming).' },
      { title: 'Game Environment & UX Artist', bridgeNeeded: 'Unity/Unreal engine interface design and 3D asset modeling.' },
      { title: 'Brand Identity Strategist', bridgeNeeded: 'Market positioning, consumer psychology, and brand packaging systems.' }
    ],
    'BPHARM': [
      { title: 'Clinical Data Management (CDM) Specialist', bridgeNeeded: 'SAS programming, Good Clinical Practice (GCP) certification, MedDRA coding.' },
      { title: 'Drug Regulatory Affairs Officer', bridgeNeeded: 'Knowledge of FDA 21 CFR regulations, CDSCO filings, CTD dossiers.' },
      { title: 'Medical Science Liaison (MSL)', bridgeNeeded: 'Therapeutic expertise, clinical presentation skills for doctors and key opinion leaders.' }
    ]
  };

  return {
    course,
    directJobs,
    alternativeJobs: alternativeJobsMap[course.id] || [
      { title: 'Civil Services (IAS / IPS via UPSC CSE)', bridgeNeeded: '1-2 years dedicated General Studies and Optional subject prep.' },
      { title: 'Corporate Management Trainee', bridgeNeeded: 'MBA in General Management or Marketing via CAT/XAT.' }
    ],
    higherStudies: course.higherStudies,
    realityCheck: course.prerequisiteRealityCheck
  };
}
