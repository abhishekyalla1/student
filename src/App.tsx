import React, { useState, useEffect } from 'react';
import { UserProfile, PathwayNode, PathwayGraph } from './types/pathway';
import {
  generateForwardRoadmap,
  generateBackwardRoadmap
} from './utils/roadmapEngine';
import { Header } from './components/Header';
import { RoadmapCanvas } from './components/RoadmapCanvas';
import { NodeDetailDrawer } from './components/NodeDetailDrawer';
import { ForwardPathFinder } from './components/ForwardPathFinder';
import { BackwardPathFinder } from './components/BackwardPathFinder';
import { DegreeReverseLookup } from './components/DegreeReverseLookup';
import { PathComparisonView } from './components/PathComparisonView';
import { CareerTransitionMatrix } from './components/CareerTransitionMatrix';
import { ExamCalendarView } from './components/ExamCalendarView';
import { AiCounselorModal } from './components/AiCounselorModal';
import { SavedRoadmapsDrawer } from './components/SavedRoadmapsDrawer';

export default function App() {
  // User Profile
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('pathway_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {
      currentStage: 'CLASS_11_12',
      board: 'CBSE',
      state: 'ALL',
      selectedStream: 'MPC',
      interests: ['tech', 'core_engg'],
      parentMode: false,
      language: 'en'
    };
  });

  // Navigation tab
  const [activeTab, setActiveTab] = useState<string>('canvas');

  // Active Roadmap Graph
  const [graph, setGraph] = useState<PathwayGraph>(() => generateForwardRoadmap(profile));

  // Selected Node Drawer
  const [selectedNode, setSelectedNode] = useState<PathwayNode | null>(null);

  // Bookmarks
  const [savedNodes, setSavedNodes] = useState<PathwayNode[]>(() => {
    const saved = localStorage.getItem('pathway_bookmarks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  // Modals & Drawers
  const [isAiCounselorOpen, setIsAiCounselorOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Sync profile to local storage
  useEffect(() => {
    localStorage.setItem('pathway_profile', JSON.stringify(profile));
  }, [profile]);

  // Sync bookmarks to local storage
  useEffect(() => {
    localStorage.setItem('pathway_bookmarks', JSON.stringify(savedNodes));
  }, [savedNodes]);

  // Toggle Parent Mode
  const handleToggleParentMode = (val: boolean) => {
    setProfile(prev => ({ ...prev, parentMode: val }));
  };

  // Toggle Bookmark for a node
  const handleToggleBookmark = (node: PathwayNode) => {
    setSavedNodes(prev => {
      const exists = prev.some(n => n.id === node.id);
      if (exists) {
        return prev.filter(n => n.id !== node.id);
      } else {
        return [...prev, node];
      }
    });
  };

  // Generate Forward Roadmap
  const handleGenerateForward = () => {
    const newGraph = generateForwardRoadmap(profile);
    setGraph(newGraph);
    setActiveTab('canvas');
  };

  // Quick stream change directly on the canvas
  const handleQuickStreamChange = (streamCode: string) => {
    const updated = { ...profile, selectedStream: streamCode };
    setProfile(updated);
    const newGraph = generateForwardRoadmap(updated);
    setGraph(newGraph);
  };

  // Quick stage change directly on the canvas
  const handleQuickStageChange = (stage: string) => {
    const updated = { ...profile, currentStage: stage as any };
    setProfile(updated);
    const newGraph = generateForwardRoadmap(updated);
    setGraph(newGraph);
  };

  // Select Target Job in Backward Mode
  const handleSelectTargetJob = (jobId: string) => {
    const newGraph = generateBackwardRoadmap(jobId, profile.currentStage);
    setGraph(newGraph);
    setActiveTab('canvas');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans antialiased">
      {/* Top Bar adhering to Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        parentMode={profile.parentMode}
        setParentMode={handleToggleParentMode}
        language={profile.language}
        setLanguage={(l) => setProfile({ ...profile, language: l })}
        onOpenAiCounselor={() => setIsAiCounselorOpen(true)}
        savedCount={savedNodes.length}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {activeTab === 'canvas' && (
          <div className="flex-1 flex flex-col min-h-[calc(100vh-4rem)]">
            <RoadmapCanvas
              graph={graph}
              onSelectNode={(node) => setSelectedNode(node)}
              selectedNodeId={selectedNode?.id}
              parentMode={profile.parentMode}
              onOpenAiCounselor={() => setIsAiCounselorOpen(true)}
              currentStream={profile.selectedStream}
              onChangeStream={handleQuickStreamChange}
              currentStage={profile.currentStage}
              onChangeStage={handleQuickStageChange}
              onChangeCareer={handleSelectTargetJob}
            />
          </div>
        )}

        {activeTab === 'forward' && (
          <div className="py-6">
            <ForwardPathFinder
              profile={profile}
              setProfile={setProfile}
              onGenerateRoadmap={handleGenerateForward}
            />
          </div>
        )}

        {activeTab === 'backward' && (
          <div className="py-6">
            <BackwardPathFinder
              onSelectTargetJob={handleSelectTargetJob}
            />
          </div>
        )}

        {activeTab === 'compare' && (
          <div className="py-6">
            <PathComparisonView />
          </div>
        )}

        {activeTab === 'degree_lookup' && (
          <div className="py-6">
            <DegreeReverseLookup
              onSelectCareer={handleSelectTargetJob}
            />
          </div>
        )}

        {activeTab === 'transitions' && (
          <div className="py-6">
            <CareerTransitionMatrix />
          </div>
        )}

        {activeTab === 'exams' && (
          <div className="py-6">
            <ExamCalendarView />
          </div>
        )}
      </main>

      {/* Node Detail Drawer / Canonical Spec Card */}
      <NodeDetailDrawer
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
        onAskAi={(node) => {
          setSelectedNode(node);
          setIsAiCounselorOpen(true);
        }}
        onToggleBookmark={handleToggleBookmark}
        isBookmarked={savedNodes.some(n => n.id === selectedNode?.id)}
      />

      {/* Grounded AI Counselor Modal */}
      <AiCounselorModal
        isOpen={isAiCounselorOpen}
        onClose={() => setIsAiCounselorOpen(false)}
        graphContext={graph}
        selectedNodeContext={selectedNode}
        defaultLanguage={profile.language}
      />

      {/* Saved / Offline Bookmarks Drawer */}
      <SavedRoadmapsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedNodes={savedNodes}
        onRemoveBookmark={(id) => setSavedNodes(prev => prev.filter(n => n.id !== id))}
        onSelectNode={(node) => {
          setSelectedNode(node);
          setActiveTab('canvas');
        }}
        onClearAll={() => setSavedNodes([])}
      />
    </div>
  );
}
