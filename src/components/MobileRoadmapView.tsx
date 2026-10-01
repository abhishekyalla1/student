import React, { useState } from 'react';
import {
  PathwayGraph,
  PathwayNode,
  NodeState,
  LanguageCode,
  UserProfile
} from '../types/pathway';
import { STREAMS_DATA } from '../data/pathwayData';
import { getTranslation } from '../i18n/translations';
import { evaluateNodeEligibility, getEligibilityBadgeColor } from '../utils/eligibilityEngine';
import {
  CheckCircle2,
  Lock,
  Sparkles,
  Compass,
  Shuffle,
  ChevronRight,
  CheckSquare,
  Square,
  RotateCcw,
  ShieldCheck
} from 'lucide-react';

interface MobileRoadmapViewProps {
  graph: PathwayGraph;
  onSelectNode: (node: PathwayNode) => void;
  selectedNodeId?: string;
  parentMode: boolean;
  onOpenAiCounselor: () => void;
  currentStream?: string;
  onChangeStream?: (streamCode: string) => void;
  currentStage?: string;
  onChangeStage?: (stage: string) => void;
  language?: LanguageCode;
  userProfile?: UserProfile;
  completedStepIds?: string[];
  onToggleCompleteStep?: (stepId: string) => void;
  onResetProgress?: () => void;
}

export const MobileRoadmapView: React.FC<MobileRoadmapViewProps> = ({
  graph,
  onSelectNode,
  selectedNodeId,
  parentMode,
  onOpenAiCounselor,
  currentStream = 'MPC',
  onChangeStream,
  currentStage = 'CLASS_11_12',
  onChangeStage,
  language = 'en',
  userProfile,
  completedStepIds = [],
  onToggleCompleteStep,
  onResetProgress
}) => {
  const [filterMode, setFilterMode] = useState<'ALL' | 'PRIMARY' | 'ALTERNATIVE' | 'LOCKED'>('ALL');
  const t = getTranslation(language);

  // Filter nodes based on selected filter
  const displayNodes = graph.nodes.filter(node => {
    if (filterMode === 'PRIMARY') {
      return node.state !== 'ALTERNATIVE' && node.state !== 'LOCKED';
    }
    if (filterMode === 'ALTERNATIVE') {
      return node.state === 'ALTERNATIVE' || node.state === 'YOU_ARE_HERE' || node.state === 'COMPLETED';
    }
    if (filterMode === 'LOCKED') {
      return node.state === 'LOCKED';
    }
    return true;
  });

  // Calculate Progress
  const totalSteps = graph.nodes.length;
  const completedCount = graph.nodes.filter(n => completedStepIds.includes(n.id) || n.state === 'COMPLETED').length;
  const progressPercent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

  const getStationDot = (node: PathwayNode, isAlternative?: boolean) => {
    const isStepDone = completedStepIds.includes(node.id) || node.state === 'COMPLETED';

    if (isStepDone) {
      return (
        <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md font-bold text-xs ring-4 ring-emerald-100 shrink-0 transition-transform active:scale-95">
          ✓
        </div>
      );
    }

    switch (node.state) {
      case 'YOU_ARE_HERE':
        return (
          <div className="relative w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md font-bold text-xs ring-4 ring-indigo-200 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-50"></span>
            ●
          </div>
        );
      case 'NEXT_STEP':
        return (
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-md font-bold text-xs ring-4 ring-blue-100 shrink-0 animate-pulse">
            ▶
          </div>
        );
      case 'LOCKED':
        return (
          <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 border border-slate-300 flex items-center justify-center font-bold text-xs shrink-0">
            <Lock className="w-3.5 h-3.5 text-slate-500" />
          </div>
        );
      case 'ALTERNATIVE':
        return (
          <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 border-2 border-dashed border-purple-400 flex items-center justify-center font-bold text-xs shrink-0">
            ◌
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-white border-2 border-indigo-400 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
            •
          </div>
        );
    }
  };

  const getStationCardStyle = (node: PathwayNode, isSelected: boolean) => {
    const isStepDone = completedStepIds.includes(node.id) || node.state === 'COMPLETED';
    const base = 'flex-1 text-left p-3.5 sm:p-4 rounded-2xl transition-all cursor-pointer border active:scale-[0.99] ';

    if (isStepDone) {
      return `${base} bg-emerald-50/70 border-emerald-300 text-emerald-950 hover:bg-emerald-50 shadow-2xs ${
        isSelected ? 'ring-2 ring-emerald-500 ring-offset-2' : ''
      }`;
    }

    switch (node.state) {
      case 'YOU_ARE_HERE':
        return `${base} bg-indigo-50/90 border-indigo-500 shadow-md ring-2 ring-indigo-400/60 ring-offset-1 text-indigo-950 ${
          isSelected ? 'ring-offset-2 ring-indigo-600' : ''
        }`;
      case 'NEXT_STEP':
        return `${base} bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-transparent shadow-md hover:shadow-lg ${
          isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-indigo-600' : ''
        }`;
      case 'LOCKED':
        return `${base} bg-slate-100/90 border-slate-300 text-slate-500 opacity-80 ${
          isSelected ? 'ring-2 ring-red-400' : ''
        }`;
      case 'ALTERNATIVE':
        return `${base} bg-purple-50/80 border-dashed border-2 border-purple-300 text-purple-950 shadow-xs ${
          isSelected ? 'ring-2 ring-purple-500' : ''
        }`;
      default:
        return `${base} bg-white border-slate-200 text-slate-900 shadow-xs hover:border-indigo-300 ${
          isSelected ? 'ring-2 ring-indigo-500' : ''
        }`;
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50/80 pb-6">
      
      {/* 1. Mobile Quick Stream Selector (Thumb Accessible) */}
      <div className="bg-white border-b border-slate-200 px-3.5 py-2 shadow-xs sticky top-0 z-20">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 shrink-0 mr-1 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-indigo-600" />
            {t.stream_label}
          </span>
          {STREAMS_DATA.map(st => {
            const isActive = currentStream === st.code;
            return (
              <button
                type="button"
                key={st.id}
                onClick={() => onChangeStream?.(st.code)}
                className={`min-h-[34px] px-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 active:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{st.code}</span>
                {isActive && <span className="text-[10px] text-indigo-200">✓</span>}
              </button>
            );
          })}
        </div>

        {/* Route Filter Segmented Control */}
        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between gap-1.5">
          <div className="flex items-center bg-slate-100 p-0.5 rounded-xl text-[11px] flex-1">
            <button
              type="button"
              onClick={() => setFilterMode('ALL')}
              className={`flex-1 py-1 text-center font-bold rounded-lg transition-colors ${
                filterMode === 'ALL' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
              }`}
            >
              {t.filter_all}
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('PRIMARY')}
              className={`flex-1 py-1 text-center font-bold rounded-lg transition-colors ${
                filterMode === 'PRIMARY' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
              }`}
            >
              {t.filter_primary}
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('ALTERNATIVE')}
              className={`flex-1 py-1 text-center font-bold rounded-lg transition-colors ${
                filterMode === 'ALTERNATIVE' ? 'bg-white text-purple-700 shadow-xs' : 'text-slate-500'
              }`}
            >
              {t.filter_plan_b}
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('LOCKED')}
              className={`flex-1 py-1 text-center font-bold rounded-lg transition-colors ${
                filterMode === 'LOCKED' ? 'bg-white text-red-600 shadow-xs' : 'text-slate-500'
              }`}
            >
              {t.filter_locked}
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenAiCounselor}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-indigo-50 border border-indigo-200 rounded-xl text-[11px] font-bold text-indigo-700 active:bg-indigo-100 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>{t.ask_ai_guide}</span>
          </button>
        </div>
      </div>

      {/* 2. Parent Mode Notice if active */}
      {parentMode && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-xs text-amber-900 flex items-center justify-between">
          <span className="font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            {t.parent_mode_on}:
          </span>
          <span className="text-[11px] text-amber-800">{t.parent_mode_banner}</span>
        </div>
      )}

      {/* 3. Progress Tracking Header Card (Section 4 Requirement) */}
      <div className="px-3.5 pt-3.5">
        <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-black text-slate-900">Milestone Progress:</span>
              <span className="font-bold text-indigo-700">
                {completedCount} of {totalSteps} Steps ({progressPercent}%)
              </span>
            </div>
            {completedCount > 0 && onResetProgress && (
              <button
                type="button"
                onClick={onResetProgress}
                className="text-[10px] font-bold text-slate-500 hover:text-red-600 flex items-center gap-1"
                title="Reset milestone progress"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
          {/* Animated Progress Bar */}
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/80">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4. Subway Roadmap Timeline */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-4">
        
        {/* Track Title Card */}
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-black uppercase tracking-wider text-indigo-700 text-[10px]">
              Verified Education Route
            </span>
            <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              AICTE / UGC / NMC
            </span>
          </div>
          <h2 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
            {graph.title}
          </h2>
          <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
            {graph.summary}
          </p>
        </div>

        {/* Metro Stations List */}
        <div className="relative">
          {/* Central Metro Spine Track */}
          <div className="absolute left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-emerald-400 via-indigo-500 to-blue-600 rounded-full" />

          <div className="space-y-4">
            {displayNodes.map((node) => {
              const isSelected = selectedNodeId === node.id;
              const isNext = node.state === 'NEXT_STEP';
              const isStepDone = completedStepIds.includes(node.id) || node.state === 'COMPLETED';

              // Evaluate statutory eligibility
              const eligibility = userProfile 
                ? evaluateNodeEligibility(userProfile, node.id, node.stage) 
                : null;
              const eligibilityBadge = eligibility ? getEligibilityBadgeColor(eligibility.status) : null;

              return (
                <div key={node.id} className="relative flex items-start gap-3">
                  {/* Metro Station Circle */}
                  {getStationDot(node, node.isAlternative)}

                  {/* Station Content Card */}
                  <div
                    onClick={() => onSelectNode(node)}
                    className={getStationCardStyle(node, isSelected)}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-1 mb-1.5 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${
                            isNext ? 'text-indigo-200' : 'text-slate-500'
                          }`}>
                            {node.stageName}
                          </span>
                          <span className={isNext ? 'text-indigo-300' : 'text-slate-300'}>·</span>
                          <span className={`text-[10px] font-bold ${
                            isStepDone ? 'text-emerald-700' :
                            node.state === 'YOU_ARE_HERE' ? 'text-indigo-700 font-extrabold' :
                            node.state === 'NEXT_STEP' ? 'text-white font-extrabold' :
                            node.state === 'ALTERNATIVE' ? 'text-purple-700' :
                            node.state === 'LOCKED' ? 'text-red-600' : 'text-slate-500'
                          }`}>
                            {isStepDone ? `✓ ${t.state_completed}` :
                             node.state === 'YOU_ARE_HERE' ? `● ${t.state_you_are_here}` :
                             node.state === 'NEXT_STEP' ? `▶ ${t.state_next_step}` :
                             node.state === 'ALTERNATIVE' ? `◌ ${t.state_plan_b}` :
                             node.state === 'LOCKED' ? `🔒 ${t.state_locked}` : t.state_available}
                          </span>
                        </div>

                        {/* Direct Completion Checkbox on card */}
                        {onToggleCompleteStep && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleCompleteStep(node.id);
                            }}
                            className={`p-1 rounded-md text-[10px] font-bold flex items-center gap-1 transition-colors ${
                              isStepDone 
                                ? 'bg-emerald-600 text-white' 
                                : isNext ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                            title="Toggle step completion"
                          >
                            {isStepDone ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                          </button>
                        )}
                      </div>

                      {/* Card Title */}
                      <h3 className={`text-sm sm:text-base font-extrabold leading-snug ${
                        isNext ? 'text-white' : 'text-slate-900'
                      }`}>
                        {node.title}
                      </h3>

                      {node.subtitle && (
                        <p className={`text-xs mt-0.5 ${
                          isNext ? 'text-indigo-100' : 'text-slate-500 font-medium'
                        }`}>
                          {node.subtitle}
                        </p>
                      )}

                      {/* Eligibility Verdict Badge (Section B) */}
                      {eligibility && eligibilityBadge && (
                        <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                          <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${eligibilityBadge.bg} ${eligibilityBadge.text} ${eligibilityBadge.border}`}>
                            {eligibility.badgeLabel}
                          </span>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                            isNext ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            [{node.details.evidenceLevel}]
                          </span>
                        </div>
                      )}

                      {/* Locked Callout */}
                      {node.state === 'LOCKED' && node.lockReason && (
                        <div className="mt-2 p-2 bg-red-50 rounded-xl border border-red-200 text-[11px] text-red-900 flex items-start gap-1.5">
                          <Lock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2 leading-relaxed">{node.lockReason}</span>
                        </div>
                      )}

                      {/* Plan B Highlight */}
                      {node.state === 'ALTERNATIVE' && (
                        <div className="mt-2 p-2 bg-purple-100/70 rounded-xl border border-purple-200 text-[11px] text-purple-950 font-semibold flex items-center gap-1.5">
                          <Shuffle className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                          <span>{t.plan_b_contingency}</span>
                        </div>
                      )}

                      {/* Parent Mode Metrics */}
                      {parentMode && (
                        <div className={`mt-2 pt-2 border-t text-[11px] flex items-center justify-between ${
                          isNext ? 'border-white/20 text-indigo-100' : 'border-slate-200 text-slate-600'
                        }`}>
                          <span>
                            {node.stage === 'CLASS_10' && 'Age: ~15-16 Yrs'}
                            {node.stage === 'INTERMEDIATE' && 'Duration: 2 Years'}
                            {node.stage === 'POLYTECHNIC' && 'Duration: 3 Years'}
                            {node.stage === 'UG_DEGREE' && 'Duration: 3 - 5 Years'}
                            {node.stage === 'ENTRANCE_EXAM' && 'Notification: Apr-May'}
                            {node.stage === 'JOB_ROLE' && 'Initial Career Entry'}
                            {node.stage === 'SKILL_BRIDGE' && 'Pre-Placement Milestone'}
                          </span>
                          <span className="font-bold">{t.tap_to_inspect} →</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Trigger */}
                    {!parentMode && (
                      <div className={`mt-2.5 pt-2 border-t flex items-center justify-between text-[11px] font-bold ${
                        isNext ? 'border-white/20 text-white' : 'border-slate-100 text-indigo-600'
                      }`}>
                        <span>{t.tap_to_inspect}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
