import React from 'react';
import {
  Shuffle,
  Calendar,
  GraduationCap,
  Sparkles,
  Bookmark,
  Users,
  Globe,
  ChevronRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { LanguageCode } from '../types/pathway';
import { getTranslation } from '../i18n/translations';

interface MobileMoreViewProps {
  onNavigate: (tab: string) => void;
  onOpenAiCounselor: () => void;
  onOpenSavedDrawer: () => void;
  parentMode: boolean;
  onToggleParentMode: (val: boolean) => void;
  language: LanguageCode;
  onSetLanguage: (lang: LanguageCode) => void;
  savedCount: number;
  onSelectPersona?: (persona: 'RAHUL_10TH' | 'SNEHA_BIPC' | 'KIRAN_DIPLOMA' | 'POOJA_MEC' | 'ARJUN_HEC') => void;
}

export const MobileMoreView: React.FC<MobileMoreViewProps> = ({
  onNavigate,
  onOpenAiCounselor,
  onOpenSavedDrawer,
  parentMode,
  onToggleParentMode,
  language,
  onSetLanguage,
  savedCount,
  onSelectPersona
}) => {
  const t = getTranslation(language);

  return (
    <div className="p-3.5 sm:p-4 space-y-4 pb-6">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-2xl p-4 text-white shadow-md">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 bg-white/10 px-2 py-0.5 rounded-full">
            Verified Indian Student Pathways
          </span>
          <span className="text-[10px] text-emerald-300 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            AICTE / UGC / NMC
          </span>
        </div>
        <h2 className="text-base sm:text-lg font-extrabold leading-snug">
          {t.more_title}
        </h2>
        <p className="text-xs text-indigo-100/90 mt-1 leading-relaxed">
          {t.more_subtitle}
        </p>
      </div>

      {/* Demo Personas for Live Presentation */}
      {onSelectPersona && (
        <div className="bg-gradient-to-tr from-amber-500/10 via-indigo-500/10 to-blue-500/10 rounded-2xl border border-indigo-200/80 p-3.5 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-indigo-600" />
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                {t.demo_personas_title}
              </h3>
            </div>
            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
              Demo Presets
            </span>
          </div>
          <p className="text-[11px] text-slate-600">
            {t.demo_personas_sub}
          </p>

          <div className="grid grid-cols-1 gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => onSelectPersona('RAHUL_10TH')}
              className="w-full px-3 py-2 bg-white hover:bg-indigo-50 border border-slate-200 rounded-xl text-left text-xs font-bold text-slate-800 flex items-center justify-between transition-colors shadow-2xs active:scale-[0.99]"
            >
              <span>{t.persona_rahul}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => onSelectPersona('SNEHA_BIPC')}
              className="w-full px-3 py-2 bg-white hover:bg-indigo-50 border border-slate-200 rounded-xl text-left text-xs font-bold text-slate-800 flex items-center justify-between transition-colors shadow-2xs active:scale-[0.99]"
            >
              <span>{t.persona_sneha}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => onSelectPersona('KIRAN_DIPLOMA')}
              className="w-full px-3 py-2 bg-white hover:bg-indigo-50 border border-slate-200 rounded-xl text-left text-xs font-bold text-slate-800 flex items-center justify-between transition-colors shadow-2xs active:scale-[0.99]"
            >
              <span>{t.persona_kiran}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => onSelectPersona('POOJA_MEC')}
              className="w-full px-3 py-2 bg-white hover:bg-indigo-50 border border-slate-200 rounded-xl text-left text-xs font-bold text-slate-800 flex items-center justify-between transition-colors shadow-2xs active:scale-[0.99]"
            >
              <span>{t.persona_pooja}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => onSelectPersona('ARJUN_HEC')}
              className="w-full px-3 py-2 bg-white hover:bg-indigo-50 border border-slate-200 rounded-xl text-left text-xs font-bold text-slate-800 flex items-center justify-between transition-colors shadow-2xs active:scale-[0.99]"
            >
              <span>{t.persona_arjun}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>
      )}

      {/* Primary Feature Menu Items */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs divide-y divide-slate-100 overflow-hidden">
        
        {/* Item 1: Career Switch Matrix */}
        <button
          type="button"
          onClick={() => onNavigate('transitions')}
          className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-50 active:bg-slate-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-100">
              <Shuffle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">{t.more_switch_matrix}</div>
              <div className="text-[11px] text-slate-500">{t.more_switch_matrix_sub}</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        {/* Item 2: Statutory Exam Calendar */}
        <button
          type="button"
          onClick={() => onNavigate('exams')}
          className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-50 active:bg-slate-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">{t.more_exams}</div>
              <div className="text-[11px] text-slate-500">{t.more_exams_sub}</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        {/* Item 3: Degree Reverse Lookup */}
        <button
          type="button"
          onClick={() => onNavigate('degree_lookup')}
          className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-50 active:bg-slate-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">{t.more_degree_lookup}</div>
              <div className="text-[11px] text-slate-500">{t.more_degree_lookup_sub}</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        {/* Item 4: AI Counselor */}
        <button
          type="button"
          onClick={onOpenAiCounselor}
          className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-50 active:bg-slate-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 border border-indigo-100">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">{t.more_ai_counselor}</div>
              <div className="text-[11px] text-slate-500">{t.more_ai_counselor_sub}</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

      </div>

      {/* Secondary Settings & Preferences */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-3.5 space-y-3">
        <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-400">
          {t.more_preferences}
        </h3>

        {/* Parent Mode Toggle Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4 text-amber-600" />
            <div>
              <div className="text-xs font-bold text-slate-900">{t.parent_mode}</div>
              <div className="text-[10px] text-slate-500">Timeline in years & financial budget tiers</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onToggleParentMode(!parentMode)}
            className={`w-11 h-6 rounded-full transition-colors relative ${
              parentMode ? 'bg-amber-600' : 'bg-slate-200'
            }`}
          >
            <span
              className={`block w-4 h-4 rounded-full bg-white shadow-xs transform transition-transform ${
                parentMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Language Selection Row */}
        <div className="flex items-center justify-between pt-2.5 border-t border-slate-100">
          <div className="flex items-center gap-2.5">
            <Globe className="w-4 h-4 text-indigo-600" />
            <div>
              <div className="text-xs font-bold text-slate-900">{t.more_language}</div>
              <div className="text-[10px] text-slate-500">{t.more_language_sub}</div>
            </div>
          </div>
          <select
            value={language}
            onChange={(e) => onSetLanguage(e.target.value as any)}
            className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="te">తెలుగు (Telugu)</option>
            <option value="hi">हिंदी (Hindi)</option>
            <option value="ta">தமிழ் (Tamil)</option>
          </select>
        </div>

        {/* Saved Bookmarks */}
        <div className="flex items-center justify-between pt-2.5 border-t border-slate-100">
          <div className="flex items-center gap-2.5">
            <Bookmark className="w-4 h-4 text-slate-600" />
            <div>
              <div className="text-xs font-bold text-slate-900">{t.more_bookmarks}</div>
              <div className="text-[10px] text-slate-500">{t.more_bookmarks_sub}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenSavedDrawer}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-700 active:scale-95"
          >
            {t.more_view_btn} ({savedCount})
          </button>
        </div>

      </div>

    </div>
  );
};
