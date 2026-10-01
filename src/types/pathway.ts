/**
 * Pathway - Indian Student Career Roadmap Type Definitions
 */

export type EvidenceLevel = 'OFFICIAL' | 'STRONGLY_SUPPORTED' | 'THIRD_PARTY' | 'UNCERTAIN';

export type NodeState = 'COMPLETED' | 'YOU_ARE_HERE' | 'NEXT_STEP' | 'LOCKED' | 'ALTERNATIVE' | 'AVAILABLE';

export type StageId = 
  | 'CLASS_10'
  | 'INTERMEDIATE'
  | 'POLYTECHNIC'
  | 'ITI'
  | 'ENTRANCE_EXAM'
  | 'UG_DEGREE'
  | 'SKILL_BRIDGE'
  | 'JOB_ROLE';

export type BoardType = 'CBSE' | 'ICSE' | 'AP_STATE' | 'TS_STATE' | 'OTHER_STATE';

export interface SubjectStream {
  id: string;
  name: string;
  code: string;
  stage: 'INTERMEDIATE' | 'POLYTECHNIC' | 'ITI';
  boards: string[];
  mandatorySubjects: string[];
  description: string;
  whoPrefers: string;
  doorsOpen: string[];
  doorsClosed: string[];
  evidenceLevel: EvidenceLevel;
  sourceCitation: string;
}

export interface EntranceExam {
  id: string;
  name: string;
  shortName: string;
  category: 'ENGINEERING' | 'MEDICAL' | 'CENTRAL_UNIV' | 'LAW' | 'ARCHITECTURE' | 'DESIGN' | 'LATERAL_ENTRY' | 'COMMERCE_MGMT' | 'DEFENSE';
  conductingAuthority: string; // e.g. NTA, APSCHE, TSCHE, IITs, Consortium of NLUs
  level: 'NATIONAL' | 'STATE';
  statesApplicable?: string[];
  eligibleStreams: string[];
  eligibilityDescription: string;
  typicalMonthWindow: string; // e.g., 'April - May'
  examFrequency: string; // e.g., 'Twice a year (Jan & April)'
  officialPortal: string;
  evidenceLevel: EvidenceLevel;
  sourceCitation: string;
}

export interface DegreeCourse {
  id: string;
  name: string;
  shortName: string;
  degreeLevel: 'Undergraduate' | 'Diploma' | 'Integrated Dual' | 'Professional';
  durationYears: number;
  durationLabel: string; // e.g., '4 Years (8 Semesters)'
  streamsAllowed: string[];
  mandatoryPrerequisites: string[];
  entranceExams: string[];
  skillsDeveloped: string[];
  prerequisiteRealityCheck: string;
  targetJobRoles: string[];
  higherStudies: string[];
  costCategory: 'Subsidized / Govt Low' | 'Moderate' | 'High Private';
  evidenceLevel: EvidenceLevel;
  sourceCitation: string;
  sourceUrl?: string;
}

export interface JobRole {
  id: string;
  title: string;
  industrySector: string;
  degreeAloneSufficient: boolean;
  prerequisiteRealityCheck: string;
  entryLevelSkills: string[];
  portfolioMilestones: string[];
  typicalDailyWork: string;
  entryDegreePaths: string[];
  directStreams: string[];
  evidenceLevel: EvidenceLevel;
  salaryTiers: {
    entryRange: string;
    midRange: string;
    seniorRange: string;
    source: string;
  };
}

export interface CareerTransition {
  id: string;
  currentBackground: string;
  targetTransitionPath: string;
  feasibilityLevel: 'Direct / High' | 'Moderate' | 'High (Alternate)' | 'Not Eligible / Restricted';
  requirementsBridging: string;
  statutoryRuleExplanation: string;
  evidenceLevel: EvidenceLevel;
  sourceCitation: string;
}

export interface PathwayNode {
  id: string;
  title: string;
  stage: StageId;
  stageName: string;
  state: NodeState;
  isAlternative?: boolean;
  lockReason?: string;
  subtitle?: string;
  iconType?: string;
  dataRef?: {
    type: 'STREAM' | 'EXAM' | 'COURSE' | 'JOB' | 'STAGE' | 'BRIDGE';
    id: string;
  };
  details: {
    whatItIs: string;
    whyItMatters: string;
    mandatoryRequirements: string;
    whenToDoIt: string;
    nextStep: string;
    alternativeRoute: string;
    realityCheck?: string;
    evidenceLevel: EvidenceLevel;
    sourceCitation: string;
    officialUrl?: string;
  };
}

export interface PathwayEdge {
  id: string;
  from: string;
  to: string;
  label?: string;
  isAlternative?: boolean;
  isDashed?: boolean;
  isLocked?: boolean;
}

export interface PathwayGraph {
  id: string;
  title: string;
  summary: string;
  nodes: PathwayNode[];
  edges: PathwayEdge[];
}

export type LanguageCode = 'en' | 'hi' | 'te' | 'ta';

export interface UserProfile {
  currentStage: 'CLASS_10' | 'CLASS_11_12' | 'DIPLOMA_3YR' | 'ITI' | 'UG_DEGREE';
  board: BoardType;
  state: string; // 'AP' | 'TS' | 'ALL' | 'OTHER'
  selectedStream?: string; // 'MPC' | 'BiPC' | 'MEC' | 'CEC' | 'HEC' | 'PCMB' | 'POLYTECHNIC_CSE' etc.
  interests: string[];
  targetJobId?: string;
  currentDegreeId?: string;
  parentMode: boolean;
  language: LanguageCode;
}

export interface PathComparisonData {
  pathA: {
    title: string;
    courseId: string;
    stream: string;
    duration: string;
    examDifficulty: string;
    prerequisites: string;
    costCategory: string;
    primaryEntryRole: string;
    higherStudies: string;
    advantages: string[];
    risks: string[];
  };
  pathB: {
    title: string;
    courseId: string;
    stream: string;
    duration: string;
    examDifficulty: string;
    prerequisites: string;
    costCategory: string;
    primaryEntryRole: string;
    higherStudies: string;
    advantages: string[];
    risks: string[];
  };
  verdict: string;
}
