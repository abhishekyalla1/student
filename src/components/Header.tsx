import React from 'react';
import { Compass, Users, Sparkles, Bookmark, Globe } from 'lucide-react';
import { LanguageCode } from '../types/pathway';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  parentMode: boolean;
  setParentMode: (val: boolean) => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  onOpenAiCounselor: () => void;
  savedCount: number;
  onOpenSavedDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  parentMode,
  setParentMode,
  language,
  setLanguage,
  onOpenAiCounselor,
  savedCount,
  onOpenSavedDrawer
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('canvas')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-sm group-hover:bg-indigo-700 transition-colors">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                Pathway
              </span>
            </button>
            <span className="hidden sm:inline-block text-xs text-slate-400 font-medium border-l border-slate-200 pl-3">
              Indian Student Career Roadmap
            </span>
          </div>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => setActiveTab('canvas')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'canvas'
                  ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Roadmap Canvas
            </button>
            <button
              onClick={() => setActiveTab('forward')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'forward'
                  ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Forward Explorer
            </button>
            <button
              onClick={() => setActiveTab('backward')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'backward'
                  ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Target Career Search
            </button>
            <button
              onClick={() => setActiveTab('compare')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'compare'
                  ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Compare Paths
            </button>
            <button
              onClick={() => setActiveTab('degree_lookup')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'degree_lookup'
                  ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Degree Lookup
            </button>
            <button
              onClick={() => setActiveTab('transitions')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'transitions'
                  ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Switch Matrix
            </button>
            <button
              onClick={() => setActiveTab('exams')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'exams'
                  ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Exams
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Parent Mode toggle */}
            <button
              onClick={() => setParentMode(!parentMode)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                parentMode
                  ? 'bg-amber-50 text-amber-900 border-amber-300 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
              title="Parent Mode: Emphasizes overall timeline in years, entrance exam intensity, and financial commitment brackets"
            >
              <Users className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden sm:inline">Parent Mode:</span>
              <span className="font-semibold">{parentMode ? 'ON' : 'OFF'}</span>
            </button>

            {/* Language Selector */}
            <div className="relative inline-flex items-center">
              <Globe className="w-3.5 h-3.5 text-slate-500 absolute left-2 pointer-events-none" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'hi' | 'te')}
                className="pl-7 pr-2 py-1 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-transparent focus:outline-none focus:border-indigo-400 cursor-pointer transition-colors"
                aria-label="Select Language"
              >
                <option value="en">English</option>
                <option value="te">తెలుగు</option>
                <option value="hi">हिंदी</option>
              </select>
            </div>

            {/* Saved Roadmaps trigger */}
            <button
              onClick={onOpenSavedDrawer}
              className="p-1.5 text-slate-600 hover:text-slate-900 relative rounded-lg hover:bg-slate-100 transition-colors"
              title="Saved Roadmaps & Bookmarked Steps"
              aria-label="Saved Roadmaps"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Grounded AI Counselor Button */}
            <button
              onClick={onOpenAiCounselor}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
              <span>Ask AI Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation tab strip */}
      <div className="md:hidden flex items-center overflow-x-auto border-t border-slate-100 px-4 py-2 gap-2 text-xs scrollbar-none bg-slate-50">
        <button
          onClick={() => setActiveTab('canvas')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'canvas' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-white border border-slate-200'
          }`}
        >
          Canvas
        </button>
        <button
          onClick={() => setActiveTab('forward')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'forward' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-white border border-slate-200'
          }`}
        >
          Forward
        </button>
        <button
          onClick={() => setActiveTab('backward')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'backward' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-white border border-slate-200'
          }`}
        >
          Target Job
        </button>
        <button
          onClick={() => setActiveTab('compare')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'compare' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-white border border-slate-200'
          }`}
        >
          Compare
        </button>
        <button
          onClick={() => setActiveTab('degree_lookup')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'degree_lookup' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-white border border-slate-200'
          }`}
        >
          Degree Lookup
        </button>
        <button
          onClick={() => setActiveTab('transitions')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'transitions' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-white border border-slate-200'
          }`}
        >
          Switch Matrix
        </button>
        <button
          onClick={() => setActiveTab('exams')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'exams' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-white border border-slate-200'
          }`}
        >
          Exams
        </button>
      </div>
    </header>
  );
};
