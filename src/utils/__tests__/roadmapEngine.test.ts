import { describe, it, expect } from 'vitest';
import {
  generateForwardRoadmap,
  generateBackwardRoadmap,
  generateDegreeReverseLookup
} from '../roadmapEngine';
import { UserProfile } from '../../types/pathway';

describe('PATHWAY Roadmap Synthesizer & Reverse Engine', () => {
  const mpcProfile: UserProfile = {
    currentStage: 'CLASS_11_12',
    board: 'AP_STATE',
    state: 'AP',
    selectedStream: 'MPC',
    interests: ['tech'],
    parentMode: false,
    language: 'en'
  };

  it('generates a valid, connected Forward Roadmap for Intermediate MPC with JEE and B.Tech', () => {
    const graph = generateForwardRoadmap(mpcProfile);
    expect(graph.nodes.length).toBeGreaterThanOrEqual(5);
    expect(graph.edges.length).toBeGreaterThanOrEqual(4);

    const stageIds = graph.nodes.map(n => n.stage);
    expect(stageIds).toContain('CLASS_10');
    expect(stageIds).toContain('INTERMEDIATE');
    expect(stageIds).toContain('ENTRANCE_EXAM');
    expect(stageIds).toContain('UG_DEGREE');

    // Root node state check
    const rootNode = graph.nodes.find(n => n.id === 'stage_class_10');
    expect(rootNode?.state).toBe('COMPLETED');
  });

  it('generates Polytechnic Diploma roadmap with direct ECET Lateral Entry edge to B.Tech 2nd Year', () => {
    const polyProfile: UserProfile = {
      ...mpcProfile,
      currentStage: 'DIPLOMA_3YR',
      selectedStream: 'POLYTECHNIC'
    };
    const graph = generateForwardRoadmap(polyProfile);
    const ecetNode = graph.nodes.find(n => n.id === 'node_ecet_exam');
    const lateralNode = graph.nodes.find(n => n.id === 'node_btech_lateral');
    expect(ecetNode).toBeDefined();
    expect(lateralNode).toBeDefined();
  });

  it('generates Backward Career Roadmap reversing from Software Engineer down to Class 10', () => {
    const backwardGraph = generateBackwardRoadmap('SOFTWARE_ENGINEER');
    expect(backwardGraph.nodes.length).toBeGreaterThanOrEqual(5);

    const titles = backwardGraph.nodes.map(n => n.title.toLowerCase());
    expect(titles.some(t => t.includes('class 10'))).toBe(true);
    expect(titles.some(t => t.includes('mpc'))).toBe(true);
    expect(titles.some(t => t.includes('b.tech') || t.includes('bca'))).toBe(true);
    expect(titles.some(t => t.includes('software engineer'))).toBe(true);
  });

  it('generates Backward Career Roadmap for Doctor reversing to BiPC and NEET', () => {
    const doctorGraph = generateBackwardRoadmap('DOCTOR');
    const titles = doctorGraph.nodes.map(n => n.title.toLowerCase());
    expect(titles.some(t => t.includes('bipc'))).toBe(true);
    expect(titles.some(t => t.includes('neet'))).toBe(true);
    expect(titles.some(t => t.includes('mbbs'))).toBe(true);
  });

  it('performs Degree Reverse Lookup mapping BTECH_CSE to direct roles and reality check', () => {
    const result = generateDegreeReverseLookup('BTECH_CSE');
    expect(result.course.id).toBe('BTECH_CSE');
    expect(result.directJobs.length).toBeGreaterThan(0);
    expect(result.alternativeJobs.length).toBeGreaterThan(0);
    expect(result.higherStudies).toContain('M.Tech in AI/ML (via GATE)');
    expect(result.realityCheck).toContain('Having a B.Tech CSE degree alone does not automatically make you a Software Engineer');
  });
});
