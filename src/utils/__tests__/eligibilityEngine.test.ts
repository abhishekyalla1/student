import { describe, it, expect } from 'vitest';
import { evaluateNodeEligibility } from '../eligibilityEngine';
import { UserProfile } from '../../types/pathway';

describe('PATHWAY Deterministic Statutory Eligibility Engine', () => {
  const baseProfile: UserProfile = {
    currentStage: 'CLASS_11_12',
    board: 'CBSE',
    state: 'ALL',
    selectedStream: 'MPC',
    interests: ['tech'],
    parentMode: false,
    language: 'en'
  };

  it('evaluates MPC student as ELIGIBLE for AICTE B.Tech / JEE with Mathematics & Physics', () => {
    const result = evaluateNodeEligibility(baseProfile, 'BTECH_CSE');
    expect(result.status).toBe('ELIGIBLE');
    expect(result.requirementsSatisfied).toContain('Mathematics');
    expect(result.requirementsSatisfied).toContain('Physics');
    expect(result.requirementsMissing.length).toBe(0);
    expect(result.evidence[0].evidenceLevel).toBe('OFFICIAL');
  });

  it('evaluates Polytechnic Diploma student as ELIGIBLE for B.Tech via Lateral Entry (ECET)', () => {
    const diplomaProfile: UserProfile = {
      ...baseProfile,
      currentStage: 'DIPLOMA_3YR',
      selectedStream: 'POLYTECHNIC'
    };
    const result = evaluateNodeEligibility(diplomaProfile, 'BTECH_CSE');
    expect(result.status).toBe('ELIGIBLE');
    expect(result.badgeLabel).toContain('Lateral Entry');
    expect(result.requirementsSatisfied).toContain('3-Year Polytechnic Engineering Diploma');
  });

  it('evaluates BiPC student as POSSIBLE_WITH_BRIDGING for core B.Tech due to missing Mathematics', () => {
    const bipcProfile: UserProfile = {
      ...baseProfile,
      selectedStream: 'BiPC'
    };
    const result = evaluateNodeEligibility(bipcProfile, 'BTECH_CSE');
    expect(result.status).toBe('POSSIBLE_WITH_BRIDGING');
    expect(result.requirementsMissing).toContain('Class 12 Higher Mathematics');
    expect(result.bridgingOptions).toContain('NIOS Senior Secondary Mathematics Single-Subject Certification');
  });

  it('evaluates MEC student as ALTERNATIVE_PLAN_B (BCA Route) for engineering roles', () => {
    const mecProfile: UserProfile = {
      ...baseProfile,
      selectedStream: 'MEC'
    };
    const result = evaluateNodeEligibility(mecProfile, 'BTECH_CSE');
    expect(result.status).toBe('ALTERNATIVE_PLAN_B');
    expect(result.badgeLabel).toContain('Plan-B Route');
    expect(result.alternatives).toContain('3-Year BCA + 2-Year MCA (NIMCET)');
  });

  it('evaluates CEC / HEC students as STATUTORILY_RESTRICTED for core AICTE engineering', () => {
    const cecProfile: UserProfile = {
      ...baseProfile,
      selectedStream: 'CEC'
    };
    const result = evaluateNodeEligibility(cecProfile, 'BTECH_CSE');
    expect(result.status).toBe('STATUTORILY_RESTRICTED');
    expect(result.requirementsMissing).toContain('Mathematics');
    expect(result.requirementsMissing).toContain('Physics');
  });

  it('evaluates BiPC student as ELIGIBLE for MBBS / NEET-UG under NMC regulations', () => {
    const bipcProfile: UserProfile = {
      ...baseProfile,
      selectedStream: 'BiPC'
    };
    const result = evaluateNodeEligibility(bipcProfile, 'node_mbbs');
    expect(result.status).toBe('ELIGIBLE');
    expect(result.requirementsSatisfied).toContain('Biology / Biotechnology');
    expect(result.evidence[0].sourceName).toContain('National Medical Commission');
  });

  it('evaluates MPC student as POSSIBLE_WITH_BRIDGING for NEET-UG via NIOS Biology Bridge', () => {
    const result = evaluateNodeEligibility(baseProfile, 'node_mbbs');
    expect(result.status).toBe('POSSIBLE_WITH_BRIDGING');
    expect(result.requirementsMissing).toContain('Biology / Biotechnology');
    expect(result.bridgingOptions[0]).toContain('NIOS Senior Secondary Biology');
  });

  it('evaluates Commerce / Arts students as STATUTORILY_RESTRICTED for NEET-UG', () => {
    const cecProfile: UserProfile = {
      ...baseProfile,
      selectedStream: 'CEC'
    };
    const result = evaluateNodeEligibility(cecProfile, 'node_mbbs');
    expect(result.status).toBe('STATUTORILY_RESTRICTED');
    expect(result.requirementsMissing).toContain('Biology');
  });

  it('permits students from all streams to enter ICAI CA Foundation', () => {
    const mpcResult = evaluateNodeEligibility(baseProfile, 'CHARTERED_ACCOUNTANT');
    expect(mpcResult.status).toBe('ELIGIBLE');

    const cecProfile: UserProfile = { ...baseProfile, selectedStream: 'CEC' };
    const cecResult = evaluateNodeEligibility(cecProfile, 'CHARTERED_ACCOUNTANT');
    expect(cecResult.status).toBe('ELIGIBLE');
  });

  it('permits students from all streams to enter 5-Year Integrated Law (CLAT)', () => {
    const result = evaluateNodeEligibility(baseProfile, 'CORPORATE_LAWYER');
    expect(result.status).toBe('ELIGIBLE');
    expect(result.summary).toContain('Bar Council of India allows students from ANY Class 12 stream');
  });
});
