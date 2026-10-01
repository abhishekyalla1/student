import React from 'react';
import {
  X,
  Bookmark,
  Trash2,
  ArrowRight,
  Printer,
  Sparkles
} from 'lucide-react';
import { PathwayNode } from '../types/pathway';

interface SavedRoadmapsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedNodes: PathwayNode[];
  onRemoveBookmark: (nodeId: string) => void;
  onSelectNode: (node: PathwayNode) => void;
  onClearAll: () => void;
}

export const SavedRoadmapsDrawer: React.FC<SavedRoadmapsDrawerProps> = ({
  isOpen,
  onClose,
  savedNodes,
  onRemoveBookmark,
  onSelectNode,
  onClearAll
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs flex justify-end">
      <div className="relative w-full max-w-md bg-white shadow-2xl h-full flex flex-col overflow-y-auto border-l border-slate-200">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base font-bold text-slate-900">
              Saved Steps & Bookmarks
            </h2>
            <span className="text-xs font-mono text-slate-400 tabular-nums">
              ({savedNodes.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-5 flex-1 space-y-3 overflow-y-auto text-xs">
          {savedNodes.length === 0 ? (
            <div className="py-16 text-center text-slate-400 space-y-2">
              <Bookmark className="w-8 h-8 mx-auto text-slate-300 stroke-[1.5]" />
              <p className="font-medium text-slate-600">No saved roadmap steps yet</p>
              <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                Click the bookmark icon on any step in the roadmap to save it here for offline reference.
              </p>
            </div>
          ) : (
            savedNodes.map((node) => (
              <div
                key={node.id}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 bg-slate-50/50 hover:bg-white transition-all space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                    {node.stageName}
                  </span>
                  <button
                    onClick={() => onRemoveBookmark(node.id)}
                    className="text-slate-400 hover:text-red-600 p-1"
                    title="Remove from bookmarks"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {node.title}
                </h4>

                <p className="text-slate-600 line-clamp-2 text-[11px]">
                  {node.details.whatItIs}
                </p>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono">
                    [{node.details.evidenceLevel}]
                  </span>
                  <button
                    onClick={() => {
                      onSelectNode(node);
                      onClose();
                    }}
                    className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 text-[11px]"
                  >
                    <span>View Step Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedNodes.length > 0 && (
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-medium text-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClearAll}
              className="text-xs text-red-600 hover:text-red-800 font-medium"
            >
              Clear All Bookmarks
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
