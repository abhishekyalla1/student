import React from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Bookmark,
  Sparkles,
  ArrowRight,
  Clock,
  FileText,
  CornerDownRight,
  ExternalLink,
  Lock,
  CheckSquare,
  Square
} from 'lucide-react';
import { PathwayNode, EvidenceLevel, LanguageCode, UserProfile } from '../types/pathway';
import { getTranslation } from '../i18n/translations';
import { evaluateNodeEligibility, getEligibilityBadgeColor } from '../utils/eligibilityEngine';

interface MobileBottomSheetProps {
  node: PathwayNode | null;
  onClose: () => void;
  onAskAi: (nodeContext: PathwayNode) => void;
  onToggleBookmark: (node: PathwayNode) => void;
  isBookmarked: boolean;
  language?: LanguageCode;
  userProfile?: UserProfile;
  isCompleted?: boolean;
  onToggleCompleteStep?: (stepId: string) => void;
}

export const MobileBottomSheet: React.FC<MobileBottomSheetProps> = ({
  node,
  onClose,
  onAskAi,
  onToggleBookmark,
  isBookmarked,
  language = 'en',
  userProfile,
  isCompleted = false,
  onToggleCompleteStep
}) => {
  if (!node) return null;
  const t = getTranslation(language);

  // Evaluate statutory eligibility against current student profile
  const eligibility = userProfile 
    ? evaluateNodeEligibility(userProfile, node.id, node.stage)
    : null;
  const badgeStyle = eligibility ? getEligibilityBadgeColor(eligibility.status) : null;

  const renderEvidenceTag = (level: EvidenceLevel) => {
    switch (level) {
      case 'OFFICIAL':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            [OFFICIAL]
          </span>
        );
      case 'STRONGLY_SUPPORTED':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-700" />
            [STRONGLY SUPPORTED]
          </span>
        );
      case 'THIRD_PARTY':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
            [THIRD-PARTY]
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            [UNCERTAIN]
          </span>
        );
    }
  };

  const renderStateBadge = (state: string) => {
    switch (state) {
      case 'COMPLETED':
        return <span className="text-[11px] font-bold text-emerald-700">✓ {t.state_completed}</span>;
      case 'YOU_ARE_HERE':
        return <span className="text-[11px] font-bold text-indigo-700">● {t.state_you_are_here}</span>;
      case 'NEXT_STEP':
        return <span className="text-[11px] font-bold text-blue-700">▶ {t.state_next_step}</span>;
      case 'LOCKED':
        return <span className="text-[11px] font-bold text-red-600">🔒 {t.state_locked}</span>;
      case 'ALTERNATIVE':
        return <span className="text-[11px] font-bold text-purple-700">◌ {t.state_plan_b}</span>;
      default:
        return <span className="text-[11px] font-medium text-slate-500">{t.state_available}</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      {/* Backdrop tap to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Sheet Container with Native Drag Handle */}
      <div className="relative w-full max-w-lg bg-white rounded-t-[32px] max-h-[88vh] flex flex-col shadow-2xl z-10 overflow-hidden border-t border-slate-200 animate-in slide-in-from-bottom duration-250">
        
        {/* Grab Handle */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-2.5 shrink-0" />

        {/* Sheet Header */}
        <div className="px-4 sm:px-5 pb-3 pt-1 border-b border-slate-100 flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 flex-wrap mb-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                {node.stageName}
              </span>
              {renderStateBadge(node.state)}
              {renderEvidenceTag(node.details.evidenceLevel)}
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {node.title}
            </h2>
            {node.subtitle && (
              <p className="text-xs text-slate-500 mt-0.5 font-medium">{node.subtitle}</p>
            )}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Mark as completed toggle */}
            {onToggleCompleteStep && (
              <button
                type="button"
                onClick={() => onToggleCompleteStep(node.id)}
                className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1 transition-all ${
                  isCompleted
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
                title={isCompleted ? 'Mark as Incomplete' : 'Mark as Completed'}
              >
                {isCompleted ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-400" />}
                <span className="text-[10px] hidden xs:inline">{isCompleted ? 'Done' : 'Mark Done'}</span>
              </button>
            )}

            {/* Bookmark button */}
            <button
              type="button"
              onClick={() => onToggleBookmark(node)}
              className={`p-2 rounded-xl border transition-colors ${
                isBookmarked
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-600'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title={t.bookmark_step}
              aria-label={t.bookmark_step}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-indigo-600' : ''}`} />
            </button>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 bg-slate-100 text-slate-500 hover:text-slate-800 rounded-xl transition-colors"
              aria-label="Close sheet"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lock Alert Banner if Locked */}
        {node.state === 'LOCKED' && node.lockReason && (
          <div className="mx-4 sm:mx-5 mt-3 p-3 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-red-950">{t.state_locked}:</div>
              <p className="text-[11px] text-red-900 mt-0.5 leading-relaxed">
                {node.lockReason}
              </p>
            </div>
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 text-xs text-slate-700 flex-1">
          
          {/* Statutory Eligibility Verdict (Section B Requirement) */}
          {eligibility && badgeStyle && (
            <div className={`p-3 rounded-2xl border ${badgeStyle.bg} ${badgeStyle.border} space-y-1`}>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-black uppercase tracking-wider ${badgeStyle.text} flex items-center gap-1`}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Statutory Eligibility Verdict:
                </span>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${badgeStyle.bg} ${badgeStyle.text} border ${badgeStyle.border}`}>
                  {eligibility.badgeLabel}
                </span>
              </div>
              <p className={`text-[11px] ${badgeStyle.text} leading-relaxed font-medium`}>
                {eligibility.summary}
              </p>
              {eligibility.requirementsSatisfied && eligibility.requirementsSatisfied.length > 0 && (
                <div className="pt-1 text-[10px] space-y-0.5">
                  <span className="font-bold text-emerald-800">Prerequisites Met:</span>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {eligibility.requirementsSatisfied.map((req, i) => (
                      <span key={i} className="bg-emerald-100/80 text-emerald-900 px-1.5 py-0.5 rounded text-[9px] font-semibold">
                        ✓ {req}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {eligibility.requirementsMissing && eligibility.requirementsMissing.length > 0 && (
                <div className="pt-1 text-[10px] space-y-0.5">
                  <span className="font-bold text-red-800">Prerequisites Missing:</span>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {eligibility.requirementsMissing.map((req, i) => (
                      <span key={i} className="bg-red-100/80 text-red-900 px-1.5 py-0.5 rounded text-[9px] font-semibold">
                        ✕ {req}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-200/50">
                Regulatory Basis: <span className="font-semibold text-slate-700">{eligibility.statutoryBasis}</span>
              </div>
            </div>
          )}

          {/* 1. WHAT IT IS (Scope & Definition) */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-900 uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-indigo-600" />
              <span>{t.what_it_is}</span>
            </div>
            <p className="text-slate-800 leading-relaxed text-xs">
              {node.details.whatItIs}
            </p>
          </div>

          {/* 2. WHY IT MATTERS (Long-Term Value) */}
          <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-100 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-900 uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.why_it_matters}</span>
            </div>
            <p className="text-emerald-950 leading-relaxed text-xs">
              {node.details.whyItMatters}
            </p>
          </div>

          {/* 3. MANDATORY STATUTORY PREREQUISITES */}
          <div className="bg-blue-50/60 p-3.5 rounded-2xl border border-blue-100 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-black text-blue-900 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.mandatory_requirements}</span>
            </div>
            <p className="text-blue-950 leading-relaxed text-xs">
              {node.details.mandatoryRequirements}
            </p>
          </div>

          {/* 4. TIMING & APPLICATION WINDOW */}
          <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/80 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[10px] font-black text-amber-900 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>{t.timing_window}</span>
              </div>
              <span className="text-[9px] font-bold text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-300">
                {node.details.timingType ? `[${node.details.timingType.replace(/_/g, ' ')}]` : '[TYPICAL ANNUAL WINDOW]'}
              </span>
            </div>
            <p className="text-amber-950 leading-relaxed text-xs">
              {node.details.whenToDoIt}
            </p>
          </div>

          {/* 5. REALITY CHECK (Job Market Truth: Degree != Job) */}
          {node.details.realityCheck && (
            <div className="bg-orange-50 p-3.5 rounded-2xl border border-orange-200 space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-black text-orange-950 uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5 text-orange-600" />
                <span>{t.reality_check}</span>
              </div>
              <p className="text-orange-950 leading-relaxed text-xs">
                {node.details.realityCheck}
              </p>
            </div>
          )}

          {/* 6. ACTIONABLE NEXT STEP */}
          <div className="bg-indigo-50/70 p-3.5 rounded-2xl border border-indigo-100 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-black text-indigo-900 uppercase tracking-wider">
              <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
              <span>{t.actionable_next_step}</span>
            </div>
            <p className="text-indigo-950 leading-relaxed text-xs">
              {node.details.nextStep}
            </p>
          </div>

          {/* 7. PLAN B ALTERNATIVE ROUTE */}
          <div className="bg-purple-50/70 p-3.5 rounded-2xl border border-purple-100 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-black text-purple-900 uppercase tracking-wider">
              <CornerDownRight className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.plan_b_contingency}</span>
            </div>
            <p className="text-purple-950 leading-relaxed text-xs">
              {node.details.alternativeRoute}
            </p>
          </div>

          {/* Official Regulatory Citation & Portal Link */}
          <div className="pt-2 text-[10px] text-slate-500 border-t border-slate-100 space-y-1">
            <div className="font-bold text-slate-600">{t.statutory_citation}:</div>
            <div className="font-mono text-slate-700 italic bg-slate-50 p-2 rounded-lg border border-slate-200">
              {node.details.sourceCitation}
            </div>
            {node.details.officialUrl && (
              <a
                href={node.details.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-indigo-600 font-bold hover:underline pt-1"
              >
                <span>{t.open_portal}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

        </div>

        {/* Pinned Bottom CTA Bar */}
        <div className="p-3.5 sm:p-4 border-t border-slate-200 bg-white flex items-center gap-2">
          <button
            type="button"
            onClick={() => onAskAi(node)}
            className="flex-1 min-h-[46px] rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all"
          >
            <Sparkles className="w-4 h-4 text-indigo-200" />
            <span>{t.ask_ai_step}</span>
          </button>
          
          {onToggleCompleteStep && (
            <button
              type="button"
              onClick={() => onToggleCompleteStep(node.id)}
              className={`px-3 min-h-[46px] rounded-xl border text-xs font-bold flex items-center gap-1 transition-all ${
                isCompleted
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {isCompleted ? '✓ Completed' : 'Mark Done'}
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-4 min-h-[46px] rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 active:scale-[0.98] transition-all"
          >
            {t.done_btn}
          </button>
        </div>

      </div>
    </div>
  );
};
