import React from 'react';
import {
  UserProfile,
  BoardType,
  LanguageCode
} from '../types/pathway';
import { STREAMS_DATA } from '../data/pathwayData';
import { getTranslation } from '../i18n/translations';
import {
  Compass,
  ArrowRight,
  Info,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface ForwardPathFinderProps {
  profile: UserProfile;
  setProfile: (profile: UserProfile) => void;
  onGenerateRoadmap: () => void;
  language?: LanguageCode;
}

export const ForwardPathFinder: React.FC<ForwardPathFinderProps> = ({
  profile,
  setProfile,
  onGenerateRoadmap,
  language = 'en'
}) => {
  const t = getTranslation(language);
  const currentStreamInfo = STREAMS_DATA.find(s => s.code === profile.selectedStream) || STREAMS_DATA[0];

  const interestOptions = [
    { id: 'tech', label: t.interests_tech },
    { id: 'medical', label: t.interests_medical },
    { id: 'finance', label: t.interests_finance },
    { id: 'law', label: t.interests_law },
    { id: 'design', label: t.interests_design },
    { id: 'civil_services', label: t.interests_govt },
    { id: 'core_engg', label: t.interests_core }
  ];

  const stageOptions = [
    { id: 'CLASS_10', label: t.stage_class_10, sub: 'SSC / CBSE / ICSE' },
    { id: 'CLASS_11_12', label: t.stage_inter, sub: 'Intermediate / Jr College' },
    { id: 'DIPLOMA_3YR', label: t.stage_diploma, sub: 'Polytechnic Student' },
    { id: 'ITI', label: 'ITI Trades', sub: 'Vocational Student' },
    { id: 'UG_DEGREE', label: t.stage_ug, sub: 'College Degree Student' }
  ];

  const handleInterestToggle = (id: string) => {
    if (profile.interests.includes(id)) {
      setProfile({
        ...profile,
        interests: profile.interests.filter(i => i !== id)
      });
    } else {
      setProfile({
        ...profile,
        interests: [...profile.interests, id]
      });
    }
  };

  return (
    <div className="w-full space-y-5 pb-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 rounded-2xl p-4 sm:p-6 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.wizard_title}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
            {t.wizard_subtitle}
          </h1>
          <p className="mt-1.5 text-xs text-indigo-100/90 leading-relaxed">
            {t.wizard_desc}
          </p>
        </div>
      </div>

      {/* Configuration Form Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs divide-y divide-slate-100">
        
        {/* Step 1: Current Education Stage */}
        <div className="p-4 sm:p-5">
          <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2.5">
            {t.step1_title}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {stageOptions.map((stage) => {
              const isActive = profile.currentStage === stage.id;
              return (
                <button
                  type="button"
                  key={stage.id}
                  onClick={() => setProfile({ ...profile, currentStage: stage.id as any })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isActive
                      ? 'bg-indigo-50 border-indigo-600 text-indigo-950 ring-2 ring-indigo-600/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 active:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold">{stage.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{stage.sub}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: State & Education Board */}
        <div className="p-4 sm:p-5">
          <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2.5">
            {t.step2_title}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Board:
              </label>
              <select
                value={profile.board}
                onChange={(e) => setProfile({ ...profile, board: e.target.value as BoardType })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-indigo-600"
              >
                <option value="CBSE">CBSE (Central Board)</option>
                <option value="AP_STATE">Andhra Pradesh BIEAP</option>
                <option value="TS_STATE">Telangana State TSBIE</option>
                <option value="ICSE">CISCE (ICSE / ISC)</option>
                <option value="OTHER_STATE">Other State Board</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Entrance Target:
              </label>
              <select
                value={profile.state}
                onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-indigo-600"
              >
                <option value="ALL">All-India (JEE / NEET / CUET / CLAT)</option>
                <option value="AP">Andhra Pradesh (EAPCET / ECET)</option>
                <option value="TS">Telangana (EAMCET / ECET)</option>
                <option value="OTHER">Other State CETs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 3: Stream Selection */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">
              {t.step3_title}
            </label>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {STREAMS_DATA.map((stream) => {
              const isSelected = profile.selectedStream === stream.code;
              return (
                <button
                  type="button"
                  key={stream.id}
                  onClick={() => setProfile({ ...profile, selectedStream: stream.code })}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-indigo-50 border-indigo-600 text-indigo-950 ring-2 ring-indigo-600/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 active:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900">{stream.code}</span>
                    {isSelected && <span className="text-[10px] text-indigo-600 font-bold">✓</span>}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                    {stream.mandatorySubjects.slice(0, 2).join(', ')}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stream summary card */}
          {currentStreamInfo && (
            <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <span className="font-extrabold text-slate-900 text-xs">
                  {currentStreamInfo.name}
                </span>
                <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                  [{currentStreamInfo.evidenceLevel}]
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {currentStreamInfo.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-[11px]">
                <div>
                  <span className="font-bold text-emerald-700 flex items-center gap-1 mb-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    Doors Open:
                  </span>
                  <p className="text-slate-600 line-clamp-1">{currentStreamInfo.doorsOpen.slice(0, 2).join(', ')}</p>
                </div>
                {currentStreamInfo.doorsClosed.length > 0 && (
                  <div>
                    <span className="font-bold text-red-600 flex items-center gap-1 mb-0.5">
                      <AlertTriangle className="w-3 h-3" />
                      Locked:
                    </span>
                    <p className="text-slate-600 line-clamp-1">{currentStreamInfo.doorsClosed.slice(0, 2).join(', ')}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Step 4: Career Interests */}
        <div className="p-4 sm:p-5">
          <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2.5">
            {t.step4_title}
          </label>
          <div className="flex flex-wrap gap-1.5">
            {interestOptions.map((opt) => {
              const isChecked = profile.interests.includes(opt.id);
              return (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => handleInterestToggle(opt.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    isChecked
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {opt.label} {isChecked ? '✓' : '+'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="p-4 sm:p-5 bg-slate-50 rounded-b-2xl flex flex-col gap-3">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <Info className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span>AICTE, UGC, NMC & State Board compliant routing</span>
          </div>
          <button
            type="button"
            onClick={onGenerateRoadmap}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-black text-sm shadow-md transition-all active:scale-[0.98]"
          >
            <span>{t.btn_generate_roadmap}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
