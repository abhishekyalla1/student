import React from 'react';
import {
  UserProfile,
  BoardType
} from '../types/pathway';
import { STREAMS_DATA } from '../data/pathwayData';
import {
  Compass,
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface ForwardPathFinderProps {
  profile: UserProfile;
  setProfile: (profile: UserProfile) => void;
  onGenerateRoadmap: () => void;
}

export const ForwardPathFinder: React.FC<ForwardPathFinderProps> = ({
  profile,
  setProfile,
  onGenerateRoadmap
}) => {
  const currentStreamInfo = STREAMS_DATA.find(s => s.code === profile.selectedStream) || STREAMS_DATA[0];

  const interestOptions = [
    { id: 'tech', label: 'Software & Technology' },
    { id: 'medical', label: 'Healthcare & Medicine' },
    { id: 'finance', label: 'Finance & Commerce' },
    { id: 'law', label: 'Law & Governance' },
    { id: 'design', label: 'Design & Creative' },
    { id: 'civil_services', label: 'Civil Services / Govt' },
    { id: 'core_engg', label: 'Core Engineering & Infra' }
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
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            Forward Exploration Engine
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Where Can You Go From Where You Are?
          </h1>
          <p className="mt-2 text-sm text-indigo-100 leading-relaxed">
            Select your current education stage and subject stream. Our deterministic rule engine checks official statutory prerequisites (AICTE, UGC, NMC, BIEAP/TSBIE) to map your valid primary degrees, lateral routes, and Plan-B alternatives.
          </p>
        </div>
      </div>

      {/* Configuration Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs divide-y divide-slate-100">
        
        {/* Step 1: Current Education Stage */}
        <div className="p-6">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Step 1: Your Current Education Stage
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {[
              { id: 'CLASS_10', label: 'Class 10 Student', sub: 'SSC / CBSE / ICSE' },
              { id: 'CLASS_11_12', label: 'Class 11 / 12', sub: 'Intermediate / Jr College' },
              { id: 'DIPLOMA_3YR', label: '3-Yr Diploma', sub: 'Polytechnic Student' },
              { id: 'ITI', label: 'ITI Trades', sub: 'Vocational Student' },
              { id: 'UG_DEGREE', label: 'Undergraduate', sub: 'College Degree Student' }
            ].map((stage) => {
              const isActive = profile.currentStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setProfile({ ...profile, currentStage: stage.id as any })}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isActive
                      ? 'bg-indigo-50 border-indigo-600 text-indigo-950 ring-2 ring-indigo-600/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">{stage.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{stage.sub}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: State & Education Board */}
        <div className="p-6">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Step 2: Education Board & Regional Context
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                Schooling / Higher Secondary Board:
              </label>
              <select
                value={profile.board}
                onChange={(e) => setProfile({ ...profile, board: e.target.value as BoardType })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-indigo-600"
              >
                <option value="CBSE">CBSE (Central Board of Secondary Education)</option>
                <option value="AP_STATE">Andhra Pradesh Board of Intermediate Education (BIEAP)</option>
                <option value="TS_STATE">Telangana State Board of Intermediate Education (TSBIE)</option>
                <option value="ICSE">CISCE (ICSE / ISC)</option>
                <option value="OTHER_STATE">Other State Board</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                State Entrance Eligibility Focus:
              </label>
              <select
                value={profile.state}
                onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-indigo-600"
              >
                <option value="AP">Andhra Pradesh (AP EAPCET & ECET)</option>
                <option value="TS">Telangana (TG EAMCET & ECET)</option>
                <option value="ALL">All-India / National (JEE / NEET / CUET)</option>
                <option value="OTHER">Other State CETs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 3: Stream Selection */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Step 3: Current or Preferred Stream Group
            </label>
            <span className="text-[11px] text-slate-400">
              Select stream to evaluate statutory eligibility
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STREAMS_DATA.map((stream) => {
              const isSelected = profile.selectedStream === stream.code;
              return (
                <button
                  key={stream.id}
                  onClick={() => setProfile({ ...profile, selectedStream: stream.code })}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-indigo-50 border-indigo-600 text-indigo-950 ring-2 ring-indigo-600/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-slate-900">{stream.code}</span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase">
                      {stream.stage}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 mt-1 line-clamp-1 font-medium">
                    {stream.mandatorySubjects.join(', ')}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stream summary card */}
          {currentStreamInfo && (
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="font-bold text-slate-900 text-sm">
                  {currentStreamInfo.name}
                </span>
                <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  [{currentStreamInfo.evidenceLevel}]
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {currentStreamInfo.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
                <div>
                  <span className="font-bold text-emerald-700 flex items-center gap-1 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Doors Kept Open:
                  </span>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                    {currentStreamInfo.doorsOpen.slice(0, 3).map((d, i) => (
                      <li key={i} className="line-clamp-1">{d}</li>
                    ))}
                  </ul>
                </div>
                {currentStreamInfo.doorsClosed.length > 0 && (
                  <div>
                    <span className="font-bold text-red-600 flex items-center gap-1 mb-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Doors Restricted (Locked):
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                      {currentStreamInfo.doorsClosed.slice(0, 2).map((d, i) => (
                        <li key={i} className="line-clamp-1">{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Step 4: Career Interests */}
        <div className="p-6">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Step 4: Your Career & Domain Interests
          </label>
          <div className="flex flex-wrap gap-2">
            {interestOptions.map((opt) => {
              const isChecked = profile.interests.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  onClick={() => handleInterestToggle(opt.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors ${
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
        <div className="p-6 bg-slate-50 rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Info className="w-4 h-4 text-indigo-600" />
            <span>Generates fully interactive node graph with verified eligibility and Plan-B routes</span>
          </div>
          <button
            onClick={onGenerateRoadmap}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all group"
          >
            <span>Generate Visual Roadmap</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
