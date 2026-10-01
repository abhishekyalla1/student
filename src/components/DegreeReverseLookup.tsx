import React, { useState } from 'react';
import { DEGREE_COURSES_DATA } from '../data/pathwayData';
import { generateDegreeReverseLookup } from '../utils/roadmapEngine';
import {
  GraduationCap,
  Briefcase,
  Layers,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface DegreeReverseLookupProps {
  onSelectCareer: (jobId: string) => void;
}

export const DegreeReverseLookup: React.FC<DegreeReverseLookupProps> = ({
  onSelectCareer
}) => {
  const [selectedDegreeId, setSelectedDegreeId] = useState<string>('BTECH_CSE');

  const lookupResult = generateDegreeReverseLookup(selectedDegreeId);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Degree-to-Career Explorer
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            What Can You Do With Your Degree?
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Already enrolled in or graduated from a degree program? Discover direct industry roles, non-obvious alternate career pivots, required skill bridges, and higher education pathways.
          </p>
        </div>

        {/* Degree Selector Buttons */}
        <div className="mt-6 flex flex-wrap gap-2">
          {DEGREE_COURSES_DATA.map((degree) => {
            const isSelected = selectedDegreeId === degree.id;
            return (
              <button
                key={degree.id}
                onClick={() => setSelectedDegreeId(degree.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-white text-indigo-950 shadow-md font-bold'
                    : 'bg-white/10 hover:bg-white/20 text-slate-200'
                }`}
              >
                {degree.shortName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Analysis Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
        
        {/* Degree Header Details */}
        <div className="border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              {lookupResult.course.degreeLevel} Degree
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500 font-medium">
              {lookupResult.course.durationLabel}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
              [{lookupResult.course.evidenceLevel}]
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {lookupResult.course.name}
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-mono">
            {lookupResult.course.sourceCitation}
          </p>
        </div>

        {/* Reality Check Callout */}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-amber-900 text-sm">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            Reality Check: What this degree does NOT automatically guarantee
          </div>
          <p className="leading-relaxed text-amber-900/90 pt-1">
            {lookupResult.realityCheck}
          </p>
        </div>

        {/* Grid: Direct Jobs vs Non-Obvious Career Pivots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Column 1: Direct Entry Careers */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Direct Primary Industry Roles
              </h3>
            </div>
            
            <div className="space-y-3">
              {lookupResult.directJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-slate-50/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>{job.industrySector}</span>
                      <span className="font-bold text-emerald-700">{job.salaryTiers.entryRange}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{job.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {job.typicalDailyWork}
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectCareer(job.id)}
                    className="mt-3 text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <span>View Reverse Pathway</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Non-Obvious / Career Pivots */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Non-Obvious High-Value Career Pivots
              </h3>
            </div>

            <div className="space-y-3">
              {lookupResult.alternativeJobs.map((alt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-purple-50/40 border border-purple-200/80 text-xs text-slate-700"
                >
                  <div className="font-bold text-slate-900 text-sm">{alt.title}</div>
                  <div className="mt-2 text-purple-950 bg-white p-2.5 rounded-lg border border-purple-100">
                    <span className="font-bold text-purple-900 block text-[11px] mb-0.5">
                      Required Skill & Portfolio Bridge:
                    </span>
                    {alt.bridgeNeeded}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Higher Studies Section */}
        <div className="pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Statutory Higher Education & Specialization Options
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {lookupResult.higherStudies.map((hs, i) => (
              <div key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <span className="font-bold text-indigo-900">{hs}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
