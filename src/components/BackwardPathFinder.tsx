import React, { useState } from 'react';
import { JOB_ROLES_DATA } from '../data/pathwayData';
import { JobRole } from '../types/pathway';
import {
  Search,
  ArrowRight,
  Briefcase,
  AlertCircle,
  CheckCircle2,
  Layers,
  GraduationCap
} from 'lucide-react';

interface BackwardPathFinderProps {
  onSelectTargetJob: (jobId: string) => void;
}

export const BackwardPathFinder: React.FC<BackwardPathFinderProps> = ({
  onSelectTargetJob
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('ALL');

  const filteredJobs = JOB_ROLES_DATA.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.industrySector.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.entryLevelSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (selectedIndustry === 'ALL') return matchesSearch;
    return matchesSearch && job.industrySector.toLowerCase().includes(selectedIndustry.toLowerCase());
  });

  const industries = [
    { id: 'ALL', label: 'All Industries' },
    { id: 'Software', label: 'Software & IT' },
    { id: 'Healthcare', label: 'Healthcare & Medicine' },
    { id: 'Accounting', label: 'Finance & CA' },
    { id: 'Legal', label: 'Corporate Law' },
    { id: 'Design', label: 'Product & UX Design' },
    { id: 'Public', label: 'Civil Services / Govt' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-3">
            <Search className="w-3.5 h-3.5" />
            Reverse Trace Engine
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Target Career → Required Educational Roadmap
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Know what you want to become? Work backward from the job role to uncover mandatory degree requirements, competitive entrance exams, compulsory Class 11-12 streams, and the non-negotiable reality check skills needed for hiring.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search careers (e.g. Software Engineer, Doctor, CA, UX Designer)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:bg-white/15 focus:border-indigo-400"
            />
          </div>
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {industries.map(ind => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedIndustry === ind.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300'
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Job Roles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredJobs.map((job: JobRole) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  {job.industrySector}
                </span>
                <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                  [{job.evidenceLevel}]
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {job.title}
              </h3>

              {/* Salary Band */}
              <div className="mt-2 text-xs font-semibold text-emerald-700 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100 flex items-center justify-between">
                <span>Entry Compensation:</span>
                <span className="font-bold">{job.salaryTiers.entryRange}</span>
              </div>

              {/* Reality Check Callout */}
              <div className="mt-3 text-xs bg-amber-50/80 border border-amber-200 p-2.5 rounded-lg text-amber-950">
                <div className="flex items-center gap-1 font-bold text-amber-900 mb-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  Degree Alone Sufficient?
                  <span className={job.degreeAloneSufficient ? 'text-emerald-700 ml-1' : 'text-red-700 ml-1'}>
                    {job.degreeAloneSufficient ? 'Yes (Statutory Reg)' : 'No (Skills Required)'}
                  </span>
                </div>
                <p className="line-clamp-2 text-[11px] text-amber-900/90 leading-relaxed">
                  {job.prerequisiteRealityCheck}
                </p>
              </div>

              {/* Key Skills */}
              <div className="mt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Core Industry Skills:
                </span>
                <div className="flex flex-wrap gap-1">
                  {job.entryLevelSkills.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                    >
                      {skill.split('(')[0]}
                    </span>
                  ))}
                </div>
              </div>

              {/* Required Streams */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="text-slate-400">Class 11-12 Route:</span>
                <span className="font-bold text-indigo-700">
                  {job.directStreams.join(' or ')}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-5 pt-3 border-t border-slate-100">
              <button
                onClick={() => onSelectTargetJob(job.id)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors group"
              >
                <span>Generate Reverse Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
