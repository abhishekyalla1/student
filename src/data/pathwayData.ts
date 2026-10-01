import {
  SubjectStream,
  EntranceExam,
  DegreeCourse,
  JobRole,
  CareerTransition,
  PathComparisonData
} from '../types/pathway';

export const STREAMS_DATA: SubjectStream[] = [
  {
    id: 'MPC',
    name: 'MPC (Mathematics, Physics, Chemistry)',
    code: 'MPC',
    stage: 'INTERMEDIATE',
    boards: ['AP_STATE', 'TS_STATE', 'CBSE', 'ICSE', 'OTHER_STATE'],
    mandatorySubjects: ['Mathematics', 'Physics', 'Chemistry'],
    description: 'Rigorous foundation in physical sciences and quantitative mathematics. The standard launchpad for engineering, architecture, pure sciences, and computing across India.',
    whoPrefers: 'Students aiming for engineering, computer science, architecture, pure physics/math research, defense services (NDA), or quantitative finance.',
    doorsOpen: [
      'B.Tech / B.E. (All Engineering branches)',
      'B.Arch (Architecture via NATA/JEE Paper 2)',
      'BCA & B.Sc Computer Science / Data Science',
      'National Defence Academy (NDA - Army/Navy/Air Force)',
      'B.Sc Mathematics, Physics, Chemistry (Pure Sciences)',
      'B.Com, BBA, CA, Law (BA-LLB)'
    ],
    doorsClosed: [
      'MBBS, BDS, BAMS, BHMS (Core Medical requires Biology [OFFICIAL])',
      'B.Sc Nursing, Veterinary Science (Requires Biology [OFFICIAL])'
    ],
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'BIEAP / TSBIE Curriculum Gazettes & AICTE Approval Process Handbook (Sec 1.3)'
  },
  {
    id: 'BiPC',
    name: 'BiPC (Biology, Physics, Chemistry)',
    code: 'BiPC',
    stage: 'INTERMEDIATE',
    boards: ['AP_STATE', 'TS_STATE', 'CBSE', 'ICSE', 'OTHER_STATE'],
    mandatorySubjects: ['Biology (Botany & Zoology)', 'Physics', 'Chemistry'],
    description: 'Comprehensive study of life sciences, cellular biology, organic and inorganic chemistry, and physical principles. The primary gateway to clinical healthcare, pharmaceuticals, and agricultural sciences.',
    whoPrefers: 'Students passionate about medicine, clinical healthcare, dentistry, pharmaceuticals, veterinary sciences, nursing, and biotechnology.',
    doorsOpen: [
      'MBBS & BDS (via NEET-UG)',
      'B.Pharm & 6-Year Pharm.D (Doctor of Pharmacy)',
      'B.Sc Agriculture, Horticulture, Forestry (via EAPCET/ICAR)',
      'B.Sc Nursing & Allied Health Sciences (Radiology, Lab Tech)',
      'B.Sc Biotechnology, Microbiology, Genetics',
      'Law (BA-LLB), BBA, Psychology, Journalism'
    ],
    doorsClosed: [
      'Core Engineering (B.Tech Mechanical, Civil, CSE in IITs/NITs requiring Math [OFFICIAL])',
      'B.Arch (Architecture requires Class 12 Mathematics [OFFICIAL])',
      'NDA Airforce & Navy wings (Require Math & Physics [OFFICIAL])'
    ],
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'National Medical Commission (NMC) Guidelines & BIEAP Stream Regulations'
  },
  {
    id: 'PCMB',
    name: 'PCMB (Physics, Chemistry, Mathematics, Biology)',
    code: 'PCMB',
    stage: 'INTERMEDIATE',
    boards: ['CBSE', 'ICSE', 'AP_STATE', 'TS_STATE', 'OTHER_STATE'],
    mandatorySubjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    description: 'Dual-science combination retaining maximum career versatility across both medical and engineering disciplines, at the expense of an intensive academic workload.',
    whoPrefers: 'Students undecided between engineering and medical fields, or targeting interdisciplinary domains like Biomedical Engineering, Computational Biology, or Bioinformatics.',
    doorsOpen: [
      'All Engineering disciplines (B.Tech / B.E.)',
      'All Medical & Life Science programs (MBBS, BDS, B.Pharm, Agri)',
      'B.Arch & Design programs',
      'Pure Sciences, Pure Math, and Computing',
      'All Commerce, Management, and Liberal Arts degrees'
    ],
    doorsClosed: [],
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'CBSE Senior Secondary Curriculum Guidelines & AICTE/NMC Regulations'
  },
  {
    id: 'MEC',
    name: 'MEC (Mathematics, Economics, Commerce)',
    code: 'MEC',
    stage: 'INTERMEDIATE',
    boards: ['AP_STATE', 'TS_STATE', 'CBSE', 'OTHER_STATE'],
    mandatorySubjects: ['Mathematics', 'Economics', 'Commerce / Accountancy'],
    description: 'Combines analytical quantitative mathematical rigor with business structures, financial accounting, and macroeconomic principles. Ideal for corporate finance, data analysis, and commercial leadership.',
    whoPrefers: 'Students targeting Chartered Accountancy (CA), Investment Banking, Corporate Law, Data Analytics, or Business Management (BBA/IPM).',
    doorsOpen: [
      'B.Com (Hons) & B.Com Financial Markets',
      'BBA / IPM (5-Year Integrated Program at IIM Indore/Rohtak)',
      'BCA (Bachelor of Computer Applications - in universities requiring Math)',
      'Chartered Accountancy (CA Foundation), CMA, CS',
      'B.Sc Economics (Hons) & B.Sc Applied Statistics',
      '5-Year Integrated Law (BBA-LLB, BA-LLB via CLAT)'
    ],
    doorsClosed: [
      'B.Tech / B.E. (Core Engineering requiring Physics/Chemistry [OFFICIAL])',
      'MBBS / BDS / Medical & Dental streams [OFFICIAL]',
      'B.Sc in core Physical Sciences (Physics, Chemistry, Botany)'
    ],
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'BIEAP / TSBIE Commerce Regulations & ICAI Foundation Eligibility'
  },
  {
    id: 'CEC',
    name: 'CEC (Civics, Economics, Commerce)',
    code: 'CEC',
    stage: 'INTERMEDIATE',
    boards: ['AP_STATE', 'TS_STATE', 'CBSE', 'OTHER_STATE'],
    mandatorySubjects: ['Civics / Political Science', 'Economics', 'Commerce'],
    description: 'Focuses on trade mechanisms, accounting, public governance, and economic systems without intensive higher mathematics. Direct pathway into general commerce, banking, and public service exams.',
    whoPrefers: 'Students aiming for standard banking roles, business administration, government examinations (State PSC, SSC), corporate secretarial practice, or entrepreneurship.',
    doorsOpen: [
      'B.Com (General, Computer Applications)',
      'BBA (Bachelor of Business Administration)',
      'CA Foundation, CMA Foundation, CS Executive Entrance',
      '5-Year Integrated Law (BA-LLB, BBA-LLB)',
      'Bachelor of Hotel Management (BHM), Journalism (BJMC)',
      'State Civil Services preparation & Banking PO exams'
    ],
    doorsClosed: [
      'Core Engineering (B.Tech)',
      'Core Medical & Dental (MBBS / BDS / B.Pharm)',
      'B.Sc Data Science or Economics requiring Higher Math in tier-1 central universities'
    ],
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'TSBIE / BIEAP Intermediate Commerce Framework'
  },
  {
    id: 'HEC',
    name: 'HEC / Humanities (History, Economics, Civics)',
    code: 'HEC',
    stage: 'INTERMEDIATE',
    boards: ['AP_STATE', 'TS_STATE', 'CBSE', 'ICSE', 'OTHER_STATE'],
    mandatorySubjects: ['History', 'Economics', 'Civics / Political Science / Sociology'],
    description: 'In-depth exploration of human society, constitutional law, historical structures, and social dynamics. Renowned as the foundational base for civil services (UPSC) and legal practice.',
    whoPrefers: 'Students with a vision for UPSC Civil Services (IAS/IPS), Judicial Services, Litigation, Public Policy, Journalism, International Relations, or Design.',
    doorsOpen: [
      'BA (Hons) Political Science, History, Sociology, Economics',
      '5-Year Integrated Law (BA-LLB via CLAT/AILET)',
      'Bachelor of Design (B.Des via NID/NIFT)',
      'Journalism & Mass Communication (BJMC)',
      'Bachelor of Social Work (BSW), Event Management',
      'UPSC Civil Services & State Public Service Commissions'
    ],
    doorsClosed: [
      'Engineering (B.Tech)',
      'Medicine, Dentistry, Nursing, Pharmacy (MBBS/BDS/B.Pharm)',
      'Pure Physical Sciences (B.Sc Math, Physics, Chemistry)'
    ],
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'UGC Minimum Standards for Undergraduate Instruction & BIEAP Regulations'
  },
  {
    id: 'POLYTECHNIC',
    name: '3-Year Polytechnic Diploma (Engineering)',
    code: 'POLYTECHNIC',
    stage: 'POLYTECHNIC',
    boards: ['AP_STATE', 'TS_STATE', 'OTHER_STATE'],
    mandatorySubjects: ['Applied Mathematics', 'Applied Physics', 'Core Technical Specialization'],
    description: 'Direct hands-on engineering technician diploma post-Class 10. Offers a powerful statutory lateral entry gateway straight into the 2nd year of 4-year B.Tech programs via state ECET exams.',
    whoPrefers: 'Students who prefer experiential, workshop-based engineering learning over two years of high-stress Class 11-12 rote examinations, or those seeking early technical employment.',
    doorsOpen: [
      'B.Tech 2nd Year (Direct Lateral Entry via ECET into 3rd Semester) [OFFICIAL]',
      'Junior Engineer (JE) in Central/State Government (SSC JE, Railways RRB JE, State Power Gencos/Transcos)',
      'Technical Supervisor and Quality Inspector roles in manufacturing & automotive',
      'Advanced Diploma & Specialist Skill Certifications'
    ],
    doorsClosed: [
      'Direct admission into MBBS/BDS/Medical pathways [OFFICIAL]',
      'Direct entry to 1st year B.Tech in IITs (IITs do not accept lateral entry diplomas; only state/deemed universities)'
    ],
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'AICTE Approval Process Handbook (Lateral Entry Provisions) & State SBTET Gazettes'
  },
  {
    id: 'ITI',
    name: 'Industrial Training Institute (ITI Trades - 1 to 2 Years)',
    code: 'ITI',
    stage: 'ITI',
    boards: ['ALL'],
    mandatorySubjects: ['Trade Theory', 'Trade Practical', 'Workshop Calculation & Science'],
    description: 'Vocational craftsman training programs managed under DGT / NCVET. Focuses on essential industrial craft trades (Electrician, Fitter, Machinist, Welder, COPA).',
    whoPrefers: 'Students seeking fast, cost-effective entry into skilled industrial trades or public sector technical roles within 12 to 24 months.',
    doorsOpen: [
      'Assistant Loco Pilot (ALP) & Technician in Indian Railways',
      'Defense Ordnance Factories, BHEL, NTPC, IOCL Technician positions',
      'State Electricity Board Line Inspector / Electrician posts',
      'Lateral Entry into 2nd year of 3-Year Polytechnic Diploma [OFFICIAL]',
      'National Apprenticeship Certificate (NAC) via NAPS'
    ],
    doorsClosed: [
      'Direct admission to Degree programs (B.Tech, B.Com, MBBS) without completing Class 12 or Polytechnic Diploma first'
    ],
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'Directorate General of Training (DGT) / NCVET Craftsmen Training Scheme Gazette'
  }
];

export const ENTRANCE_EXAMS_DATA: EntranceExam[] = [
  {
    id: 'JEE_MAIN',
    name: 'Joint Entrance Examination - Main (JEE Main)',
    shortName: 'JEE Main',
    category: 'ENGINEERING',
    conductingAuthority: 'National Testing Agency (NTA)',
    level: 'NATIONAL',
    eligibleStreams: ['MPC', 'PCMB'],
    eligibilityDescription: 'Passed Class 12 with Physics, Mathematics, and Chemistry/CS with minimum 75% aggregate (or top 20 percentile) for NITs/IIITs. [OFFICIAL]',
    typicalMonthWindow: 'Session 1: January | Session 2: April',
    examFrequency: 'Twice a year (Jan & April)',
    officialPortal: 'https://jeemain.nta.nic.in',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'NTA JEE Main Information Bulletin 2024-2025'
  },
  {
    id: 'JEE_ADVANCED',
    name: 'Joint Entrance Examination - Advanced (JEE Advanced)',
    shortName: 'JEE Adv',
    category: 'ENGINEERING',
    conductingAuthority: 'Indian Institutes of Technology (IITs on rotation)',
    level: 'NATIONAL',
    eligibleStreams: ['MPC', 'PCMB'],
    eligibilityDescription: 'Must rank among top 2,50,000 successful candidates in JEE Main Paper 1. Maximum two attempts in consecutive years. [OFFICIAL]',
    typicalMonthWindow: 'May - June',
    examFrequency: 'Once a year (May)',
    officialPortal: 'https://jeeadv.ac.in',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'Joint Admission Board (JAB) IIT Gazetted Regulations'
  },
  {
    id: 'AP_TS_EAMCET',
    name: 'AP EAPCET & TG EAMCET (Engineering, Agriculture & Pharmacy CET)',
    shortName: 'EAPCET / EAMCET',
    category: 'ENGINEERING',
    conductingAuthority: 'APSCHE / TSCHE (State Higher Education Councils)',
    level: 'STATE',
    statesApplicable: ['AP', 'TS'],
    eligibleStreams: ['MPC', 'BiPC', 'PCMB'],
    eligibilityDescription: 'Passed Intermediate (Class 12) from BIEAP/TSBIE or equivalent with minimum 45% (40% reserved) in group subjects. MPC for Engineering; BiPC for Agri/Pharma. [OFFICIAL]',
    typicalMonthWindow: 'May - June',
    examFrequency: 'Once a year (May)',
    officialPortal: 'https://cets.apsche.ap.gov.in / https://eapcet.tsche.ac.in',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'Andhra Pradesh & Telangana State Higher Education Council Statutory Acts'
  },
  {
    id: 'NEET_UG',
    name: 'National Eligibility cum Entrance Test - Undergraduate (NEET-UG)',
    shortName: 'NEET-UG',
    category: 'MEDICAL',
    conductingAuthority: 'National Testing Agency (NTA)',
    level: 'NATIONAL',
    eligibleStreams: ['BiPC', 'PCMB'],
    eligibilityDescription: 'Passed Class 12 with Physics, Chemistry, Biology/Biotech, and English. Minimum age 17 years as on Dec 31 of admission year. Minimum 50% aggregate in PCB (40% SC/ST/OBC). [OFFICIAL]',
    typicalMonthWindow: 'May (First Sunday)',
    examFrequency: 'Once a year (May)',
    officialPortal: 'https://neet.nta.nic.in',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'National Medical Commission (NMC) Regulations on Graduate Medical Education'
  },
  {
    id: 'CUET_UG',
    name: 'Common University Entrance Test - Undergraduate (CUET-UG)',
    shortName: 'CUET-UG',
    category: 'CENTRAL_UNIV',
    conductingAuthority: 'National Testing Agency (NTA)',
    level: 'NATIONAL',
    eligibleStreams: ['MPC', 'BiPC', 'PCMB', 'MEC', 'CEC', 'HEC'],
    eligibilityDescription: 'Class 12 pass from any recognized board. Subject domain selection maps directly to individual university course eligibility criteria. [OFFICIAL]',
    typicalMonthWindow: 'May - June',
    examFrequency: 'Once a year (May)',
    officialPortal: 'https://exams.nta.ac.in/CUET-UG',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'University Grants Commission (UGC) Guidelines on Central University Admissions'
  },
  {
    id: 'CLAT',
    name: 'Common Law Admission Test (CLAT)',
    shortName: 'CLAT',
    category: 'LAW',
    conductingAuthority: 'Consortium of National Law Universities',
    level: 'NATIONAL',
    eligibleStreams: ['MPC', 'BiPC', 'PCMB', 'MEC', 'CEC', 'HEC'],
    eligibilityDescription: 'Class 12 pass with at least 45% aggregate (40% SC/ST). No upper age limit. Gateway to 24 prestigious National Law Universities for 5-yr BA-LLB/BBA-LLB. [OFFICIAL]',
    typicalMonthWindow: 'December (Prior Year)',
    examFrequency: 'Once a year (December)',
    officialPortal: 'https://consortiumofnlus.ac.in',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'Consortium of National Law Universities Admission Regulations'
  },
  {
    id: 'AP_TS_ECET',
    name: 'AP ECET & TG ECET (Engineering Common Entrance Test for Lateral Entry)',
    shortName: 'ECET (Lateral Entry)',
    category: 'LATERAL_ENTRY',
    conductingAuthority: 'APSCHE / TSCHE',
    level: 'STATE',
    statesApplicable: ['AP', 'TS'],
    eligibleStreams: ['POLYTECHNIC'],
    eligibilityDescription: 'Diploma in Engineering and Technology with minimum 45% aggregate marks (40% reserved). Qualifies for direct admission into 2nd year B.Tech. [OFFICIAL]',
    typicalMonthWindow: 'May',
    examFrequency: 'Once a year (May)',
    officialPortal: 'https://cets.apsche.ap.gov.in',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'AICTE Lateral Entry Provisions & State Higher Education Council Gazettes'
  },
  {
    id: 'NATA',
    name: 'National Aptitude Test in Architecture (NATA)',
    shortName: 'NATA',
    category: 'ARCHITECTURE',
    conductingAuthority: 'Council of Architecture (CoA)',
    level: 'NATIONAL',
    eligibleStreams: ['MPC', 'PCMB'],
    eligibilityDescription: 'Passed Class 12 with Physics, Chemistry, and Mathematics, OR 10+3 Diploma with Mathematics as compulsory subject. [OFFICIAL]',
    typicalMonthWindow: 'April - July (Multiple weekend slots)',
    examFrequency: 'Multiple attempts per year',
    officialPortal: 'https://www.nata.in',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'Council of Architecture (Minimum Standards of Architectural Education) Regulations'
  },
  {
    id: 'NIFT_NID',
    name: 'NIFT Entrance Exam & NID DAT (Design Aptitude Test)',
    shortName: 'NIFT / NID DAT',
    category: 'DESIGN',
    conductingAuthority: 'National Institute of Fashion Technology / National Institute of Design',
    level: 'NATIONAL',
    eligibleStreams: ['MPC', 'BiPC', 'PCMB', 'MEC', 'CEC', 'HEC'],
    eligibilityDescription: 'Class 12 pass from any recognized board in any stream. Evaluates creative ability, spatial awareness, and design aptitude. [OFFICIAL]',
    typicalMonthWindow: 'January - February',
    examFrequency: 'Once a year',
    officialPortal: 'https://nift.ac.in / https://admissions.nid.edu',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'Statutory Institutes of National Importance Admission Ordinances'
  },
  {
    id: 'NDA_EXAM',
    name: 'National Defence Academy (NDA & NA Examination)',
    shortName: 'UPSC NDA',
    category: 'DEFENSE',
    conductingAuthority: 'Union Public Service Commission (UPSC)',
    level: 'NATIONAL',
    eligibleStreams: ['MPC', 'PCMB'],
    eligibilityDescription: 'Unmarried male/female candidates aged 16.5 to 19.5 years. Physics & Mathematics mandatory for Air Force and Navy wings; any stream for Army wing. [OFFICIAL]',
    typicalMonthWindow: 'NDA 1: April | NDA 2: September',
    examFrequency: 'Twice a year',
    officialPortal: 'https://upsc.gov.in',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'UPSC Gazetted Notification on National Defence Academy Admissions'
  }
];

export const DEGREE_COURSES_DATA: DegreeCourse[] = [
  {
    id: 'BTECH_CSE',
    name: 'B.Tech in Computer Science & Engineering (CSE)',
    shortName: 'B.Tech CSE',
    degreeLevel: 'Undergraduate',
    durationYears: 4,
    durationLabel: '4 Years (8 Semesters)',
    streamsAllowed: ['MPC', 'PCMB', 'POLYTECHNIC'],
    mandatoryPrerequisites: [
      'Physics and Mathematics in Class 12 / Intermediate',
      'Or 3-Year Polytechnic Diploma in Engineering (via Lateral Entry)'
    ],
    entranceExams: ['JEE_MAIN', 'JEE_ADVANCED', 'AP_TS_EAMCET', 'AP_TS_ECET'],
    skillsDeveloped: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java / C++ / Python)',
      'Database Management Systems (SQL & NoSQL)',
      'Computer Networks, OS, and System Architecture',
      'Web, Cloud, and Mobile Development Fundamentals'
    ],
    prerequisiteRealityCheck: 'Crucial Industry Truth: Having a B.Tech CSE degree alone does not automatically make you a Software Engineer. Real-world job offers require: 300+ solved DSA problems, 2-3 live production projects deployed on GitHub/Cloud, demonstrable system design fundamentals, and active internship experience.',
    targetJobRoles: ['SOFTWARE_ENGINEER', 'DATA_ANALYST'],
    higherStudies: ['M.Tech in AI/ML (via GATE)', 'MS in Computer Science (GRE)', 'MBA (CAT)'],
    costCategory: 'Moderate',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'AICTE Model Curriculum & University Engineering Ordinances'
  },
  {
    id: 'MBBS',
    name: 'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
    shortName: 'MBBS',
    degreeLevel: 'Professional',
    durationYears: 5.5,
    durationLabel: '5.5 Years (4.5 Yrs Academic + 1 Yr Compulsory Rotatory Internship)',
    streamsAllowed: ['BiPC', 'PCMB'],
    mandatoryPrerequisites: [
      'Physics, Chemistry, and Biology/Biotech in Class 12 / Intermediate',
      'Qualifying cutoff in NEET-UG (minimum 50th percentile general)'
    ],
    entranceExams: ['NEET_UG'],
    skillsDeveloped: [
      'Clinical Pathology & Human Anatomy',
      'Patient Bedside Diagnosis & Triage',
      'Pharmacology & Therapeutic Regimens',
      'Surgical Assistance, Emergency Medicine, & Patient Care Protocols'
    ],
    prerequisiteRealityCheck: 'Crucial Career Truth: MBBS provides foundational statutory medical council registration (Junior Resident / Medical Officer). Becoming a practicing specialist requires another 3-year MD/MS post-graduate degree via NEET-PG/NEXT, plus optional 3-year Super-Specialization (DM/M.Ch). Total timeline: 8.5 to 11.5 years.',
    targetJobRoles: ['DOCTOR_PHYSICIAN'],
    higherStudies: ['MD / MS Specialization (via NEET-PG / NEXT)', 'DNB (Diplomate of National Board)', 'MHA (Hospital Admin)'],
    costCategory: 'Subsidized / Govt Low',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'National Medical Commission (NMC) Act & NEET-UG Regulations'
  },
  {
    id: 'BCOM_HONS',
    name: 'B.Com / B.Com (Hons) (Bachelor of Commerce)',
    shortName: 'B.Com (Hons)',
    degreeLevel: 'Undergraduate',
    durationYears: 3,
    durationLabel: '3 Years (4 Years with Research under NEP 2020)',
    streamsAllowed: ['MEC', 'CEC', 'MPC', 'HEC', 'PCMB'],
    mandatoryPrerequisites: ['Class 12 pass from a recognized board (Commerce or Math subjects preferred)'],
    entranceExams: ['CUET_UG'],
    skillsDeveloped: [
      'Corporate Accounting & Financial Reporting',
      'Direct & Indirect Taxation (GST & Income Tax)',
      'Cost Auditing, Business Law, and Corporate Governance',
      'Financial Management and Working Capital Analysis'
    ],
    prerequisiteRealityCheck: 'Crucial Industry Truth: A plain B.Com degree without supplementary professional certifications qualifies graduates primarily for entry-level clerical or basic bookkeeping roles (INR 2-3 LPA). High-value financial analyst or audit careers require concurrently pursuing CA / CS / CMA / CFA Level 1 or mastering Advanced Financial Modeling in Excel & SQL.',
    targetJobRoles: ['CHARTERED_ACCOUNTANT', 'DATA_ANALYST'],
    higherStudies: ['Chartered Accountancy (CA)', 'M.Com', 'MBA in Finance (CAT/XAT)'],
    costCategory: 'Subsidized / Govt Low',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'UGC National Higher Education Qualifications Framework (NHEQF) & BIEAP Regulations'
  },
  {
    id: 'BCA',
    name: 'BCA (Bachelor of Computer Applications)',
    shortName: 'BCA',
    degreeLevel: 'Undergraduate',
    durationYears: 3,
    durationLabel: '3 Years (4 Years under NEP 2020)',
    streamsAllowed: ['MEC', 'MPC', 'PCMB', 'CEC', 'BiPC'],
    mandatoryPrerequisites: [
      'Class 12 pass in any stream (Many central and state universities require Mathematics/Computer Science in Class 12; some accept non-math with bridging course)'
    ],
    entranceExams: ['CUET_UG'],
    skillsDeveloped: [
      'Application Development (Java / Python / Web)',
      'Database Architecture (PostgreSQL / MySQL)',
      'Web Technologies (HTML5, CSS3, JavaScript, React)',
      'Software Testing and Agile Methodologies'
    ],
    prerequisiteRealityCheck: 'Crucial Industry Truth: Top-tier tech companies historically prioritized 4-year B.Tech grads for on-campus drives. BCA graduates can access the exact same high-paying Software Engineer roles by self-studying standard DSA, publishing production repositories, or completing an MCA (Master of Computer Applications).',
    targetJobRoles: ['SOFTWARE_ENGINEER', 'DATA_ANALYST'],
    higherStudies: ['MCA (via NIMCET for NITs / State CETs)', 'M.Sc Data Science', 'MBA in IT Management'],
    costCategory: 'Moderate',
    evidenceLevel: 'STRONGLY_SUPPORTED',
    sourceCitation: 'AICTE Norms for Computer Applications & University Academic Handbooks'
  },
  {
    id: 'BA_LLB',
    name: 'Integrated BA-LLB / BBA-LLB (5-Year Professional Law)',
    shortName: '5-Yr BA-LLB',
    degreeLevel: 'Professional',
    durationYears: 5,
    durationLabel: '5 Years (10 Semesters)',
    streamsAllowed: ['HEC', 'CEC', 'MEC', 'MPC', 'BiPC', 'PCMB'],
    mandatoryPrerequisites: [
      'Class 12 pass in any stream with minimum 45% marks (40% reserved)',
      'Valid score in national/state law entrance (CLAT, AILET, State LAWCET)'
    ],
    entranceExams: ['CLAT'],
    skillsDeveloped: [
      'Constitutional, Criminal, Corporate, and Civil Law',
      'Legal Drafting, Case Analysis, and Statutory Interpretation',
      'Moot Court Trial Advocacy and Evidence Presentation',
      'Contract Negotiation and Corporate Due Diligence'
    ],
    prerequisiteRealityCheck: 'Crucial Career Truth: Passing LLB earns your provisional Bar Council enrollment. Becoming an impactful corporate associate or litigation advocate mandates completing 5-6 tier-1 internships at law firms, active moot court participation, and clearing the All India Bar Examination (AIBE).',
    targetJobRoles: ['CORPORATE_LAWYER', 'CIVIL_SERVICES'],
    higherStudies: ['LLM (Master of Laws)', 'Civil Services (Judicial Magistrate Exam / UPSC)'],
    costCategory: 'Moderate',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'Bar Council of India (BCI) Legal Education Rules'
  },
  {
    id: 'BDES_DESIGN',
    name: 'B.Des (Bachelor of Design)',
    shortName: 'B.Des',
    degreeLevel: 'Undergraduate',
    durationYears: 4,
    durationLabel: '4 Years (8 Semesters)',
    streamsAllowed: ['HEC', 'MPC', 'MEC', 'BiPC', 'CEC', 'PCMB'],
    mandatoryPrerequisites: ['Class 12 pass in any stream; creative portfolio & entrance exam performance'],
    entranceExams: ['NIFT_NID'],
    skillsDeveloped: [
      'Design Thinking & User Research Methods',
      'Interface (UI) & Interaction (UX) Architecture',
      'Visual Prototyping (Figma, Framer, Adobe Creative Suite)',
      'Design Systems, Ergonomics, and Usability Testing'
    ],
    prerequisiteRealityCheck: 'Crucial Industry Truth: Design hiring is 90% driven by your live portfolio of case studies (problem breakdown, user flow, wireframes, user testing) rather than college pedigree. A stunning Behance/Figma portfolio unlocks top product tech companies directly.',
    targetJobRoles: ['UI_UX_DESIGNER'],
    higherStudies: ['M.Des (via CEED for IITs / NID)', 'Master in Human-Computer Interaction (HCI)'],
    costCategory: 'Moderate',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'NID / NIFT Statutory Statutes & UGC Specifications'
  },
  {
    id: 'BPHARM',
    name: 'B.Pharm (Bachelor of Pharmacy)',
    shortName: 'B.Pharm',
    degreeLevel: 'Undergraduate',
    durationYears: 4,
    durationLabel: '4 Years (8 Semesters)',
    streamsAllowed: ['BiPC', 'MPC', 'PCMB'],
    mandatoryPrerequisites: ['Class 12 with Physics and Chemistry, plus Biology or Mathematics'],
    entranceExams: ['AP_TS_EAMCET'],
    skillsDeveloped: [
      'Pharmaceutical Chemistry & Drug Formulation',
      'Pharmacokinetics & Toxicology',
      'Quality Assurance & Good Manufacturing Practices (GMP)',
      'Drug Regulatory Affairs and Clinical Trial Protocols'
    ],
    prerequisiteRealityCheck: 'Crucial Career Truth: B.Pharm grants Registered Pharmacist license. R&D formulation roles mandate M.Pharm or Ph.D. Common industry routes include Regulatory Affairs, Clinical Data Management, and Pharma Quality Control.',
    targetJobRoles: ['BIOTECH_RESEARCHER'],
    higherStudies: ['M.Pharm (via GPAT / NIPER JEE)', 'Pharm.D Post-Baccalaureate', 'MBA in Pharmaceutical Management'],
    costCategory: 'Moderate',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'Pharmacy Council of India (PCI) Education Regulations'
  }
];

export const JOB_ROLES_DATA: JobRole[] = [
  {
    id: 'SOFTWARE_ENGINEER',
    title: 'Software Engineer / Full-Stack Developer',
    industrySector: 'Information Technology & Software',
    degreeAloneSufficient: false,
    prerequisiteRealityCheck: 'A B.Tech CSE or BCA degree by itself does NOT guarantee a developer position. Tech companies evaluate: (1) Problem Solving in DSA (Arrays, Graphs, DP), (2) At least 2 deployed full-stack web/mobile projects with clean code on GitHub, (3) System design & database proficiency, (4) Practical internship experience.',
    entryLevelSkills: [
      'Data Structures & Algorithms (LeetCode/HackerRank)',
      'Modern JavaScript / TypeScript, React / Next.js',
      'Backend APIs (Node.js, Python FastAPI, or Java Spring Boot)',
      'Relational Databases (PostgreSQL / MySQL) & Git version control'
    ],
    portfolioMilestones: [
      'Full-stack CRUD app with auth, database, and cloud deployment (e.g. Vercel/Render)',
      'Real-world utility tool (API integration, cache, rate-limiting)',
      'Contribution to open-source or published NPM package / mobile app'
    ],
    typicalDailyWork: 'Writing modular code, reviewing pull requests, debugging customer issues, participating in agile sprint standups, architecting scalable database schemas, writing unit tests.',
    entryDegreePaths: ['BTECH_CSE', 'BCA'],
    directStreams: ['MPC', 'PCMB', 'POLYTECHNIC'],
    evidenceLevel: 'OFFICIAL',
    salaryTiers: {
      entryRange: '₹4.5 - ₹18 Lakhs / year',
      midRange: '₹18 - ₹38 Lakhs / year',
      seniorRange: '₹40 - ₹85+ Lakhs / year',
      source: 'NASSCOM Industry Compensation & Campus Placement Benchmarks [THIRD-PARTY]'
    }
  },
  {
    id: 'DATA_ANALYST',
    title: 'Data Analyst / Business Intelligence Specialist',
    industrySector: 'Data Analytics & Corporate Decision Systems',
    degreeAloneSufficient: false,
    prerequisiteRealityCheck: 'Degrees like B.Sc Math, B.Com, BCA, or B.Tech establish quantitative foundations, but hiring is strictly project-dependent. Recruiters look for live interactive dashboards (PowerBI/Tableau), advanced SQL query portfolios, and end-to-end Python exploratory data analysis (EDA) notebooks.',
    entryLevelSkills: [
      'Advanced SQL (Window functions, CTEs, complex joins)',
      'Business Intelligence tools (Power BI or Tableau)',
      'Python for Data Analysis (Pandas, NumPy, Matplotlib, Seaborn)',
      'Statistical reasoning & metric definition (ROI, retention, churn)'
    ],
    portfolioMilestones: [
      'End-to-end business dashboard on Kaggle/GitHub with live interactive link',
      'SQL case study solving complex e-commerce or financial transaction problems',
      'Clean explanatory dataset visualization write-up on Medium/Substack'
    ],
    typicalDailyWork: 'Writing SQL scripts to extract business metrics, designing leadership dashboards, auditing data quality discrepancies, translating operational questions into measurable telemetry, presenting insights.',
    entryDegreePaths: ['BTECH_CSE', 'BCA', 'BCOM_HONS'],
    directStreams: ['MPC', 'MEC', 'PCMB'],
    evidenceLevel: 'STRONGLY_SUPPORTED',
    salaryTiers: {
      entryRange: '₹4.0 - ₹12 Lakhs / year',
      midRange: '₹12 - ₹25 Lakhs / year',
      seniorRange: '₹26 - ₹50+ Lakhs / year',
      source: 'AIM Analytics India Industry Report [THIRD-PARTY]'
    }
  },
  {
    id: 'DOCTOR_PHYSICIAN',
    title: 'General Physician / Junior Resident Doctor',
    industrySector: 'Healthcare & Clinical Medicine',
    degreeAloneSufficient: true,
    prerequisiteRealityCheck: 'Statutory registration requires an accredited MBBS degree + 1 full year of compulsory rotatory internship. However, to practice independently as a specialist (Cardiologist, Surgeon, Pediatrician), another 3-year MD/MS post-graduate degree is mandatory via NEET-PG/NEXT.',
    entryLevelSkills: [
      'Patient triage & differential diagnosis',
      'Emergency drug administration & vitals resuscitation',
      'Clinical documentation & prescription compliance',
      'Interpersonal bedside empathy and ethical patient counseling'
    ],
    portfolioMilestones: [
      'Completion of 12-month multi-department rotatory internship (OPD, Casualty, Surgery, OBG)',
      'State Medical Council / National Medical Commission Permanent Registration Number',
      'Basic Life Support (BLS) and Advanced Cardiovascular Life Support (ACLS) certifications'
    ],
    typicalDailyWork: 'Examining outpatient and inpatient cases, interpreting lab panels and radiological scans, administering emergency interventions, performing rounds, coordinating with senior consultants.',
    entryDegreePaths: ['MBBS'],
    directStreams: ['BiPC', 'PCMB'],
    evidenceLevel: 'OFFICIAL',
    salaryTiers: {
      entryRange: '₹6.5 - ₹14 Lakhs / year (Junior Resident / Govt Medical Officer)',
      midRange: '₹18 - ₹35 Lakhs / year (Post MD/MS Specialist)',
      seniorRange: '₹40 - ₹1+ Crore / year (Super-specialist / Senior Consultant)',
      source: 'National Medical Commission Pay Scales & Hospital Recruitment Data [THIRD-PARTY]'
    }
  },
  {
    id: 'CHARTERED_ACCOUNTANT',
    title: 'Chartered Accountant (CA) / Corporate Auditor',
    industrySector: 'Accounting, Taxation & Financial Services',
    degreeAloneSufficient: false,
    prerequisiteRealityCheck: 'A college degree cannot grant the CA designation. CA is an independent professional qualification awarded solely by the Institute of Chartered Accountants of India (ICAI) after passing CA Foundation, CA Intermediate, 2 years of mandatory Articleship training, and CA Final exams.',
    entryLevelSkills: [
      'Statutory & Internal Audit methodologies',
      'Indian Accounting Standards (Ind AS) & IFRS compliance',
      'Direct Taxation & GST statutory filings',
      'Financial risk assessment and corporate governance'
    ],
    portfolioMilestones: [
      'Successful completion of 24-month practical Articleship in a registered CA audit firm',
      'ICAI Final Examination Pass Certificate',
      'Active Associate Chartered Accountant (ACA) membership'
    ],
    typicalDailyWork: 'Auditing corporate balance sheets, ensuring compliance with Companies Act and tax statutes, advising executive leadership on tax efficiency, conducting forensic audits.',
    entryDegreePaths: ['BCOM_HONS'],
    directStreams: ['MEC', 'CEC', 'MPC', 'PCMB'],
    evidenceLevel: 'OFFICIAL',
    salaryTiers: {
      entryRange: '₹8.0 - ₹18 Lakhs / year (ICAI Campus Placement average)',
      midRange: '₹18 - ₹36 Lakhs / year',
      seniorRange: '₹40 - ₹90+ Lakhs / year (Audit Partner / CFO level)',
      source: 'ICAI Official Campus Placement Reports [OFFICIAL]'
    }
  },
  {
    id: 'CORPORATE_LAWYER',
    title: 'Corporate Legal Counsel / Law Firm Associate',
    industrySector: 'Legal Services & Corporate Governance',
    degreeAloneSufficient: false,
    prerequisiteRealityCheck: 'An LLB or 5-Year Integrated BA-LLB qualifies you for provisional enrollment. To join a leading corporate law firm (tier-1), students need extensive internships at reputed firms, publication in recognized law reviews, and proven contract drafting and diligence skills.',
    entryLevelSkills: [
      'Commercial contract drafting and negotiation',
      'Mergers & Acquisitions (M&A) due diligence reviews',
      'Regulatory compliance (SEBI, RBI, Competition Commission)',
      'Statutory interpretation & dispute advisory'
    ],
    portfolioMilestones: [
      '5+ internships at corporate law firms, legal tech startups, or senior advocates',
      'Clearing the All India Bar Examination (AIBE) for permanent license to practice',
      'Published articles on corporate or insolvency jurisprudence'
    ],
    typicalDailyWork: 'Drafting share purchase agreements and non-disclosure contracts, conducting regulatory legal audits, reviewing risk exposure on corporate transactions, assisting partner meetings.',
    entryDegreePaths: ['BA_LLB'],
    directStreams: ['HEC', 'CEC', 'MEC', 'MPC', 'BiPC', 'PCMB'],
    evidenceLevel: 'OFFICIAL',
    salaryTiers: {
      entryRange: '₹6.0 - ₹16 Lakhs / year (Tier-1 Law Firm starting: ₹14-18 LPA)',
      midRange: '₹18 - ₹35 Lakhs / year',
      seniorRange: '₹40 - ₹1.2+ Crore / year (Partner / General Counsel)',
      source: 'Bar Council & Legal Industry Recruitment Aggregates [THIRD-PARTY]'
    }
  },
  {
    id: 'UI_UX_DESIGNER',
    title: 'Product Designer / UI-UX Designer',
    industrySector: 'Digital Product Design & Technology',
    degreeAloneSufficient: false,
    prerequisiteRealityCheck: 'Degrees in Design (B.Des) or Engineering are respected, but hiring managers in technology hire 100% based on case studies in your portfolio: Problem framing, user personas, wireframe iterations, high-fidelity prototypes in Figma, and design systems.',
    entryLevelSkills: [
      'User Research & qualitative interviewing',
      'Wireframing, Information Architecture & User Flows',
      'Figma / FigJam component architecture & auto-layout',
      'Usability testing and accessibility compliance (WCAG)'
    ],
    portfolioMilestones: [
      '3 deep, thorough product case studies demonstrating problem to measurable solution',
      'Interactive Figma prototypes with comprehensive micro-interactions',
      'Design system library with tokens, states, and responsive variants'
    ],
    typicalDailyWork: 'Conducting user tests, drafting wireframes, polishing high-fidelity mockups, collaborating with frontend engineers for pixel-perfect implementation, maintaining design tokens.',
    entryDegreePaths: ['BDES_DESIGN', 'BCA', 'BTECH_CSE'],
    directStreams: ['HEC', 'MPC', 'MEC', 'BiPC', 'CEC', 'PCMB'],
    evidenceLevel: 'STRONGLY_SUPPORTED',
    salaryTiers: {
      entryRange: '₹4.5 - ₹12 Lakhs / year',
      midRange: '₹13 - ₹28 Lakhs / year',
      seniorRange: '₹30 - ₹65+ Lakhs / year',
      source: 'Design Industry Compensation Index [THIRD-PARTY]'
    }
  },
  {
    id: 'CIVIL_SERVICES',
    title: 'Civil Services Officer (IAS / IPS / IFS via UPSC)',
    industrySector: 'Public Administration & Government Governance',
    degreeAloneSufficient: false,
    prerequisiteRealityCheck: 'Statutory eligibility is simply any recognized undergraduate degree (B.A., B.Sc., B.Com., B.Tech., MBBS). However, the UPSC Civil Services Examination (CSE) is among the most competitive in the world (success rate < 0.1%). Requires 1-3 years of dedicated preparation across General Studies, Essay, and 1 Optional Subject.',
    entryLevelSkills: [
      'Constitutional governance & Indian Polity analysis',
      'Macroeconomic public policy formulation',
      'Analytical essay writing & objective ethics reasoning',
      'Crisis management and rural/urban administration leadership'
    ],
    portfolioMilestones: [
      'Passing UPSC Preliminary Examination (General Studies + CSAT)',
      'Passing UPSC Mains Examination (9 subjective papers)',
      'Clearing the UPSC Personality Test / Interview board at Dholpur House'
    ],
    typicalDailyWork: 'District administrative governance, implementing welfare schemes, maintaining law and order, reviewing civic infrastructure, coordinating district collectors and department heads.',
    entryDegreePaths: ['BA_LLB', 'BCOM_HONS', 'BTECH_CSE', 'MBBS'],
    directStreams: ['HEC', 'CEC', 'MEC', 'MPC', 'BiPC', 'PCMB'],
    evidenceLevel: 'OFFICIAL',
    salaryTiers: {
      entryRange: '₹7.0 - ₹12 Lakhs / year (Level 10 Pay Matrix: ₹56,100 basic + DA + Official Quarters)',
      midRange: '₹14 - ₹20 Lakhs / year (Joint Secretary / District Magistrate)',
      seniorRange: '₹25 - ₹30 Lakhs / year (Cabinet Secretary / Chief Secretary apex level)',
      source: '7th Central Pay Commission Gazette Notification [OFFICIAL]'
    }
  },
  {
    id: 'JUNIOR_ENGINEER',
    title: 'Junior Engineer (JE) / Technical Supervisor',
    industrySector: 'Public Sector Undertakings (PSU) & Infrastructure',
    degreeAloneSufficient: true,
    prerequisiteRealityCheck: 'Direct entry roles are available specifically for 3-Year Polytechnic Diploma and B.Tech graduates through competitive recruitment exams (SSC JE, RRB JE, State Power Companies like APTRANSCO / TSSPDCL). Focuses heavily on core engineering trade questions.',
    entryLevelSkills: [
      'Site engineering & technical blue-print reading',
      'Equipment maintenance, safety protocols, and testing',
      'Quality assurance metrics & technical inventory logs',
      'Supervision of industrial craftsman teams'
    ],
    portfolioMilestones: [
      'Class 10 + 3-Year Polytechnic Diploma or B.Tech in Civil/Mech/EEE/ECE',
      'Clearing Tier 1 & Tier 2 technical written exams (SSC JE / RRB JE)',
      'Medical fitness certificate in standard category (A-1 to B-2)'
    ],
    typicalDailyWork: 'Monitoring physical infrastructure sites, executing scheduled preventative maintenance, auditing technical equipment operation, submitting compliance reports to executive engineers.',
    entryDegreePaths: ['BTECH_CSE'],
    directStreams: ['POLYTECHNIC', 'MPC'],
    evidenceLevel: 'OFFICIAL',
    salaryTiers: {
      entryRange: '₹4.2 - ₹7.5 Lakhs / year (Level 6 Pay Matrix: ₹35,400 + allowances)',
      midRange: '₹8.0 - ₹14 Lakhs / year (Senior Section Engineer)',
      seniorRange: '₹15 - ₹22 Lakhs / year (Assistant Executive Engineer)',
      source: 'Railway Recruitment Board & Staff Selection Commission Notifications [OFFICIAL]'
    }
  },
  {
    id: 'BIOTECH_RESEARCHER',
    title: 'Biotechnology Research Analyst / Pharma QC Officer',
    industrySector: 'Biotechnology, Healthcare & Pharmaceuticals',
    degreeAloneSufficient: false,
    prerequisiteRealityCheck: 'A B.Sc. or B.Pharm opens access primarily to quality control (QC) bench testing, documentation, or pharmaceutical sales. Conducting independent research and development (R&D) or drug formulation mandates an M.Sc., M.Pharm, or Ph.D.',
    entryLevelSkills: [
      'Spectrophotometry & High-Performance Liquid Chromatography (HPLC)',
      'Sterile cell culture handling & PCR techniques',
      'Good Laboratory Practice (GLP) and standard operating procedures (SOP)',
      'Bioinformatics data indexing (BLAST, NCBI)'
    ],
    portfolioMilestones: [
      'Hands-on lab instrumentation training in analytical chemistry',
      'Academic dissertations or laboratory bench internship projects',
      'Familiarity with regulatory documentation (FDA/CDSCO compliance)'
    ],
    typicalDailyWork: 'Running HPLC samples to test chemical purity of drug batches, maintaining cell lines, recording lab observations into audit-ready systems, calibrating laboratory equipment.',
    entryDegreePaths: ['BPHARM'],
    directStreams: ['BiPC', 'PCMB'],
    evidenceLevel: 'STRONGLY_SUPPORTED',
    salaryTiers: {
      entryRange: '₹3.2 - ₹6.5 Lakhs / year',
      midRange: '₹7.0 - ₹15 Lakhs / year (Senior QC / Research Associate)',
      seniorRange: '₹16 - ₹32 Lakhs / year (Principal Scientist)',
      source: 'Pharma Industry HR Benchmark Surveys [THIRD-PARTY]'
    }
  }
];

export const CAREER_TRANSITIONS_DATA: CareerTransition[] = [
  {
    id: 'TRANS_MPC_TO_SWE',
    currentBackground: 'Class 12 MPC (Math, Physics, Chemistry)',
    targetTransitionPath: 'Software Engineering / Tech',
    feasibilityLevel: 'Direct / High',
    requirementsBridging: 'Standard direct route via B.Tech CSE (JEE/EAPCET) or BCA. Learn modern programming (Java/Python/JS), DSA, and 2-3 GitHub projects.',
    statutoryRuleExplanation: 'Class 12 Mathematics and Physics satisfies all statutory AICTE requirements for computer science engineering admissions. [OFFICIAL]',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'AICTE Approval Process Handbook (Eligibility Matrix)'
  },
  {
    id: 'TRANS_MPC_TO_FINANCE',
    currentBackground: 'Class 12 MPC',
    targetTransitionPath: 'Business / Corporate Finance',
    feasibilityLevel: 'Direct / High',
    requirementsBridging: 'Eligible for BBA, B.Com, or CA Foundation. Strong math skills provide an advantage in quantitative finance and analytics.',
    statutoryRuleExplanation: 'Most commercial and management degree programs welcome science students. [OFFICIAL]',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'UGC Minimum Standards for Undergraduate Instruction'
  },
  {
    id: 'TRANS_BIPC_TO_MEDICINE',
    currentBackground: 'Class 12 BiPC (Biology, Physics, Chemistry)',
    targetTransitionPath: 'Healthcare / Clinical Medicine (MBBS/BDS)',
    feasibilityLevel: 'Direct / High',
    requirementsBridging: 'Clear NEET-UG with competitive rank. Prepare 11th and 12th NCERT biology, physics, and chemistry thoroughly.',
    statutoryRuleExplanation: 'NMC guidelines mandate Physics, Chemistry, Biology/Biotech in 10+2 with English. [OFFICIAL]',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'National Medical Commission Graduate Medical Education Regulations'
  },
  {
    id: 'TRANS_BIPC_TO_CS',
    currentBackground: 'Class 12 BiPC',
    targetTransitionPath: 'Computer Applications / Software Dev',
    feasibilityLevel: 'Moderate',
    requirementsBridging: 'Eligible for BCA in universities that do not mandate Class 12 Math, or B.Tech Biotechnology / Biomedical Engineering. Bridge with self-taught programming, DSA, and modern web frameworks.',
    statutoryRuleExplanation: 'Direct B.Tech CSE in premier institutes (IIT/NIT/state CET) strictly requires Class 12 Math; however BCA and private university specialized computing programs allow non-math entry with bridge subjects. [STRONGLY SUPPORTED]',
    evidenceLevel: 'STRONGLY_SUPPORTED',
    sourceCitation: 'AICTE Modified Entry Norms & State University BCA Ordinances'
  },
  {
    id: 'TRANS_COMMERCE_TO_TECH',
    currentBackground: 'Class 12 Commerce (MEC / CEC)',
    targetTransitionPath: 'Technology / Data Analytics',
    feasibilityLevel: 'Moderate',
    requirementsBridging: 'Pursue BCA or B.Sc Data Science (via CUET). Complement with SQL, Python, PowerBI, and hands-on coding bootcamps.',
    statutoryRuleExplanation: 'MEC students have quantitative math and qualify for BCA in almost all universities. CEC students qualify for BCA programs without strict math prerequisites. [STRONGLY SUPPORTED]',
    evidenceLevel: 'STRONGLY_SUPPORTED',
    sourceCitation: 'CUET Central Universities Eligibility Guidelines'
  },
  {
    id: 'TRANS_COMMERCE_TO_CORE_ENGG',
    currentBackground: 'Class 12 Commerce (MEC / CEC)',
    targetTransitionPath: 'Core Engineering (B.Tech Mechanical/Civil/EE)',
    feasibilityLevel: 'Not Eligible / Restricted',
    requirementsBridging: 'Statutorily restricted. To become eligible, the student must complete Class 12 Physics, Chemistry, and Math examinations through recognized Open Schooling (NIOS - National Institute of Open Schooling).',
    statutoryRuleExplanation: 'AICTE and state regulatory councils statutorily mandate Physics and Mathematics in 10+2 for core engineering degrees. [OFFICIAL]',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'AICTE Approval Process Handbook (Mandatory Group Requirements)'
  },
  {
    id: 'TRANS_HUMANITIES_TO_LAW_DESIGN',
    currentBackground: 'Class 12 Humanities (HEC)',
    targetTransitionPath: 'Corporate Law / Product Design',
    feasibilityLevel: 'Direct / High',
    requirementsBridging: 'Prepare for CLAT (Law) or NID/NIFT (Design). Build verbal reasoning, legal aptitude, and creative sketch portfolios.',
    statutoryRuleExplanation: 'Both Law and Design degree programs are completely stream-neutral under Bar Council and Institute statutes. [OFFICIAL]',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'Bar Council of India Legal Education Rules & NID Admission Charter'
  },
  {
    id: 'TRANS_HUMANITIES_TO_MEDICINE',
    currentBackground: 'Class 12 Humanities (HEC)',
    targetTransitionPath: 'Medicine & Surgery (MBBS)',
    feasibilityLevel: 'Not Eligible / Restricted',
    requirementsBridging: 'Statutorily blocked. Candidates cannot appear for NEET-UG without passing Physics, Chemistry, and Biology/Biotechnology in Class 12 from a recognized board (e.g. NIOS bridge required).',
    statutoryRuleExplanation: 'National Medical Commission (NMC) regulations strictly prohibit non-science students from MBBS/BDS admissions without qualifying in PCB subjects. [OFFICIAL]',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'NMC Regulations on Graduate Medical Education (Eligibility Criteria)'
  },
  {
    id: 'TRANS_DIPLOMA_TO_BTECH',
    currentBackground: '3-Year Polytechnic Diploma',
    targetTransitionPath: 'B.Tech 2nd Year (Lateral Entry)',
    feasibilityLevel: 'Direct / High',
    requirementsBridging: 'Appear for State ECET (e.g., AP ECET / TS ECET). Grants direct admission into 3rd semester (2nd year) of 4-year B.Tech.',
    statutoryRuleExplanation: 'AICTE provisions allocate a 10% supernumerary quota in all engineering colleges specifically for diploma lateral entry. [OFFICIAL]',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'AICTE Approval Process Handbook (Lateral Entry Provisions)'
  },
  {
    id: 'TRANS_NON_CS_TO_SWE',
    currentBackground: 'Non-CS B.Tech (Mechanical / Civil / EEE)',
    targetTransitionPath: 'Software Engineering / IT',
    feasibilityLevel: 'High (Alternate)',
    requirementsBridging: 'Self-directed learning in DSA (300+ LeetCode problems), Git, modern web/app frameworks (React/Node), open source contributions, and GATE in CS (if aiming for M.Tech CS).',
    statutoryRuleExplanation: 'Indian IT industry and product companies recruit irrespective of engineering branch, subject to clearing technical coding and design assessments. [STRONGLY SUPPORTED]',
    evidenceLevel: 'STRONGLY_SUPPORTED',
    sourceCitation: 'NASSCOM Technical Hiring Guidelines & Industry Practice'
  },
  {
    id: 'TRANS_BCOM_TO_DATA',
    currentBackground: 'B.Com / B.A. Graduate',
    targetTransitionPath: 'Data Analytics / Business Intelligence',
    feasibilityLevel: 'High (Alternate)',
    requirementsBridging: 'Master SQL, Advanced Excel, Power BI/Tableau, and introductory Python for data analysis. Build 3-4 public business case studies solving real revenue/transaction problems.',
    statutoryRuleExplanation: 'Business intelligence and corporate analytics roles value commercial domain understanding combined with analytical querying skills. [THIRD-PARTY]',
    evidenceLevel: 'THIRD_PARTY',
    sourceCitation: 'Industry Data Analytics Recruitment Insights'
  },
  {
    id: 'TRANS_ANY_TO_UPSC',
    currentBackground: 'Any Graduate (B.Tech / MBBS / B.Com / B.A / B.Sc)',
    targetTransitionPath: 'Civil Services (IAS / IPS / IFS via UPSC)',
    feasibilityLevel: 'Direct / High',
    requirementsBridging: '1-2 years of disciplined preparation across General Studies, Indian Polity, Economy, Current Affairs, and 1 Optional Subject.',
    statutoryRuleExplanation: 'UPSC CSE rules require solely a bachelor degree in any discipline from a recognized university. [OFFICIAL]',
    evidenceLevel: 'OFFICIAL',
    sourceCitation: 'UPSC Civil Services Examination Gazette Notification'
  }
];

export const PATH_COMPARISONS_DATA: Record<string, PathComparisonData> = {
  'btech_vs_bca': {
    pathA: {
      title: 'Path A: B.Tech in Computer Science (4 Years)',
      courseId: 'BTECH_CSE',
      stream: 'Class 11-12 MPC / PCMB',
      duration: '4 Years (8 Semesters)',
      examDifficulty: 'High (JEE Main / JEE Advanced / State EAMCET)',
      prerequisites: 'Class 12 Physics, Chemistry, and Mathematics mandatory [OFFICIAL]',
      costCategory: '₹2.5 Lakhs (Govt) to ₹16+ Lakhs (Private Colleges)',
      primaryEntryRole: 'Software Engineer, Systems Engineer, Cloud Specialist',
      higherStudies: 'Direct eligibility for M.Tech (via GATE), MS in USA/Germany, MBA',
      advantages: [
        'Recognized gold standard for engineering campus placements in India',
        'Direct campus drives from top-tier tech firms (Google, Microsoft, Amazon, TCS Digital)',
        'Unlocks hardware, systems programming, and robotics pathways'
      ],
      risks: [
        'High competitive pressure in entrance exams (JEE/EAMCET)',
        'Significantly higher tuition fees in private institutions',
        'Intensive math and theory heavy curriculum'
      ]
    },
    pathB: {
      title: 'Path B: BCA + Targeted Skill Building (3 Years)',
      courseId: 'BCA',
      stream: 'Class 11-12 MEC / CEC / MPC / BiPC',
      duration: '3 Years (Optionally + 2 Yrs MCA)',
      examDifficulty: 'Moderate (CUET-UG / State CETs / Merit Admissions)',
      prerequisites: 'Class 12 pass in any stream (Math preferred in select colleges) [STRONGLY SUPPORTED]',
      costCategory: '₹1.2 Lakhs to ₹4.5 Lakhs total',
      primaryEntryRole: 'Frontend Developer, Full-Stack Developer, QA / Automation',
      higherStudies: 'MCA (Master of Computer Applications via NIMCET) or M.Sc IT',
      advantages: [
        '1 year shorter duration to enter the workforce early',
        'Significantly lower academic financial investment',
        'More time for self-directed project building, freelance, and coding bootcamps'
      ],
      risks: [
        'Select legacy companies restrict on-campus entry to 4-year degree holders',
        'Requires strong self-motivation to master DSA and build an outstanding GitHub portfolio',
        'May need an MCA later to match senior engineering managerial bands in select firms'
      ]
    },
    verdict: 'If you have Class 12 MPC and secure a good rank in state EAMCET/JEE, B.Tech CSE offers the smoothest campus placement pipeline. If you come from a non-MPC background (MEC/CEC) or prefer practical coding over 4 years of heavy engineering theory, BCA + aggressive GitHub portfolio building leads to the exact same software engineering jobs at 40% of the cost.'
  },
  'mbbs_vs_bpharm': {
    pathA: {
      title: 'Path A: MBBS (Clinical Medicine & Surgery)',
      courseId: 'MBBS',
      stream: 'Class 11-12 BiPC / PCMB',
      duration: '5.5 Years + 3 Years MD/MS Specialization',
      examDifficulty: 'Extremely High (NEET-UG with 20+ Lakh aspirants for limited govt seats)',
      prerequisites: 'Class 12 Biology, Physics, and Chemistry mandatory [OFFICIAL]',
      costCategory: 'Govt Colleges: ₹50k - ₹2 Lakhs | Private: ₹60 Lakhs - ₹1.2 Crore',
      primaryEntryRole: 'Junior Resident, Medical Officer, General Practitioner',
      higherStudies: 'MD / MS (via NEET-PG / NEXT), DNB, Super-Specialization (DM/M.Ch)',
      advantages: [
        'Highest societal respect and statutory clinical prescription rights',
        'Guaranteed continuous demand; recession-proof career',
        'Direct patient impact and lifecare practice'
      ],
      risks: [
        'Longest gestation period (8.5 to 11 years before becoming a recognized specialist)',
        'Immense mental stress during NEET-UG and NEET-PG prep',
        'Prohibitive private college fee structures if government seat is missed'
      ]
    },
    pathB: {
      title: 'Path B: B.Pharm + Clinical Research / Pharma MBA',
      courseId: 'BPHARM',
      stream: 'Class 11-12 BiPC / MPC / PCMB',
      duration: '4 Years (Optionally + 2 Yrs M.Pharm / MBA)',
      examDifficulty: 'Moderate (State EAPCET / Merit)',
      prerequisites: 'Class 12 with Physics and Chemistry, plus Biology or Math [OFFICIAL]',
      costCategory: '₹2.0 Lakhs to ₹6.0 Lakhs total',
      primaryEntryRole: 'Pharma QC Analyst, Drug Regulatory Affairs Associate, Clinical Data Specialist',
      higherStudies: 'M.Pharm (via GPAT/NIPER), Pharm.D Post-Baccalaureate, MBA Pharma Management',
      advantages: [
        'Start earning in the booming pharmaceutical and biotech hub (Hyderabad, Ahmedabad, Bengaluru) in 4 years',
        'Corporate working hours without overnight emergency casualty shifts',
        'Strong multinational opportunities in Clinical Trial Management and Regulatory Affairs'
      ],
      risks: [
        'No direct patient treatment or clinical diagnostic rights',
        'Entry salaries at bench testing level start lower than doctors (₹3.5 - 5.5 LPA)',
        'Requires an M.Pharm or specialized certifications to reach high-value R&D roles'
      ]
    },
    verdict: 'Choose MBBS only if you have an unyielding commitment to clinical patient diagnosis and are prepared for an 8-10 year training marathon. If you love medicine, pharmacology, and drug science but desire a corporate 4-year graduation timeline with rapid entry into pharma/biotech industries, B.Pharm followed by Clinical Research or Pharma MBA is a high-reward alternative.'
  },
  'intermediate_mpc_vs_polytechnic': {
    pathA: {
      title: 'Path A: Class 11-12 Intermediate MPC (Standard Route)',
      courseId: 'MPC',
      stream: 'Class 10 Pass -> 2-Year Intermediate MPC',
      duration: '2 Years (Junior & Senior Inter)',
      examDifficulty: 'High (Prepares for JEE Main, JEE Adv, State EAMCET)',
      prerequisites: 'Class 10 Pass from recognized board',
      costCategory: 'Govt: ₹5,000 | Private Jr Colleges: ₹80,000 - ₹2.5 Lakhs',
      primaryEntryRole: 'Gateway to 1st year B.Tech, Pure Sciences, NDA, Architecture',
      higherStudies: 'B.Tech (4 Years), B.Sc, B.Arch, Defense (NDA)',
      advantages: [
        'Keeps all non-medical doors fully open (IITs, NITs, BITS, NDA)',
        'Strong theoretical foundation in calculus, vectors, optics, and thermodynamics',
        'Direct qualification for national competitive exams'
      ],
      risks: [
        'High stress and rote coaching culture in junior colleges',
        'Does not teach hands-on engineering skills in those 2 years',
        'If entrance exams are missed, leads to general non-technical degree options'
      ]
    },
    pathB: {
      title: 'Path B: 3-Year Polytechnic Diploma (Hands-On Technical Route)',
      courseId: 'POLYTECHNIC',
      stream: 'Class 10 Pass -> 3-Year Diploma in Engineering',
      duration: '3 Years Diploma (Enters B.Tech in 2nd Year)',
      examDifficulty: 'Moderate (State POLYCET for admission; ECET for B.Tech entry)',
      prerequisites: 'Class 10 Pass with Math and Science [OFFICIAL]',
      costCategory: 'Govt Polytechnics: Highly Subsidized (₹10k - ₹30k total)',
      primaryEntryRole: 'Junior Engineer (JE in Railways/Govt), Technical Supervisor, or B.Tech 2nd Year',
      higherStudies: 'Direct B.Tech 2nd Year (Lateral Entry via ECET into 3rd Semester) [OFFICIAL]',
      advantages: [
        'Workshop and lab experience from age 16; learns real practical engineering',
        'Direct eligibility for Government Junior Engineer jobs (SSC JE, RRB JE) at age 19',
        'Lateral entry avoids the brutal JEE race—enters B.Tech 2nd year via state ECET (same overall graduation time: 3+3 = 6 years vs 2+4 = 6 years!)'
      ],
      risks: [
        'Cannot directly apply for IITs/NITs via JEE Advanced lateral entry (only state/private colleges)',
        'Harder to pivot outside of engineering (e.g. to Law, pure economics, or civil services) early on',
        'Requires discipline during polytechnic to prepare for state ECET'
      ]
    },
    verdict: 'Both routes take exactly 6 years post-Class 10 to complete a B.Tech! If your target is an IIT/NIT or NDA, Intermediate MPC is mandatory. If you come from a cost-conscious background, want practical technical skills early, or prefer a less stressful path to a B.Tech degree via ECET lateral entry, Polytechnic Diploma is one of India\'s best-kept secrets.'
  }
};
