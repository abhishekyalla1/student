import React, { useState } from 'react';
import { CAREER_TRANSITIONS_DATA } from '../data/pathwayData';
import { CareerTransition } from '../types/pathway';
import {
  Shuffle,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Search
} from 'lucide-react';

export const CareerTransitionMatrix: React.FC = () => {
  const [filterFeasibility, setFilterFeasibility] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTransitions = CAREER_TRANSITIONS_DATA.filter((tr: CareerTransition) => {
    const matchesSearch = tr.currentBackground.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tr.targetTransitionPath.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tr.requirementsBridging.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterFeasibility === 'ALL') return matchesSearch;
    return matchesSearch && tr.feasibilityLevel === filterFeasibility;
  });

  const getFeasibilityBadge = (level: string) => {
    switch (level) {
      case 'Direct / High':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Direct / High Feasibility
          </span>
        );
      case 'Moderate':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">
            <AlertCircle className="w-3.5 h-3.5 text-sky-600" />
            Moderate (Bridge Required)
          </span>
        );
      case 'High (Alternate)':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">
            <Shuffle className="w-3.5 h-3.5 text-purple-600" />
            High Alternate (Self-Taught / Portfolio)
          </span>
        );
      case 'Not Eligible / Restricted':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-red-800 bg-red-100 px-2 py-0.5 rounded">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
            Not Eligible / Statutorily Restricted
          </span>
        );
      default:
        return (
          <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
            {level}
          </span>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-3">
            <Shuffle className="w-3.5 h-3.5" />
            Career Transition & Flexibility Matrix
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            "What If I Change My Mind?"
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Changing directions after Class 10, Class 12, or an undergraduate degree is common. This matrix transparently identifies which pivots are legally permissible under statutory council rules (AICTE, UGC, NMC), which require open schooling bridge exams (NIOS), and which depend on self-directed skills.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search current background or target path..."
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-xs focus:outline-none focus:border-indigo-400"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {['ALL', 'Direct / High', 'Moderate', 'High (Alternate)', 'Not Eligible / Restricted'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilterFeasibility(lvl)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  filterFeasibility === lvl
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {lvl === 'ALL' ? 'All Feasibilities' : lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Transition Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTransitions.map((item: CareerTransition) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header: From -> To */}
              <div className="flex items-center justify-between gap-2 mb-2">
                {getFeasibilityBadge(item.feasibilityLevel)}
                <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  [{item.evidenceLevel}]
                </span>
              </div>

              <div className="mt-2 space-y-1">
                <div className="text-xs text-slate-500">
                  Current Background: <span className="font-bold text-slate-800">{item.currentBackground}</span>
                </div>
                <div className="text-sm font-bold text-indigo-900 flex items-center gap-1.5">
                  <span>Target Path:</span>
                  <span className="text-slate-900">{item.targetTransitionPath}</span>
                </div>
              </div>

              {/* Requirements & Bridging Needed */}
              <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block mb-1">
                  Required Bridging Strategy:
                </span>
                <p className="leading-relaxed text-slate-600">
                  {item.requirementsBridging}
                </p>
              </div>

              {/* Statutory Explanation */}
              <div className="mt-2.5 text-[11px] text-slate-500 italic">
                Statutory Rule: {item.statutoryRuleExplanation}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono flex items-center justify-between">
              <span>Source: {item.sourceCitation}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
