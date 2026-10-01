import React, { useState } from 'react';
import { PATH_COMPARISONS_DATA } from '../data/pathwayData';
import {
  Scale,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Award,
  ShieldCheck,
  CreditCard,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const PathComparisonView: React.FC = () => {
  const [selectedPairKey, setSelectedPairKey] = useState<string>('btech_vs_bca');

  const comparison = PATH_COMPARISONS_DATA[selectedPairKey] || PATH_COMPARISONS_DATA['btech_vs_bca'];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            Path Comparison Engine
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Side-by-Side Pathway Evaluation
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Compare two alternative educational pathways objectively across critical criteria: time to market, exam intensity, financial investment, statutory prerequisites, and long-term flexibility.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedPairKey('btech_vs_bca')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedPairKey === 'btech_vs_bca'
                ? 'bg-white text-indigo-950 shadow-md'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            B.Tech CSE vs BCA + MCA / Bootcamp
          </button>
          <button
            onClick={() => setSelectedPairKey('mbbs_vs_bpharm')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedPairKey === 'mbbs_vs_bpharm'
                ? 'bg-white text-indigo-950 shadow-md'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            MBBS vs B.Pharm + Clinical Research
          </button>
          <button
            onClick={() => setSelectedPairKey('intermediate_mpc_vs_polytechnic')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedPairKey === 'intermediate_mpc_vs_polytechnic'
                ? 'bg-white text-indigo-950 shadow-md'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            Intermediate MPC vs 3-Yr Polytechnic (ECET)
          </button>
        </div>
      </div>

      {/* Comparative Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        
        {/* Table Header: Path A vs Path B */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200 bg-slate-50/70">
          <div className="p-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
              Path Option 1
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-2">
              {comparison.pathA.title}
            </h2>
            <div className="text-xs text-slate-500 mt-1">
              Stream Group: <span className="font-semibold text-slate-700">{comparison.pathA.stream}</span>
            </div>
          </div>

          <div className="p-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
              Path Option 2
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-2">
              {comparison.pathB.title}
            </h2>
            <div className="text-xs text-slate-500 mt-1">
              Stream Group: <span className="font-semibold text-slate-700">{comparison.pathB.stream}</span>
            </div>
          </div>
        </div>

        {/* Row 1: Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200 text-xs text-slate-700">
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <Clock className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Total Academic Duration:</span>
              <p>{comparison.pathA.duration}</p>
            </div>
          </div>
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <Clock className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Total Academic Duration:</span>
              <p>{comparison.pathB.duration}</p>
            </div>
          </div>
        </div>

        {/* Row 2: Entrance Exams */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200 text-xs text-slate-700 bg-slate-50/40">
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <Award className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Entrance Exam & Intensity:</span>
              <p>{comparison.pathA.examDifficulty}</p>
            </div>
          </div>
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <Award className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Entrance Exam & Intensity:</span>
              <p>{comparison.pathB.examDifficulty}</p>
            </div>
          </div>
        </div>

        {/* Row 3: Statutory Prerequisites */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200 text-xs text-slate-700">
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Mandatory Prerequisites:</span>
              <p>{comparison.pathA.prerequisites}</p>
            </div>
          </div>
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Mandatory Prerequisites:</span>
              <p>{comparison.pathB.prerequisites}</p>
            </div>
          </div>
        </div>

        {/* Row 4: Financial Cost Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200 text-xs text-slate-700 bg-slate-50/40">
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <CreditCard className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Estimated Financial Range:</span>
              <p>{comparison.pathA.costCategory}</p>
            </div>
          </div>
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <CreditCard className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Estimated Financial Range:</span>
              <p>{comparison.pathB.costCategory}</p>
            </div>
          </div>
        </div>

        {/* Row 5: Primary Industry Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200 text-xs text-slate-700">
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <Briefcase className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Primary Entry Job Role:</span>
              <p className="font-semibold text-slate-900">{comparison.pathA.primaryEntryRole}</p>
            </div>
          </div>
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <Briefcase className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Primary Entry Job Role:</span>
              <p className="font-semibold text-slate-900">{comparison.pathB.primaryEntryRole}</p>
            </div>
          </div>
        </div>

        {/* Row 6: Higher Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200 text-xs text-slate-700 bg-slate-50/40">
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Higher Studies Pathways:</span>
              <p>{comparison.pathA.higherStudies}</p>
            </div>
          </div>
          <div className="p-4 sm:p-5 flex items-start gap-3">
            <GraduationCap className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Higher Studies Pathways:</span>
              <p>{comparison.pathB.higherStudies}</p>
            </div>
          </div>
        </div>

        {/* Row 7: Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 p-6 gap-6 text-xs">
          {/* Path A pros/risks */}
          <div className="space-y-4">
            <div>
              <span className="font-bold text-emerald-800 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Key Advantages:
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                {comparison.pathA.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-bold text-red-700 flex items-center gap-1.5 mb-2">
                <AlertTriangle className="w-3.5 h-3.5" />
                Considerations & Risks:
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                {comparison.pathA.risks.map((risk, i) => (
                  <li key={i}>{risk}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Path B pros/risks */}
          <div className="space-y-4">
            <div>
              <span className="font-bold text-emerald-800 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Key Advantages:
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                {comparison.pathB.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-bold text-red-700 flex items-center gap-1.5 mb-2">
                <AlertTriangle className="w-3.5 h-3.5" />
                Considerations & Risks:
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                {comparison.pathB.risks.map((risk, i) => (
                  <li key={i}>{risk}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Verdict Bar */}
        <div className="p-6 bg-indigo-50/70 border-t border-indigo-100">
          <div className="flex items-start gap-3">
            <Scale className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-indigo-950">Neutral Educational Verdict</h4>
              <p className="text-xs text-indigo-900 mt-1 leading-relaxed">
                {comparison.verdict}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
