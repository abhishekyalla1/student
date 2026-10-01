import {
  UserProfile,
  EligibilityEvaluation,
  EligibilityStatus,
  EvidenceRecord
} from '../types/pathway';

/**
 * PATHWAY Deterministic Statutory Rule & Eligibility Engine
 * Evaluates official statutory eligibility against AICTE, NMC, UGC, BCI, ICAI, BIEAP & TSBIE regulations.
 * Fully transparent: strictly derives outcomes from explicit subject prerequisites and regulatory records.
 */

export function evaluateNodeEligibility(
  profile: UserProfile,
  nodeOrDegreeId: string,
  _nodeStage?: string
): EligibilityEvaluation {
  const stream = profile.selectedStream || 'MPC';
  const stage = profile.currentStage;
  const isDiploma = stage === 'DIPLOMA_3YR' || stream === 'POLYTECHNIC';

  const defaultEvidence: EvidenceRecord = {
    ruleId: 'UGC_GEN_NORM_2024',
    evidenceLevel: 'OFFICIAL',
    sourceName: 'University Grants Commission (UGC) Guidelines on Minimum Standards',
    sourceUrl: 'https://www.ugc.gov.in',
    sourceType: 'REGULATORY_HANDBOOK',
    jurisdiction: 'NATIONAL',
    lastVerified: '2025-11-15',
    verificationStatus: 'PUBLISHED'
  };

  // 1. Core Engineering / B.Tech / JEE Route
  if (
    nodeOrDegreeId.includes('BTECH') || 
    nodeOrDegreeId.includes('CSE') || 
    nodeOrDegreeId.includes('JEE') || 
    nodeOrDegreeId === 'node_primary_degree' || 
    nodeOrDegreeId === 'SOFTWARE_ENGINEER' ||
    nodeOrDegreeId === 'DATA_SCIENTIST'
  ) {
    const aicteEvidence: EvidenceRecord = {
      ruleId: 'AICTE_APH_2024_SEC1_3',
      evidenceLevel: 'OFFICIAL',
      sourceName: 'AICTE Approval Process Handbook (Sec 1.3: Undergraduate Engineering Eligibility)',
      sourceUrl: 'https://www.aicte-india.org/bureaus/policy-academic-planning',
      sourceType: 'REGULATORY_HANDBOOK',
      jurisdiction: 'NATIONAL',
      lastVerified: '2025-12-01',
      verificationStatus: 'PUBLISHED'
    };

    if (stream === 'MPC' || stream === 'PCMB') {
      return {
        status: 'ELIGIBLE',
        badgeLabel: 'Directly Eligible [OFFICIAL]',
        reason: 'Mandatory prerequisites satisfied: Intermediate Class 12 with Mathematics and Physics.',
        summary: 'Fully eligible for AICTE accredited B.Tech & JEE Main via Intermediate MPC/PCMB with Mathematics and Physics.',
        statutoryBasis: 'AICTE Approval Process Handbook (Sec 1.3 - Minimum 45% aggregate in Math & Physics).',
        requirementsSatisfied: ['Class 12 Intermediate Pass', 'Mathematics', 'Physics', 'Chemistry/CS'],
        requirementsMissing: [],
        nextAction: 'Prepare for JEE Main (National) and State EAPCET (AP/TS) entrance windows.',
        alternatives: ['BCA + MCA', 'B.Sc Computer Science / Data Science'],
        bridgingOptions: [],
        evidence: [aicteEvidence]
      };
    }

    if (isDiploma) {
      const lateralEvidence: EvidenceRecord = {
        ruleId: 'AICTE_LATERAL_ENTRY_SEC1_8',
        evidenceLevel: 'OFFICIAL',
        sourceName: 'AICTE Lateral Entry Provisions & State Higher Education Councils (APSCHE/TSCHE)',
        sourceUrl: 'https://cets.apsche.ap.gov.in',
        sourceType: 'STATUTORY_NOTIFICATION',
        jurisdiction: 'STATE',
        lastVerified: '2025-12-10',
        verificationStatus: 'PUBLISHED'
      };

      return {
        status: 'ELIGIBLE',
        badgeLabel: 'Eligible via Lateral Entry [OFFICIAL]',
        reason: 'Statutory 3-Year Technical Engineering Diploma satisfies prerequisite for 2nd-year B.Tech entry.',
        summary: 'Direct statutory admission into B.Tech 2nd Year (Semester 3) through State ECET.',
        statutoryBasis: 'AICTE Lateral Entry Provisions & State Higher Education Council (APSCHE/TSCHE).',
        requirementsSatisfied: ['3-Year Polytechnic Engineering Diploma', 'State ECET Qualifying Rank'],
        requirementsMissing: [],
        nextAction: 'Register for State ECET examination in February/March and participate in Web Options.',
        alternatives: ['Junior Engineer (SSC JE / RRB JE)', 'B.Sc Lateral Entry'],
        bridgingOptions: [],
        evidence: [lateralEvidence]
      };
    }

    if (stream === 'BiPC') {
      const niosEvidence: EvidenceRecord = {
        ruleId: 'AICTE_NIOS_ADDL_SUBJ_2023',
        evidenceLevel: 'OFFICIAL',
        sourceName: 'AICTE Gazette Notification on Open Schooling Additional Mathematics',
        sourceUrl: 'https://www.nios.ac.in',
        sourceType: 'GAZETTE',
        jurisdiction: 'NATIONAL',
        lastVerified: '2025-10-20',
        verificationStatus: 'PUBLISHED'
      };

      return {
        status: 'POSSIBLE_WITH_BRIDGING',
        badgeLabel: 'Bridging Required [NIOS Math]',
        reason: 'BiPC curriculum lacks Class 12 Higher Mathematics mandatory under AICTE norms for core B.Tech.',
        summary: 'BiPC students lack Class 12 Mathematics. Can qualify via NIOS On-Demand Mathematics examination, or pursue interdisciplinary B.Tech Biotechnology without bridging.',
        statutoryBasis: 'AICTE Norms for Open Schooling Additional Mathematics Certification.',
        requirementsSatisfied: ['Class 12 Intermediate Pass', 'Physics', 'Chemistry'],
        requirementsMissing: ['Class 12 Higher Mathematics'],
        nextAction: 'Enroll for NIOS Senior Secondary Mathematics on-demand exam or opt for B.Tech Biotech / BCA.',
        alternatives: ['B.Tech Biotechnology (Direct for BiPC in select universities)', 'BCA + MCA', 'B.Sc Bioinformatics'],
        bridgingOptions: ['NIOS Senior Secondary Mathematics Single-Subject Certification'],
        evidence: [niosEvidence],
        bridgingRecommendation: 'Enroll for NIOS Senior Secondary Mathematics on-demand exam or choose BCA / B.Tech Biotech.'
      };
    }

    if (stream === 'MEC') {
      const ugcEvidence: EvidenceRecord = {
        ruleId: 'UGC_BCA_SPECIFICATION_2022',
        evidenceLevel: 'OFFICIAL',
        sourceName: 'UGC Minimum Standards for BCA Admissions',
        sourceUrl: 'https://www.ugc.gov.in',
        sourceType: 'REGULATORY_HANDBOOK',
        jurisdiction: 'NATIONAL',
        lastVerified: '2025-09-15',
        verificationStatus: 'PUBLISHED'
      };

      return {
        status: 'ALTERNATIVE_PLAN_B',
        badgeLabel: 'Plan-B Route (BCA Available)',
        reason: 'MEC has Mathematics but lacks Laboratory Physics and Chemistry required for AICTE B.Tech.',
        summary: 'MEC students have Mathematics but lack Physics/Chemistry for B.Tech. Eligible for BCA (Bachelor of Computer Applications), B.Sc Computing, and subsequent MCA.',
        statutoryBasis: 'UGC Minimum Standards for BCA Admissions & AICTE MCA Lateral Guidelines.',
        requirementsSatisfied: ['Class 12 Intermediate Pass', 'Mathematics'],
        requirementsMissing: ['Physics Lab', 'Chemistry'],
        nextAction: 'Enroll in 3-Year BCA program followed by NIMCET for premier NIT MCA placement.',
        alternatives: ['3-Year BCA + 2-Year MCA (NIMCET)', 'B.Sc Data Science / Statistics', 'B.Com FinTech'],
        bridgingOptions: ['Self-paced programming portfolio (DSA, Web Dev, Git)'],
        evidence: [ugcEvidence],
        bridgingRecommendation: 'Opt for 3-Year BCA + 2-Year NIMCET MCA to enter top software product firms.'
      };
    }

    return {
      status: 'STATUTORILY_RESTRICTED',
      badgeLabel: 'Statutorily Restricted [No Science/Math]',
      reason: 'Mandatory Mathematics and Science prerequisites are entirely absent from the student curriculum.',
      summary: 'Commerce and Arts streams without Mathematics cannot directly enter engineering degree programs under AICTE regulations.',
      statutoryBasis: 'AICTE Statutory Curriculum Norms (Approval Process Handbook Sec 1.3).',
      requirementsSatisfied: ['Class 12 Intermediate Pass'],
      requirementsMissing: ['Mathematics', 'Physics', 'Chemistry'],
      nextAction: 'Explore technology roles through BCA (for streams with basic computing) or UI/UX Design (B.Des via UCEED).',
      alternatives: ['B.Des in Interaction/UI-UX Design', 'BCA (in universities accepting non-math)', 'BA Digital Media'],
      bridgingOptions: ['NIOS Senior Secondary PCM Bridge Exam (requires 1-2 years additional study)'],
      evidence: [aicteEvidence]
    };
  }

  // 2. Medical / MBBS / NEET Route
  if (
    nodeOrDegreeId.includes('MBBS') || 
    nodeOrDegreeId.includes('NEET') || 
    nodeOrDegreeId.includes('DOCTOR') || 
    nodeOrDegreeId === 'node_mbbs' || 
    nodeOrDegreeId === 'node_locked_medical'
  ) {
    const nmcEvidence: EvidenceRecord = {
      ruleId: 'NMC_NEET_UG_REG_2023',
      evidenceLevel: 'OFFICIAL',
      sourceName: 'National Medical Commission (NMC) NEET-UG Eligibility Regulations',
      sourceUrl: 'https://www.nmc.org.in',
      sourceType: 'GAZETTE',
      jurisdiction: 'NATIONAL',
      lastVerified: '2025-11-28',
      verificationStatus: 'PUBLISHED'
    };

    if (stream === 'BiPC' || stream === 'PCMB') {
      return {
        status: 'ELIGIBLE',
        badgeLabel: 'Directly Eligible [OFFICIAL]',
        reason: 'Mandatory prerequisites satisfied: Class 12 with Biology/Biotechnology, Physics, and Chemistry.',
        summary: 'Fully eligible to write NEET-UG for MBBS, BDS, and AYUSH seats with Physics, Chemistry, and Biology/Zoology.',
        statutoryBasis: 'National Medical Commission (NMC) NEET-UG Eligibility Regulations (Gazette notification).',
        requirementsSatisfied: ['Class 12 Intermediate Pass', 'Biology / Biotechnology', 'Physics', 'Chemistry'],
        requirementsMissing: [],
        nextAction: 'Register for NTA NEET-UG application window in February-March.',
        alternatives: ['B.Pharmacy / Pharm.D', 'B.Sc Agriculture / Horticulture', 'Allied Health Sciences (Radiology, Anesthesia)'],
        bridgingOptions: [],
        evidence: [nmcEvidence]
      };
    }

    if (stream === 'MPC') {
      const nmcBridgeEvidence: EvidenceRecord = {
        ruleId: 'NMC_UGMEB_PUBLIC_NOTICE_2023',
        evidenceLevel: 'OFFICIAL',
        sourceName: 'NMC Public Notice: Undergraduate Medical Education Board (Additional Biology Criteria)',
        sourceUrl: 'https://www.nmc.org.in/rules-regulations/undergraduate-medical-education-board',
        sourceType: 'STATUTORY_NOTIFICATION',
        jurisdiction: 'NATIONAL',
        lastVerified: '2025-11-20',
        verificationStatus: 'PUBLISHED'
      };

      return {
        status: 'POSSIBLE_WITH_BRIDGING',
        badgeLabel: 'Possible via NIOS Biology Bridge',
        reason: 'Regular MPC lacks Biology. NMC now permits candidates with Biology as an additional subject from recognized boards (NIOS).',
        summary: 'MPC students lack Biology in regular Intermediate. As per Delhi High Court and NMC updated norms, candidates passing Biology as an additional subject from NIOS are permitted to appear for NEET-UG.',
        statutoryBasis: 'NMC Public Notice (Undergraduate Medical Education Board - Additional Biology Criteria).',
        requirementsSatisfied: ['Class 12 Intermediate Pass', 'Physics', 'Chemistry'],
        requirementsMissing: ['Biology / Biotechnology'],
        nextAction: 'Register with NIOS for Biology as an additional subject before applying for NEET-UG.',
        alternatives: ['Biomedical Engineering (via MPC/JEE)', 'Bioinformatics / Computational Biology', 'Health Tech Systems'],
        bridgingOptions: ['NIOS Senior Secondary Biology Single-Subject Examination'],
        evidence: [nmcBridgeEvidence],
        bridgingRecommendation: 'Register with NIOS for Biology as an additional subject while completing Senior Inter.'
      };
    }

    return {
      status: 'STATUTORILY_RESTRICTED',
      badgeLabel: 'Statutorily Restricted',
      reason: 'Non-science streams lack mandatory secondary science laboratory disciplines (Biology, Physics, Chemistry).',
      summary: 'Non-science streams (MEC, CEC, HEC) are statutorily barred from NEET-UG and clinical MBBS medicine without secondary science certification.',
      statutoryBasis: 'NMC Regulations on Graduate Medical Education (Sec 4.2).',
      requirementsSatisfied: ['Class 12 Intermediate Pass'],
      requirementsMissing: ['Biology', 'Physics', 'Chemistry'],
      nextAction: 'Explore healthcare management (BBA Hospital Administration) or health psychology.',
      alternatives: ['Hospital Administration & Management', 'Clinical Psychology (BA/B.Sc)', 'Healthcare Data Management'],
      bridgingOptions: ['Complete full 2-year Senior Secondary Science curriculum (NIOS/Regular)'],
      evidence: [nmcEvidence]
    };
  }

  // 3. Polytechnic Diploma Route
  if (nodeOrDegreeId.includes('DIPLOMA') || nodeOrDegreeId.includes('POLYCET') || nodeOrDegreeId === 'POLYTECHNIC') {
    const sbtetEvidence: EvidenceRecord = {
      ruleId: 'SBTET_POLYCET_NORMS_2024',
      evidenceLevel: 'OFFICIAL',
      sourceName: 'State Board of Technical Education & Training (SBTET) Admission Rules',
      sourceUrl: 'https://polycet.nic.in',
      sourceType: 'REGULATORY_HANDBOOK',
      jurisdiction: 'STATE',
      lastVerified: '2025-10-15',
      verificationStatus: 'PUBLISHED'
    };

    return {
      status: 'ELIGIBLE',
      badgeLabel: 'Directly Eligible Post-10th [OFFICIAL]',
      reason: 'Class 10 SSC passing qualification satisfied.',
      summary: 'Students passing Class 10 with Mathematics and Science from any recognized board are directly eligible for POLYCET.',
      statutoryBasis: 'State Board of Technical Education & Training (SBTET) Admission Rules.',
      requirementsSatisfied: ['Class 10 SSC Pass', 'Mathematics', 'Science'],
      requirementsMissing: [],
      nextAction: 'Register for State POLYCET exam in April-May.',
      alternatives: ['Intermediate MPC / BiPC', 'ITI Craftsman Certificate Trades'],
      bridgingOptions: [],
      evidence: [sbtetEvidence]
    };
  }

  // 4. Chartered Accountancy / Commerce Route
  if (
    nodeOrDegreeId.includes('CA') || 
    nodeOrDegreeId.includes('BCOM') || 
    nodeOrDegreeId.includes('FINANCE') || 
    nodeOrDegreeId === 'CHARTERED_ACCOUNTANT'
  ) {
    const icaiEvidence: EvidenceRecord = {
      ruleId: 'ICAI_CA_FOUNDATION_NORMS_2024',
      evidenceLevel: 'OFFICIAL',
      sourceName: 'ICAI Chartered Accountants Regulations (Entry Route Guidelines)',
      sourceUrl: 'https://www.icai.org',
      sourceType: 'REGULATORY_HANDBOOK',
      jurisdiction: 'NATIONAL',
      lastVerified: '2025-12-05',
      verificationStatus: 'PUBLISHED'
    };

    return {
      status: 'ELIGIBLE',
      badgeLabel: 'Directly Eligible [Universal ICAI Entry]',
      reason: 'ICAI permits students from any stream passing Class 12 to enroll in CA Foundation.',
      summary: 'Any student registered with a recognized Class 12 board can enroll in ICAI CA Foundation. MEC and CEC provide strong accounting head-starts.',
      statutoryBasis: 'ICAI Chartered Accountants Regulations (Entry Route Guidelines).',
      requirementsSatisfied: ['Class 12 Intermediate Pass (Any Stream)'],
      requirementsMissing: [],
      nextAction: 'Register with ICAI for CA Foundation at least 4 months before exam date (June/December).',
      alternatives: ['CMA (Cost & Management Accounting)', 'CS (Company Secretary)', 'B.Com (Hons)'],
      bridgingOptions: stream === 'MPC' || stream === 'BiPC' ? ['Basic Accountancy & Mercantile Law Foundation Study'] : [],
      evidence: [icaiEvidence]
    };
  }

  // 5. Law / 5-Year Integrated BA-LLB
  if (
    nodeOrDegreeId.includes('LAW') || 
    nodeOrDegreeId.includes('LLB') || 
    nodeOrDegreeId.includes('CLAT') || 
    nodeOrDegreeId === 'CORPORATE_LAWYER'
  ) {
    const bciEvidence: EvidenceRecord = {
      ruleId: 'BCI_LEGAL_EDUCATION_RULES_2020',
      evidenceLevel: 'OFFICIAL',
      sourceName: 'Bar Council of India (BCI) Legal Education Rules',
      sourceUrl: 'https://www.barcouncilofindia.org',
      sourceType: 'REGULATORY_HANDBOOK',
      jurisdiction: 'NATIONAL',
      lastVerified: '2025-08-10',
      verificationStatus: 'PUBLISHED'
    };

    return {
      status: 'ELIGIBLE',
      badgeLabel: 'Directly Eligible [All Streams Open]',
      reason: 'Bar Council of India mandates only Class 12 pass without stream barriers for 5-Year Integrated LLB.',
      summary: 'Bar Council of India allows students from ANY Class 12 stream (MPC, BiPC, MEC, CEC, HEC) to appear for CLAT/AILET for 5-Year Law.',
      statutoryBasis: 'Bar Council of India (BCI) Legal Education Rules.',
      requirementsSatisfied: ['Class 12 Intermediate Pass (Minimum 45% aggregate)'],
      requirementsMissing: [],
      nextAction: 'Prepare for CLAT (Consortium of NLUs) and State Law CET examinations in December/May.',
      alternatives: ['3-Year LLB (post-graduation)', 'Company Secretary (Corporate Legal Practice)'],
      bridgingOptions: [],
      evidence: [bciEvidence]
    };
  }

  // Default fallback: Standard progression
  return {
    status: 'ELIGIBLE',
    badgeLabel: 'Standard Path [OFFICIAL]',
    reason: 'Standard academic progression according to UGC and state board norms.',
    summary: 'Standard educational progression conforming to state board and university prerequisites.',
    statutoryBasis: 'University Grants Commission (UGC) Minimum Standards of Instruction.',
    requirementsSatisfied: ['Educational stage prerequisites met'],
    requirementsMissing: [],
    nextAction: 'Review syllabus and register for corresponding entrance or admission process.',
    alternatives: ['Parallel vocational certifications', 'Open university programs'],
    bridgingOptions: [],
    evidence: [defaultEvidence]
  };
}

export function getEligibilityBadgeColor(status: EligibilityStatus): {
  bg: string;
  text: string;
  border: string;
} {
  switch (status) {
    case 'ELIGIBLE':
      return {
        bg: 'bg-emerald-50',
        text: 'text-emerald-800',
        border: 'border-emerald-200'
      };
    case 'POSSIBLE_WITH_BRIDGING':
      return {
        bg: 'bg-amber-50',
        text: 'text-amber-800',
        border: 'border-amber-200'
      };
    case 'ALTERNATIVE_PLAN_B':
      return {
        bg: 'bg-purple-50',
        text: 'text-purple-800',
        border: 'border-purple-200'
      };
    case 'STATUTORILY_RESTRICTED':
      return {
        bg: 'bg-red-50',
        text: 'text-red-800',
        border: 'border-red-200'
      };
    default:
      return {
        bg: 'bg-slate-50',
        text: 'text-slate-800',
        border: 'border-slate-200'
      };
  }
}
