import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  Briefcase,
  Compass,
  Award,
  GraduationCap,
  Shuffle,
  ChevronRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import {
  STREAMS_DATA,
  ENTRANCE_EXAMS_DATA,
  DEGREE_COURSES_DATA,
  JOB_ROLES_DATA,
  CAREER_TRANSITIONS_DATA
} from '../data/pathwayData';
import { LanguageCode } from '../types/pathway';

interface UniversalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCareer: (jobId: string) => void;
  onSelectStream: (streamCode: string) => void;
  onNavigateTab: (tab: string) => void;
  language: LanguageCode;
}

export const UniversalSearchModal: React.FC<UniversalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCareer,
  onSelectStream,
  onNavigateTab,
  language
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Suggest top trending searches
      return {
        careers: JOB_ROLES_DATA.slice(0, 4),
        streams: STREAMS_DATA.slice(0, 3),
        exams: ENTRANCE_EXAMS_DATA.slice(0, 4),
        degrees: DEGREE_COURSES_DATA.slice(0, 3),
        transitions: CAREER_TRANSITIONS_DATA.slice(0, 2)
      };
    }

    return {
      careers: JOB_ROLES_DATA.filter(j => 
        j.title.toLowerCase().includes(q) ||
        j.industrySector.toLowerCase().includes(q) ||
        j.entryLevelSkills.some(s => s.toLowerCase().includes(q))
      ),
      streams: STREAMS_DATA.filter(s =>
        s.code.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.mandatorySubjects.some(sub => sub.toLowerCase().includes(q))
      ),
      exams: ENTRANCE_EXAMS_DATA.filter(e =>
        e.shortName.toLowerCase().includes(q) ||
        e.name.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.eligibilityDescription.toLowerCase().includes(q)
      ),
      degrees: DEGREE_COURSES_DATA.filter(d =>
        d.shortName.toLowerCase().includes(q) ||
        d.name.toLowerCase().includes(q) ||
        d.mandatoryPrerequisites.some(p => p.toLowerCase().includes(q)) ||
        d.skillsDeveloped.some(s => s.toLowerCase().includes(q))
      ),
      transitions: CAREER_TRANSITIONS_DATA.filter(t =>
        t.currentBackground.toLowerCase().includes(q) ||
        t.targetTransitionPath.toLowerCase().includes(q) ||
        t.requirementsBridging.toLowerCase().includes(q)
      )
    };
  }, [query]);

  if (!isOpen) return null;

  const totalResults = 
    searchResults.careers.length +
    searchResults.streams.length +
    searchResults.exams.length +
    searchResults.degrees.length +
    searchResults.transitions.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[88vh] animate-in zoom-in-95 duration-200 mt-4 sm:mt-10">
        
        {/* Search Header Input */}
        <div className="p-3.5 sm:p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search careers, streams (MPC, BiPC), exams (NEET, JEE), degrees..."
            className="w-full bg-transparent text-sm sm:text-base font-semibold text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-200"
            >
              Esc
            </button>
          )}
        </div>

        {/* Results Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 divide-y divide-slate-100">
          
          {/* Quick Info Bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
            <span>
              {query ? `Found ${totalResults} verified matches` : 'Trending Educational Queries:'}
            </span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              [GOVT GAZETTES GROUNDED]
            </span>
          </div>

          {/* 1. Target Careers Matches */}
          {searchResults.careers.length > 0 && (
            <div className="pt-3 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                Target Careers ({searchResults.careers.length})
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {searchResults.careers.map((job) => (
                  <button
                    type="button"
                    key={job.id}
                    onClick={() => {
                      onSelectCareer(job.id);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl bg-white hover:bg-indigo-50/70 border border-slate-200 text-left flex items-center justify-between transition-colors shadow-2xs group"
                  >
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 group-hover:text-indigo-700">
                        {job.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {job.industrySector} · Salary: <span className="font-semibold text-emerald-700">{job.salaryTiers.entryRange}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      Trace Roadmap →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2. Streams Matches */}
          {searchResults.streams.length > 0 && (
            <div className="pt-3 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-indigo-600" />
                Higher Secondary Streams & Diplomas ({searchResults.streams.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {searchResults.streams.map((stream) => (
                  <button
                    type="button"
                    key={stream.id}
                    onClick={() => {
                      onSelectStream(stream.code);
                      onNavigateTab('canvas');
                      onClose();
                    }}
                    className="p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-left flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{stream.code}</div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">{stream.name}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 3. Entrance Exams Matches */}
          {searchResults.exams.length > 0 && (
            <div className="pt-3 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Entrance Examinations ({searchResults.exams.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {searchResults.exams.map((exam) => (
                  <div
                    key={exam.id}
                    onClick={() => {
                      onNavigateTab('exams');
                      onClose();
                    }}
                    className="p-2.5 rounded-xl bg-white hover:bg-blue-50/50 border border-slate-200 text-left flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{exam.shortName}</div>
                      <div className="text-[10px] text-slate-500">{exam.conductingAuthority} · {exam.typicalMonthWindow}</div>
                    </div>
                    <span className="text-[9px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                      {exam.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Degree Courses Matches */}
          {searchResults.degrees.length > 0 && (
            <div className="pt-3 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Degree Programs ({searchResults.degrees.length})
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {searchResults.degrees.map((degree) => (
                  <div
                    key={degree.id}
                    onClick={() => {
                      onNavigateTab('degree_lookup');
                      onClose();
                    }}
                    className="p-2.5 rounded-xl bg-white hover:bg-emerald-50/50 border border-slate-200 text-left flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{degree.name}</div>
                      <div className="text-[10px] text-slate-500">Duration: {degree.durationLabel} · Streams: {degree.streamsAllowed.join(', ')}</div>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                      Reverse Lookup →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Career Transitions / Pivots */}
          {searchResults.transitions.length > 0 && (
            <div className="pt-3 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                <Shuffle className="w-3.5 h-3.5" />
                Career Pivots & "What If I Change My Mind?" ({searchResults.transitions.length})
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {searchResults.transitions.map((trans) => (
                  <div
                    key={trans.id}
                    onClick={() => {
                      onNavigateTab('transitions');
                      onClose();
                    }}
                    className="p-2.5 rounded-xl bg-white hover:bg-purple-50/50 border border-slate-200 text-left flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {trans.currentBackground} → {trans.targetTransitionPath}
                      </div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">{trans.requirementsBridging}</div>
                    </div>
                    <span className="text-[9px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">
                      {trans.feasibilityLevel}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {totalResults === 0 && (
            <div className="py-8 text-center space-y-2">
              <p className="text-sm font-bold text-slate-700">No exact matches found for "{query}"</p>
              <p className="text-xs text-slate-500">Try searching for keywords like MPC, NEET, Software, B.Com, or ECET.</p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Deterministic Rule-Backed Knowledge Graph</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
