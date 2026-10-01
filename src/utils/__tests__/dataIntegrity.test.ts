import { describe, it, expect } from 'vitest';
import { validatePathwayDataIntegrity } from '../dataIntegrityValidator';

describe('PATHWAY Dataset Statutory Integrity & No-Orphan Verification', () => {
  it('validates that dataset has no duplicate IDs, invalid evidence levels, or orphan references', () => {
    const report = validatePathwayDataIntegrity();
    
    if (!report.passed) {
      console.error('Integrity failures:', {
        duplicateIds: report.duplicateIds,
        orphanReferences: report.orphanReferences,
        invalidEvidenceLevels: report.invalidEvidenceLevels
      });
    }

    expect(report.duplicateIds).toEqual([]);
    expect(report.invalidEvidenceLevels).toEqual([]);
    expect(report.orphanReferences).toEqual([]);
    expect(report.passed).toBe(true);
    expect(report.totalEntities).toBeGreaterThan(30);
  });
});
