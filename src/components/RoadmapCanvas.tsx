import React, { useState } from 'react';
import {
  PathwayGraph,
  PathwayNode,
  NodeState,
  StageId
} from '../types/pathway';
import { STREAMS_DATA, JOB_ROLES_DATA } from '../data/pathwayData';
import {
  CheckCircle2,
  Lock,
  ArrowRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Info,
  Calendar,
  Layers,
  GraduationCap,
  Briefcase,
  ChevronRight,
  AlertCircle,
  Eye,
  SlidersHorizontal,
  Compass,
  ListOrdered,
  Workflow,
  HelpCircle,
  Clock,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

interface RoadmapCanvasProps {
  graph: PathwayGraph;
  onSelectNode: (node: PathwayNode) => void;
  selectedNodeId?: string;
  parentMode: boolean;
  onOpenAiCounselor: () => void;
  currentStream?: string;
  onChangeStream?: (streamCode: string) => void;
  currentStage?: string;
  onChangeStage?: (stage: string) => void;
  onChangeCareer?: (jobId: string) => void;
}

export const RoadmapCanvas: React.FC<RoadmapCanvasProps> = ({
  graph,
  onSelectNode,
  selectedNodeId,
  parentMode,
  onOpenAiCounselor,
  currentStream = 'MPC',
  onChangeStream,
  currentStage = 'CLASS_11_12',
  onChangeStage,
  onChangeCareer
}) => {
  const [viewMode, setViewMode] = useState<'pipeline' | 'guided'>('pipeline');
  const [routeFilter, setRouteFilter] = useState<'ALL' | 'PRIMARY' | 'ALTERNATIVE' | 'LOCKED'>('ALL');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Group nodes logically into sequential columns
  const mainStages = [
    { key: 'foundation', stageNum: '01', title: 'Foundation', subtitle: 'Class 10 Board', filter: (n: PathwayNode) => n.stage === 'CLASS_10' },
    { key: 'stream', stageNum: '02', title: 'Stream Choice', subtitle: 'Class 11-12 / Diploma', filter: (n: PathwayNode) => n.stage === 'INTERMEDIATE' || n.stage === 'POLYTECHNIC' || n.stage === 'ITI' },
    { key: 'entrance', stageNum: '03', title: 'Entrance Gateways', subtitle: 'Competitive Exams', filter: (n: PathwayNode) => n.stage === 'ENTRANCE_EXAM' },
    { key: 'degree', stageNum: '04', title: 'Degree Programs', subtitle: 'College Graduation', filter: (n: PathwayNode) => n.stage === 'UG_DEGREE' },
    { key: 'bridge', stageNum: '05', title: 'Reality Bridge', subtitle: 'Skills & Portfolio', filter: (n: PathwayNode) => n.stage === 'SKILL_BRIDGE' },
    { key: 'job', stageNum: '06', title: 'Target Career', subtitle: 'Workforce Entry', filter: (n: PathwayNode) => n.stage === 'JOB_ROLE' }
  ];

  const columnGroups: {
    key: string;
    stageNum: string;
    title: string;
    subtitle: string;
    nodes: PathwayNode[];
  }[] = [];

  mainStages.forEach(st => {
    let matched = graph.nodes.filter(st.filter);
    
    // Apply route filter
    if (routeFilter === 'PRIMARY') {
      matched = matched.filter(n => n.state !== 'ALTERNATIVE' && n.state !== 'LOCKED');
    } else if (routeFilter === 'ALTERNATIVE') {
      matched = matched.filter(n => n.state === 'ALTERNATIVE' || n.state === 'YOU_ARE_HERE' || n.state === 'COMPLETED');
    } else if (routeFilter === 'LOCKED') {
      matched = matched.filter(n => n.state === 'LOCKED');
    }

    if (matched.length > 0) {
      columnGroups.push({
        key: st.key,
        stageNum: st.stageNum,
        title: st.title,
        subtitle: st.subtitle,
        nodes: matched
      });
    }
  });

  const getNodeStateStyle = (node: PathwayNode) => {
    const isSelected = selectedNodeId === node.id;
    const baseCard = 'relative text-left p-4 sm:p-5 rounded-2xl transition-all cursor-pointer border group flex flex-col justify-between ';

    switch (node.state) {
      case 'COMPLETED':
        return `${baseCard} bg-emerald-50/80 border-emerald-300 text-emerald-950 shadow-xs hover:border-emerald-500 hover:shadow-sm ${
          isSelected ? 'ring-2 ring-emerald-500 ring-offset-2' : ''
        }`;
      case 'YOU_ARE_HERE':
        return `${baseCard} bg-indigo-50/90 border-indigo-500 shadow-md ring-2 ring-indigo-400/70 ring-offset-2 hover:border-indigo-600 ${
          isSelected ? 'ring-offset-4 ring-indigo-600' : ''
        }`;
      case 'NEXT_STEP':
        return `${baseCard} bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-700 text-white border-transparent shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-blue-600 ${
          isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-indigo-600' : ''
        }`;
      case 'LOCKED':
        return `${baseCard} bg-slate-100/90 border-slate-300 text-slate-500 opacity-80 hover:opacity-100 hover:border-slate-400 ${
          isSelected ? 'ring-2 ring-red-400 ring-offset-2' : ''
        }`;
      case 'ALTERNATIVE':
        return `${baseCard} bg-purple-50/80 border-dashed border-2 border-purple-300 text-purple-950 hover:border-purple-500 hover:bg-purple-50 shadow-xs ${
          isSelected ? 'ring-2 ring-purple-500 ring-offset-2' : ''
        }`;
      default:
        return `${baseCard} bg-white border-slate-200 text-slate-900 shadow-xs hover:border-indigo-300 hover:shadow-sm ${
          isSelected ? 'ring-2 ring-indigo-500 ring-offset-2' : ''
        }`;
    }
  };

  const getNodeStatePill = (state: NodeState) => {
    switch (state) {
      case 'COMPLETED':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            COMPLETED
          </span>
        );
      case 'YOU_ARE_HERE':
        return (
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            YOU ARE HERE
          </span>
        );
      case 'NEXT_STEP':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-white/20 px-2 py-0.5 rounded">
            <ArrowRight className="w-3.5 h-3.5 text-white" />
            NEXT STEP
          </span>
        );
      case 'LOCKED':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600">
            <Lock className="w-3.5 h-3.5" />
            LOCKED
          </span>
        );
      case 'ALTERNATIVE':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-700">
            <span className="text-base leading-none">◌</span>
            PLAN-B ALTERNATIVE
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-medium text-slate-500">
            PATHWAY OPTION
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50/70">
      
      {/* 1. Top Quick-Switch Ribbon */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 sm:px-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          
          {/* Quick Stream Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 shrink-0 flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-indigo-600" />
              Stream:
            </span>
            {STREAMS_DATA.map((st) => {
              const isActive = currentStream === st.code;
              return (
                <button
                  key={st.id}
                  onClick={() => onChangeStream?.(st.code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  title={st.description}
                >
                  {st.code}
                </button>
              );
            })}
          </div>

          {/* Quick Target Career Jump */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 hidden sm:inline">
              Target Career:
            </span>
            <select
              onChange={(e) => {
                if (e.target.value) onChangeCareer?.(e.target.value);
              }}
              defaultValue=""
              className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="" disabled>Jump to Target Career...</option>
              {JOB_ROLES_DATA.map(j => (
                <option key={j.id} value={j.id}>
                  {j.title.split('/')[0]} ({j.salaryTiers.entryRange.split(' ')[0]})
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Second Row: Stage Selector & Views Toggle */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Stage Progression Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 font-medium mr-1">Current Stage:</span>
            {[
              { id: 'CLASS_10', label: 'Class 10' },
              { id: 'CLASS_11_12', label: 'Class 11/12 (Inter)' },
              { id: 'DIPLOMA_3YR', label: '3-Yr Diploma' },
              { id: 'UG_DEGREE', label: 'College Degree' }
            ].map(stg => (
              <button
                key={stg.id}
                onClick={() => onChangeStage?.(stg.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                  currentStage === stg.id
                    ? 'bg-indigo-100 text-indigo-900 border border-indigo-300'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {stg.label}
              </button>
            ))}
          </div>

          {/* View Mode & Route Filter */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Route filter */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
              <button
                onClick={() => setRouteFilter('ALL')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  routeFilter === 'ALL' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Routes
              </button>
              <button
                onClick={() => setRouteFilter('PRIMARY')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  routeFilter === 'PRIMARY' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Plan A (Main)
              </button>
              <button
                onClick={() => setRouteFilter('ALTERNATIVE')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  routeFilter === 'ALTERNATIVE' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Plan B
              </button>
              <button
                onClick={() => setRouteFilter('LOCKED')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  routeFilter === 'LOCKED' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Locked
              </button>
            </div>

            {/* Layout Mode (Pipeline vs Guided Stepper) */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
              <button
                onClick={() => setViewMode('pipeline')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  viewMode === 'pipeline' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tree Flow Pipeline View"
              >
                <Workflow className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Flow View</span>
              </button>
              <button
                onClick={() => setViewMode('guided')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  viewMode === 'guided' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Step-by-Step Guided Journey View"
              >
                <ListOrdered className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Guided View</span>
              </button>
            </div>

            {/* AI Explain Path */}
            <button
              onClick={onOpenAiCounselor}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Ask AI Guide</span>
            </button>
          </div>

        </div>

      </div>

      {/* 2. Interactive Path Breadcrumbs Ribbon */}
      <div className="bg-indigo-900 text-white px-4 py-2.5 sm:px-6 flex items-center justify-between text-xs overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="font-bold text-indigo-200 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-indigo-300" />
            Active Track:
          </span>
          <span className="font-medium text-white">{graph.title}</span>
          <span className="text-indigo-400">·</span>
          <span className="text-indigo-200">{graph.summary}</span>
        </div>
      </div>

      {/* Parent Mode Explainer if enabled */}
      {parentMode && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 sm:px-6">
          <div className="flex items-center justify-between text-xs text-amber-900">
            <div className="flex items-center gap-2">
              <span className="font-bold uppercase tracking-wider bg-amber-200 text-amber-950 px-2 py-0.5 rounded text-[10px]">
                Parent View Mode
              </span>
              <span>
                Roadmap displays overall duration, competitive exam intensity, and financial commitment brackets.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 3. Main Content: Flow Pipeline View OR Guided Stepper View */}
      {viewMode === 'pipeline' ? (
        /* Visual Flow Pipeline View */
        <div className="flex-1 overflow-x-auto overflow-y-auto p-4 sm:p-6 lg:p-8 min-h-[500px]">
          <div
            className="transition-transform origin-top-left inline-flex min-w-full pb-16"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <div className="flex items-start gap-4 sm:gap-6">
              {columnGroups.map((col, colIdx) => (
                <div key={col.key} className="flex items-start gap-3 sm:gap-4">
                  {/* Column Stage */}
                  <div className="w-72 sm:w-80 shrink-0 flex flex-col gap-3">
                    
                    {/* Stage Header */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                          STAGE {col.stageNum}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {col.nodes.length} {col.nodes.length === 1 ? 'choice' : 'choices'}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mt-1">
                        {col.title}
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        {col.subtitle}
                      </p>
                    </div>

                    {/* Nodes in this stage */}
                    <div className="flex flex-col gap-3.5">
                      {col.nodes.map((node) => {
                        const isNextStep = node.state === 'NEXT_STEP';

                        return (
                          <div
                            key={node.id}
                            onClick={() => onSelectNode(node)}
                            className={getNodeStateStyle(node)}
                          >
                            <div>
                              {/* Header row */}
                              <div className="flex items-center justify-between gap-1 mb-2">
                                {getNodeStatePill(node.state)}
                                <span
                                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                                    isNextStep
                                      ? 'bg-white/20 text-white'
                                      : node.details.evidenceLevel === 'OFFICIAL'
                                      ? 'bg-emerald-100 text-emerald-800'
                                      : node.details.evidenceLevel === 'STRONGLY_SUPPORTED'
                                      ? 'bg-sky-100 text-sky-800'
                                      : 'bg-slate-100 text-slate-700'
                                  }`}
                                >
                                  [{node.details.evidenceLevel}]
                                </span>
                              </div>

                              {/* Title */}
                              <h4
                                className={`text-sm font-bold leading-snug ${
                                  isNextStep ? 'text-white' : 'text-slate-900'
                                }`}
                              >
                                {node.title}
                              </h4>

                              {/* Subtitle */}
                              {node.subtitle && (
                                <p
                                  className={`text-xs mt-1 line-clamp-2 ${
                                    isNextStep ? 'text-indigo-100' : 'text-slate-600'
                                  }`}
                                >
                                  {node.subtitle}
                                </p>
                              )}

                              {/* Locked warning */}
                              {node.state === 'LOCKED' && node.lockReason && (
                                <div className="mt-2.5 text-[11px] text-red-700 bg-red-50 p-2 rounded-lg border border-red-200 flex items-start gap-1.5">
                                  <Lock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                                  <span className="line-clamp-2">{node.lockReason}</span>
                                </div>
                              )}

                              {/* Plan B Tag info */}
                              {node.state === 'ALTERNATIVE' && (
                                <div className="mt-2 text-[11px] text-purple-900 bg-purple-100/60 p-1.5 rounded font-medium">
                                  Plan-B alternative if entrance cutoff is missed
                                </div>
                              )}
                            </div>

                            {/* Card Footer */}
                            <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                              <span className={isNextStep ? 'text-indigo-100 font-medium' : 'text-slate-500'}>
                                {parentMode ? 'Timeline & Cost' : 'Click to inspect'}
                              </span>
                              <span className={`font-bold flex items-center gap-1 ${isNextStep ? 'text-white' : 'text-indigo-600'}`}>
                                <span>Details</span>
                                <span>→</span>
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>

                  {/* Stage Connector Arrow */}
                  {colIdx < columnGroups.length - 1 && (
                    <div className="self-center hidden lg:flex flex-col items-center justify-center text-slate-300 w-6">
                      <ArrowRight className="w-5 h-5 text-indigo-400 stroke-[2]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Guided Step-by-Step Journey View */
        <div className="max-w-4xl mx-auto w-full p-4 sm:p-6 lg:p-8 space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900">
              Guided Step-by-Step Educational Journey
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Linear walkthrough from your starting foundation to your career destination with actionable next steps.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200 space-y-8">
            {graph.nodes.map((node, nIdx) => {
              const isSelected = selectedNodeId === node.id;
              const isNext = node.state === 'NEXT_STEP';

              return (
                <div key={node.id} className="relative group">
                  {/* Step Marker Dot on the Line */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-4 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                    node.state === 'COMPLETED'
                      ? 'bg-emerald-500 border-emerald-600 text-white'
                      : node.state === 'YOU_ARE_HERE'
                      ? 'bg-indigo-600 border-indigo-700 text-white ring-4 ring-indigo-100'
                      : node.state === 'NEXT_STEP'
                      ? 'bg-blue-600 border-blue-700 text-white ring-4 ring-blue-100'
                      : node.state === 'LOCKED'
                      ? 'bg-slate-300 border-slate-400 text-slate-600'
                      : 'bg-white border-slate-300 text-slate-600'
                  }`}>
                    {node.state === 'COMPLETED' ? '✓' : nIdx + 1}
                  </div>

                  {/* Card Content */}
                  <div
                    onClick={() => onSelectNode(node)}
                    className={`bg-white rounded-2xl border p-5 shadow-xs transition-all cursor-pointer hover:shadow-md ${
                      isSelected
                        ? 'border-indigo-500 ring-2 ring-indigo-500/20'
                        : 'border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                          {node.stageName}
                        </span>
                        <span className="text-slate-300">·</span>
                        {getNodeStatePill(node.state)}
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        [{node.details.evidenceLevel}]
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900">
                      {node.title}
                    </h3>
                    {node.subtitle && (
                      <p className="text-xs text-slate-500 mt-0.5">{node.subtitle}</p>
                    )}

                    <p className="text-xs text-slate-700 mt-2 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {node.details.whatItIs}
                    </p>

                    {/* Reality Check if present */}
                    {node.details.realityCheck && (
                      <div className="mt-2.5 p-2.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-2">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <div className="text-[11px] leading-relaxed">
                          <strong className="text-amber-900 block">Reality Check:</strong>
                          {node.details.realityCheck}
                        </div>
                      </div>
                    )}

                    {/* Action Row */}
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">
                        Timing: {node.details.whenToDoIt.split('.')[0]}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectNode(node);
                        }}
                        className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                      >
                        <span>View Requirements & Next Steps</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Bottom Legend & Quick Stats */}
      <div className="bg-white border-t border-slate-200 px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <span className="font-bold text-slate-800">Map Legend:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Completed Stage</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></span>
            <span>You Are Here</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-700"></span>
            <span>Immediate Next Step</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-dashed border-purple-500 bg-purple-100"></span>
            <span>Plan B Alternative</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-300"></span>
            <span>Locked (Subject Restriction)</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-500">
          <Info className="w-3.5 h-3.5 text-indigo-600" />
          <span>Click any card to inspect official prerequisites, timing & Plan-B</span>
        </div>
      </div>

    </div>
  );
};
