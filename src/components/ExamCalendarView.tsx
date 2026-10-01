import React, { useState } from 'react';
import { ENTRANCE_EXAMS_DATA } from '../data/pathwayData';
import { EntranceExam } from '../types/pathway';
import {
  Calendar,
  ExternalLink,
  ShieldCheck,
  Search,
  Award,
  Layers,
  Info
} from 'lucide-react';

export const ExamCalendarView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'ALL', label: 'All Exams' },
    { id: 'ENGINEERING', label: 'Engineering' },
    { id: 'MEDICAL', label: 'Medical & Dental' },
    { id: 'LATERAL_ENTRY', label: 'Lateral Entry (Diploma)' },
    { id: 'CENTRAL_UNIV', label: 'Central Universities' },
    { id: 'LAW', label: 'Law (5-Year)' },
    { id: 'ARCHITECTURE', label: 'Architecture' },
    { id: 'DESIGN', label: 'Design & Fashion' },
    { id: 'DEFENSE', label: 'Defense (NDA)' }
  ];

  const filteredExams = ENTRANCE_EXAMS_DATA.filter((exam: EntranceExam) => {
    const matchesSearch = exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.conductingAuthority.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.eligibilityDescription.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedCategory === 'ALL') return matchesSearch;
    return matchesSearch && exam.category === selectedCategory;
  });

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Statutory Examination Directory
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            National & State Entrance Examinations
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Verified testing architecture across National and State boards. Exam dates reflect verified typical annual notification windows [OFFICIAL]. Always verify live registration bulletins directly on designated statutory portals.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by exam name, conducting body, or eligibility..."
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-xs focus:outline-none focus:border-indigo-400"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Verification Standard Notice */}
      <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-2.5 text-xs text-blue-900">
        <Info className="w-4 h-4 text-blue-600 shrink-0" />
        <span>
          <strong>Data Verification Standard:</strong> Exam notifications and registration portals are maintained by statutory authorities (NTA, IITs, State Higher Education Councils). Hardcoded speculative dates are banned; typical annual windows are verified against official bulletins.
        </span>
      </div>

      {/* Grid of Exams */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExams.map((exam: EntranceExam) => (
          <div
            key={exam.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                    {exam.category}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                    {exam.level}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                  [{exam.evidenceLevel}]
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {exam.name}
              </h3>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Conducting Authority: <span className="text-slate-800 font-semibold">{exam.conductingAuthority}</span>
              </div>

              {/* Annual Window Badge */}
              <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Schedule Window:
                    </span>
                    <span className="text-[9px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-1.5 py-0.2 rounded">
                      {exam.currentYearStatus === 'CURRENT_VERIFIED' ? 'CURRENT VERIFIED' : 'TYPICAL ANNUAL WINDOW'}
                    </span>
                  </div>
                  <span className="font-bold text-indigo-900 text-xs">{exam.typicalMonthWindow}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">Frequency:</span>
                  <span className="font-medium text-slate-700 text-xs">{exam.examFrequency}</span>
                </div>
              </div>

              {/* Eligibility Description */}
              <div className="mt-3 text-xs text-slate-600 leading-relaxed bg-blue-50/40 p-3 rounded-xl border border-blue-100/60">
                <span className="font-bold text-slate-900 block mb-1">
                  Statutory Eligibility Rule:
                </span>
                {exam.eligibilityDescription}
              </div>

              {/* Eligible Streams */}
              <div className="mt-3 text-xs flex items-center gap-2">
                <span className="text-slate-400">Eligible Streams:</span>
                <div className="flex flex-wrap gap-1">
                  {exam.eligibleStreams.map((st, i) => (
                    <span key={i} className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded text-[11px]">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Portal Link */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">
                {exam.sourceCitation}
              </span>
              <a
                href={exam.officialPortal}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
              >
                Official Portal
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
