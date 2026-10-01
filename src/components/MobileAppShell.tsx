import React from 'react';
import {
  Compass,
  Bookmark,
  Users,
  Layers,
  Scale,
  Shuffle,
  Briefcase,
  Sparkles,
  Search,
  Globe
} from 'lucide-react';
import { UserProfile, LanguageCode } from '../types/pathway';
import { getTranslation } from '../i18n/translations';

interface MobileAppShellProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  profile: UserProfile;
  setProfile: (profile: UserProfile) => void;
  onOpenAiCounselor: () => void;
  onOpenSavedDrawer: () => void;
  onOpenSearch?: () => void;
  savedCount: number;
  onSelectPersona: (persona: 'RAHUL_10TH' | 'SNEHA_BIPC' | 'KIRAN_DIPLOMA' | 'POOJA_MEC' | 'ARJUN_HEC') => void;
  onLanguageChange?: (lang: LanguageCode) => void;
  children: React.ReactNode;
}

export const MobileAppShell: React.FC<MobileAppShellProps> = ({
  activeTab,
  setActiveTab,
  profile,
  setProfile,
  onOpenAiCounselor,
  onOpenSavedDrawer,
  onOpenSearch,
  savedCount,
  onSelectPersona,
  onLanguageChange,
  children
}) => {
  const t = getTranslation(profile.language);

  const handleLang = (lang: LanguageCode) => {
    if (onLanguageChange) {
      onLanguageChange(lang);
    } else {
      setProfile({ ...profile, language: lang });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-900 flex justify-center selection:bg-indigo-500 selection:text-white antialiased">
      {/* Real Mobile App Viewport Container */}
      <div className="w-full max-w-md sm:max-w-lg min-h-screen bg-slate-50 flex flex-col shadow-2xl border-x border-slate-200/80 relative">
        
        {/* Real Mobile Top App Bar */}
        <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-3.5 py-2.5 flex items-center justify-between sticky top-0 z-40 shadow-xs">
          
          {/* Brand Logo & Subtitle */}
          <div className="flex items-center gap-2">
            <div 
              onClick={() => setActiveTab('canvas')}
              className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-sm cursor-pointer active:scale-95 transition-transform"
            >
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-black tracking-tight text-slate-950">Pathway</span>
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-1.5 py-0.2 rounded-md">
                  {profile.selectedStream || 'MPC'}
                </span>
              </div>
              <p className="text-[10px] font-semibold text-slate-500 truncate max-w-[170px] sm:max-w-[200px]">
                {t.app_subtitle}
              </p>
            </div>
          </div>

          {/* Real Working Controls */}
          <div className="flex items-center gap-1.5">
            {/* Functional Language Switcher */}
            <div 
              className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/90 text-[10px] font-extrabold shadow-2xs"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => handleLang('en')}
                className={`px-1.5 py-1 rounded transition-colors ${
                  profile.language === 'en'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 active:bg-slate-200'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleLang('te')}
                className={`px-1.5 py-1 rounded transition-colors ${
                  profile.language === 'te'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 active:bg-slate-200'
                }`}
                title="తెలుగు (Telugu)"
              >
                తెలుగు
              </button>
              <button
                type="button"
                onClick={() => handleLang('hi')}
                className={`px-1.5 py-1 rounded transition-colors ${
                  profile.language === 'hi'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 active:bg-slate-200'
                }`}
                title="हिंदी (Hindi)"
              >
                हिंदी
              </button>
            </div>

            {/* Universal Search Trigger */}
            {onOpenSearch && (
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-1.5 text-slate-600 hover:text-indigo-600 rounded-xl hover:bg-slate-100 active:scale-95 transition-transform"
                title="Search careers, exams, streams"
                aria-label="Universal Search"
              >
                <Search className="w-4 h-4 text-indigo-600" />
              </button>
            )}

            {/* Parent Mode Toggle */}
            <button
              type="button"
              onClick={() => setProfile({ ...profile, parentMode: !profile.parentMode })}
              className={`p-1.5 rounded-xl border transition-all flex items-center gap-1 text-[11px] font-bold ${
                profile.parentMode
                  ? 'bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-400/30'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 active:scale-95'
              }`}
              title={profile.parentMode ? t.parent_mode_on : t.parent_mode_off}
              aria-label={t.parent_mode}
            >
              <Users className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[10px] hidden xs:inline">{profile.parentMode ? 'ON' : t.parent_mode}</span>
            </button>

            {/* Saved Bookmarks Trigger */}
            <button
              type="button"
              onClick={onOpenSavedDrawer}
              className="p-1.5 text-slate-600 hover:text-slate-900 relative rounded-xl hover:bg-slate-100 active:scale-95 transition-transform"
              title={t.saved_steps}
              aria-label={t.saved_steps}
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 text-white rounded-full text-[9px] font-bold flex items-center justify-center animate-pulse">
                  {savedCount}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* Scrollable Mobile App Body */}
        <main className="flex-1 overflow-y-auto pb-20">
          {children}
        </main>

        {/* Real Native Mobile Bottom Tab Bar (5 Primary Thumb Tabs) */}
        <nav 
          aria-label="Mobile application navigation" 
          className="fixed bottom-0 w-full max-w-md sm:max-w-lg bg-white/95 backdrop-blur-md border-t border-slate-200/90 grid grid-cols-5 items-center h-16 px-1 z-40 select-none shadow-lg"
        >
          <button
            type="button"
            onClick={() => setActiveTab('canvas')}
            className={`flex flex-col items-center justify-center py-1 transition-all min-h-[48px] active:scale-95 ${
              activeTab === 'canvas' ? 'text-indigo-600 font-extrabold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Compass className={`w-5 h-5 mb-0.5 ${activeTab === 'canvas' ? 'stroke-[2.5]' : ''}`} />
            <span className="text-[10px] tracking-tight">{t.nav_roadmap}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('forward')}
            className={`flex flex-col items-center justify-center py-1 transition-all min-h-[48px] active:scale-95 ${
              activeTab === 'forward' ? 'text-indigo-600 font-extrabold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className={`w-5 h-5 mb-0.5 ${activeTab === 'forward' ? 'stroke-[2.5]' : ''}`} />
            <span className="text-[10px] tracking-tight">{t.nav_wizard}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('backward')}
            className={`flex flex-col items-center justify-center py-1 transition-all min-h-[48px] active:scale-95 ${
              activeTab === 'backward' ? 'text-indigo-600 font-extrabold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Briefcase className={`w-5 h-5 mb-0.5 ${activeTab === 'backward' ? 'stroke-[2.5]' : ''}`} />
            <span className="text-[10px] tracking-tight">{t.nav_careers}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('compare')}
            className={`flex flex-col items-center justify-center py-1 transition-all min-h-[48px] active:scale-95 ${
              activeTab === 'compare' ? 'text-indigo-600 font-extrabold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Scale className={`w-5 h-5 mb-0.5 ${activeTab === 'compare' ? 'stroke-[2.5]' : ''}`} />
            <span className="text-[10px] tracking-tight">{t.nav_compare}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('more')}
            className={`flex flex-col items-center justify-center py-1 transition-all min-h-[48px] active:scale-95 ${
              activeTab === 'more' || activeTab === 'transitions' || activeTab === 'exams' || activeTab === 'degree_lookup'
                ? 'text-indigo-600 font-extrabold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Shuffle className={`w-5 h-5 mb-0.5 ${activeTab === 'more' || activeTab === 'transitions' || activeTab === 'exams' || activeTab === 'degree_lookup' ? 'stroke-[2.5]' : ''}`} />
            <span className="text-[10px] tracking-tight">{t.nav_more}</span>
          </button>
        </nav>

      </div>
    </div>
  );
};
