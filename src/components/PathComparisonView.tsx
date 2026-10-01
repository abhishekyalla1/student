import React, { useState } from 'react';
import { PATH_COMPARISONS_DATA } from '../data/pathwayData';
import { LanguageCode } from '../types/pathway';
import { getTranslation } from '../i18n/translations';
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

interface PathComparisonViewProps {
  language?: LanguageCode;
}

export const PathComparisonView: React.FC<PathComparisonViewProps> = ({
  language = 'en'
}) => {
  const t = getTranslation(language);
  const [selectedPairKey, setSelectedPairKey] = useState<string>('btech_vs_bca');

  const comparison = PATH_COMPARISONS_DATA[selectedPairKey] || PATH_COMPARISONS_DATA['btech_vs_bca'];

  return (
    <div className="w-full space-y-4 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-4 sm:p-5 text-white shadow-md">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-2">
          <Scale className="w-3.5 h-3.5" />
          <span>Path Comparison Engine</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
          {t.compare_title}
        </h1>
        <p className="mt-1 text-xs text-slate-300 leading-relaxed">
          {t.compare_subtitle}
        </p>

        {/* Preset Selector */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedPairKey('btech_vs_bca')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedPairKey === 'btech_vs_bca'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            {t.compare_preset_btech_vs_bca}
          </button>
          <button
            type="button"
            onClick={() => setSelectedPairKey('mbbs_vs_bpharm')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedPairKey === 'mbbs_vs_bpharm'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            {t.compare_preset_mbbs_vs_bpharm}
          </button>
          <button
            type="button"
            onClick={() => setSelectedPairKey('intermediate_mpc_vs_polytechnic')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedPairKey === 'intermediate_mpc_vs_polytechnic'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            {t.compare_preset_mpc_vs_poly}
          </button>
        </div>
      </div>

      {/* Comparative Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        
        {/* Table Header: Path A vs Path B */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-b border-slate-200 bg-slate-50/70">
          <div className="p-4">
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
              Plan A Route
            </span>
            <h2 className="text-base font-extrabold text-slate-900 mt-1.5 leading-snug">
              {comparison.pathA.title}
            </h2>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Stream Group: <span className="font-bold text-slate-700">{comparison.pathA.stream}</span>
            </div>
          </div>

          <div className="p-4">
            <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
              Plan B Alternative
            </span>
            <h2 className="text-base font-extrabold text-slate-900 mt-1.5 leading-snug">
              {comparison.pathB.title}
            </h2>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Stream Group: <span className="font-bold text-slate-700">{comparison.pathB.stream}</span>
            </div>
          </div>
        </div>

        {/* Row 1: Duration & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-b border-slate-100 p-4 gap-4 sm:gap-0">
          <div className="sm:pr-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              <span>{t.duration_label}</span>
            </div>
            <div className="text-sm font-extrabold text-slate-900">{comparison.pathA.duration}</div>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{comparison.pathA.prerequisites}</p>
          </div>
          <div className="sm:pl-4 pt-3 sm:pt-0">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
              <Clock className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.duration_label}</span>
            </div>
            <div className="text-sm font-extrabold text-slate-900">{comparison.pathB.duration}</div>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{comparison.pathB.prerequisites}</p>
          </div>
        </div>

        {/* Row 2: Financial Investment & Risk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-b border-slate-100 p-4 gap-4 sm:gap-0 bg-slate-50/40">
          <div className="sm:pr-4">
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="flex items-center gap-1.5 text-slate-500">
                <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.cost_tier_label}</span>
              </span>
              <span className="text-slate-900 font-extrabold">{comparison.pathA.costCategory}</span>
            </div>
            <div className="text-[11px] text-slate-600 flex items-center justify-between mt-1">
              <span>{t.risk_level_label}:</span>
              <span className="font-extrabold text-amber-700">{comparison.pathA.examDifficulty}</span>
            </div>
          </div>
          <div className="sm:pl-4 pt-3 sm:pt-0">
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="flex items-center gap-1.5 text-slate-500">
                <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.cost_tier_label}</span>
              </span>
              <span className="text-slate-900 font-extrabold">{comparison.pathB.costCategory}</span>
            </div>
            <div className="text-[11px] text-slate-600 flex items-center justify-between mt-1">
              <span>{t.risk_level_label}:</span>
              <span className="font-extrabold text-indigo-700">{comparison.pathB.examDifficulty}</span>
            </div>
          </div>
        </div>

        {/* Row 3: Pros & Advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-b border-slate-100 p-4 gap-4 sm:gap-0">
          <div className="sm:pr-4">
            <span className="font-extrabold text-emerald-800 text-xs flex items-center gap-1.5 mb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              {t.pros_label}
            </span>
            <ul className="space-y-1 text-[11px] text-slate-600 list-disc list-inside">
              {comparison.pathA.advantages.map((adv, i) => (
                <li key={i} className="leading-relaxed">{adv}</li>
              ))}
            </ul>
          </div>
          <div className="sm:pl-4 pt-3 sm:pt-0">
            <span className="font-extrabold text-purple-800 text-xs flex items-center gap-1.5 mb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              {t.pros_label}
            </span>
            <ul className="space-y-1 text-[11px] text-slate-600 list-disc list-inside">
              {comparison.pathB.advantages.map((adv, i) => (
                <li key={i} className="leading-relaxed">{adv}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 4: Bottlenecks & Reality Checks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 p-4 gap-4 sm:gap-0 bg-amber-50/30">
          <div className="sm:pr-4">
            <span className="font-extrabold text-amber-900 text-xs flex items-center gap-1.5 mb-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              {t.cons_label}
            </span>
            <ul className="space-y-1 text-[11px] text-slate-700 list-disc list-inside">
              {comparison.pathA.risks.map((bot, i) => (
                <li key={i} className="leading-relaxed">{bot}</li>
              ))}
            </ul>
          </div>
          <div className="sm:pl-4 pt-3 sm:pt-0">
            <span className="font-extrabold text-amber-900 text-xs flex items-center gap-1.5 mb-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              {t.cons_label}
            </span>
            <ul className="space-y-1 text-[11px] text-slate-700 list-disc list-inside">
              {comparison.pathB.risks.map((bot, i) => (
                <li key={i} className="leading-relaxed">{bot}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
