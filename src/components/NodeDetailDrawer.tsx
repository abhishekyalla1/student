import React from 'react';
import {
  X,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Bookmark,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  FileText,
  CornerDownRight,
  ExternalLink
} from 'lucide-react';
import { PathwayNode, EvidenceLevel } from '../types/pathway';

interface NodeDetailDrawerProps {
  node: PathwayNode | null;
  onClose: () => void;
  onAskAi: (nodeContext: PathwayNode) => void;
  onToggleBookmark: (node: PathwayNode) => void;
  isBookmarked: boolean;
}

export const NodeDetailDrawer: React.FC<NodeDetailDrawerProps> = ({
  node,
  onClose,
  onAskAi,
  onToggleBookmark,
  isBookmarked
}) => {
  if (!node) return null;

  const renderEvidenceTag = (level: EvidenceLevel) => {
    switch (level) {
      case 'OFFICIAL':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded" title="Confirmed by responsible government bodies, statutory councils (AICTE/UGC/NMC), or gazettes">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            [OFFICIAL]
          </span>
        );
      case 'STRONGLY_SUPPORTED':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded" title="Confirmed across multiple reputable universities and academic prospectuses">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
            [STRONGLY SUPPORTED]
          </span>
        );
      case 'THIRD_PARTY':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded" title="Aggregated from industry salary surveys, recruiter reports, and recruitment data">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            [THIRD-PARTY]
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
            <HelpCircle className="w-3.5 h-3.5" />
            [UNCERTAIN]
          </span>
        );
    }
  };

  const renderStateBadge = (state: string) => {
    switch (state) {
      case 'COMPLETED':
        return <span className="text-xs font-bold text-emerald-700">✓ Completed Stage</span>;
      case 'YOU_ARE_HERE':
        return <span className="text-xs font-bold text-indigo-700">● You Are Here</span>;
      case 'NEXT_STEP':
        return <span className="text-xs font-bold text-blue-700">▶ Immediate Next Step</span>;
      case 'LOCKED':
        return <span className="text-xs font-bold text-red-600">🔒 Statutorily Locked Pathway</span>;
      case 'ALTERNATIVE':
        return <span className="text-xs font-bold text-purple-700">◌ Plan-B Alternative Route</span>;
      default:
        return <span className="text-xs font-medium text-slate-500">Available Pathway</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs flex justify-end transition-opacity">
      <div className="relative w-full max-w-xl bg-white shadow-2xl h-full flex flex-col overflow-y-auto border-l border-slate-200">
        
        {/* Header Bar */}
        <div className="p-5 border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur-sm z-10 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                {node.stageName}
              </span>
              <span className="text-slate-300">·</span>
              {renderStateBadge(node.state)}
              <span className="text-slate-300">·</span>
              {renderEvidenceTag(node.details.evidenceLevel)}
            </div>
            <h2 className="text-xl font-bold text-slate-900 leading-snug">
              {node.title}
            </h2>
            {node.subtitle && (
              <p className="text-sm text-slate-500 mt-0.5">{node.subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onToggleBookmark(node)}
              className={`p-2 rounded-lg border transition-colors ${
                isBookmarked
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-600'
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this Step'}
              aria-label="Bookmark step"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-indigo-600' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lock warning if locked */}
        {node.state === 'LOCKED' && node.lockReason && (
          <div className="m-5 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-red-900">Why this pathway is locked:</h4>
                <p className="text-xs text-red-800 mt-1 leading-relaxed">
                  {node.lockReason}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Content Body - Canonical Spec Node Card */}
        <div className="p-5 space-y-6 flex-1 text-sm text-slate-700">
          
          {/* Section 1: WHAT IT IS */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-indigo-600" />
              WHAT IT IS
            </div>
            <p className="text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200/80">
              {node.details.whatItIs}
            </p>
          </div>

          {/* Section 2: WHY IT MATTERS */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              WHY IT MATTERS
            </div>
            <p className="text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200/80">
              {node.details.whyItMatters}
            </p>
          </div>

          {/* Section 3: MANDATORY REQUIREMENTS */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              MANDATORY REQUIREMENTS
            </div>
            <div className="text-slate-800 leading-relaxed bg-blue-50/50 p-3.5 rounded-lg border border-blue-100">
              {node.details.mandatoryRequirements}
            </div>
          </div>

          {/* Section 4: WHEN TO DO IT */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              WHEN TO DO IT (APPLICATION WINDOW / TIMING)
            </div>
            <p className="text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200/80">
              {node.details.whenToDoIt}
            </p>
          </div>

          {/* Section 5: REALITY CHECK (PREREQUISITE REALITY) */}
          {node.details.realityCheck && (
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                REALITY CHECK (WHAT THE DEGREE DOES NOT GUARANTEE)
              </div>
              <div className="text-amber-950 leading-relaxed bg-amber-50 p-3.5 rounded-lg border border-amber-200/80 text-xs">
                {node.details.realityCheck}
              </div>
            </div>
          )}

          {/* Section 6: NEXT STEP */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
              <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
              ACTIONABLE NEXT STEP
            </div>
            <p className="text-slate-800 leading-relaxed bg-indigo-50/40 p-3.5 rounded-lg border border-indigo-100">
              {node.details.nextStep}
            </p>
          </div>

          {/* Section 7: ALTERNATIVE ROUTE (PLAN B) */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900 uppercase tracking-wider">
              <CornerDownRight className="w-3.5 h-3.5 text-purple-600" />
              ALTERNATIVE ROUTE (PLAN B)
            </div>
            <p className="text-purple-950 leading-relaxed bg-purple-50/50 p-3.5 rounded-lg border border-purple-100 text-xs">
              {node.details.alternativeRoute}
            </p>
          </div>

          {/* Section 8: SOURCE CITATION */}
          <div className="space-y-1.5 pt-2 border-t border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>STATUTORY SOURCE CITATION:</span>
              {renderEvidenceTag(node.details.evidenceLevel)}
            </div>
            <p className="text-xs text-slate-600 italic bg-slate-100/70 p-2.5 rounded font-mono">
              {node.details.sourceCitation}
            </p>
            {node.details.officialUrl && (
              <a
                href={node.details.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 hover:underline pt-1"
              >
                Official Regulatory Portal
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-200 bg-slate-50 sticky bottom-0 flex items-center justify-between gap-3">
          <button
            onClick={() => onAskAi(node)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs transition-colors"
          >
            <Sparkles className="w-4 h-4 text-indigo-200" />
            <span>Ask AI Guide About This Step</span>
          </button>
          <button
            onClick={onClose}
            className="py-2.5 px-4 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium text-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
