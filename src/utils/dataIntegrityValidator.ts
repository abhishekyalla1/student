import {
  STREAMS_DATA,
  ENTRANCE_EXAMS_DATA,
  DEGREE_COURSES_DATA,
  JOB_ROLES_DATA,
  CAREER_TRANSITIONS_DATA,
  PATH_COMPARISONS_DATA
} from '../data/pathwayData';

export interface IntegrityReport {
  passed: boolean;
  totalEntities: number;
  duplicateIds: string[];
  orphanReferences: string[];
  invalidEvidenceLevels: string[];
  warnings: string[];
}

export function validatePathwayDataIntegrity(): IntegrityReport {
  const seenIds = new Set<string>();
  const duplicateIds: string[] = [];
  const orphanReferences: string[] = [];
  const invalidEvidenceLevels: string[] = [];
  const warnings: string[] = [];

  const streamCodes = new Set(STREAMS_DATA.map(s => s.code));
  const examIds = new Set(ENTRANCE_EXAMS_DATA.map(e => e.id));
  const degreeIds = new Set(DEGREE_COURSES_DATA.map(d => d.id));
  const jobIds = new Set(JOB_ROLES_DATA.map(j => j.id));

  // 1. Check Streams
  STREAMS_DATA.forEach(s => {
    if (seenIds.has(s.id)) duplicateIds.push(`Duplicate Stream ID: ${s.id}`);
    seenIds.add(s.id);
    if (!['OFFICIAL', 'STRONGLY_SUPPORTED', 'THIRD_PARTY', 'UNCERTAIN'].includes(s.evidenceLevel)) {
      invalidEvidenceLevels.push(`Stream ${s.id} invalid evidence level: ${s.evidenceLevel}`);
    }
  });

  // 2. Check Exams
  ENTRANCE_EXAMS_DATA.forEach(e => {
    if (seenIds.has(e.id)) duplicateIds.push(`Duplicate Exam ID: ${e.id}`);
    seenIds.add(e.id);
    e.eligibleStreams.forEach(stream => {
      if (!streamCodes.has(stream) && stream !== 'ALL') {
        orphanReferences.push(`Exam ${e.id} references undefined stream: ${stream}`);
      }
    });
  });

  // 3. Check Degrees
  DEGREE_COURSES_DATA.forEach(d => {
    if (seenIds.has(d.id)) duplicateIds.push(`Duplicate Degree ID: ${d.id}`);
    seenIds.add(d.id);
    d.streamsAllowed.forEach(stream => {
      if (!streamCodes.has(stream) && stream !== 'ALL') {
        orphanReferences.push(`Degree ${d.id} references undefined stream: ${stream}`);
      }
    });
    d.entranceExams.forEach(exam => {
      if (!examIds.has(exam)) {
        orphanReferences.push(`Degree ${d.id} references undefined entrance exam: ${exam}`);
      }
    });
    d.targetJobRoles.forEach(job => {
      if (!jobIds.has(job)) {
        orphanReferences.push(`Degree ${d.id} references undefined target job role: ${job}`);
      }
    });
  });

  // 4. Check Job Roles
  JOB_ROLES_DATA.forEach(j => {
    if (seenIds.has(j.id)) duplicateIds.push(`Duplicate Job ID: ${j.id}`);
    seenIds.add(j.id);
    j.entryDegreePaths.forEach(degree => {
      if (!degreeIds.has(degree)) {
        orphanReferences.push(`Job ${j.id} references undefined entry degree: ${degree}`);
      }
    });
  });

  // 5. Check Transitions
  CAREER_TRANSITIONS_DATA.forEach(t => {
    if (seenIds.has(t.id)) duplicateIds.push(`Duplicate Transition ID: ${t.id}`);
    seenIds.add(t.id);
  });

  // 6. Check Comparisons
  Object.values(PATH_COMPARISONS_DATA).forEach((c, idx) => {
    if (!c.pathA || !c.pathB || !c.verdict) {
      warnings.push(`Comparison at index ${idx} is missing required fields`);
    }
  });

  const passed = duplicateIds.length === 0 && orphanReferences.length === 0 && invalidEvidenceLevels.length === 0;

  return {
    passed,
    totalEntities: seenIds.size,
    duplicateIds,
    orphanReferences,
    invalidEvidenceLevels,
    warnings
  };
}
