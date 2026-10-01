import React, { useState, useEffect } from 'react';
import { UserProfile, PathwayNode, PathwayGraph, LanguageCode } from './types/pathway';
import {
  generateForwardRoadmap,
  generateBackwardRoadmap
} from './utils/roadmapEngine';
import { localizeGraph } from './utils/roadmapLocalizer';
import { MobileAppShell } from './components/MobileAppShell';
import { MobileRoadmapView } from './components/MobileRoadmapView';
import { MobileBottomSheet } from './components/MobileBottomSheet';
import { MobileMoreView } from './components/MobileMoreView';
import { ForwardPathFinder } from './components/ForwardPathFinder';
import { BackwardPathFinder } from './components/BackwardPathFinder';
import { DegreeReverseLookup } from './components/DegreeReverseLookup';
import { PathComparisonView } from './components/PathComparisonView';
import { CareerTransitionMatrix } from './components/CareerTransitionMatrix';
import { ExamCalendarView } from './components/ExamCalendarView';
import { AiCounselorModal } from './components/AiCounselorModal';
import { SavedRoadmapsDrawer } from './components/SavedRoadmapsDrawer';
import { UniversalSearchModal } from './components/UniversalSearchModal';

export default function App() {
  // User Profile with Context & Onboarding
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

  // Navigation tab in the Mobile App
  const [activeTab, setActiveTab] = useState<string>('canvas');

  // Step Progress Tracking (Section 4 Requirement: completedStepIds)
  const [completedStepIds, setCompletedStepIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('pathway_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  // Active Roadmap Graph (Language-localized)
  const [graph, setGraph] = useState<PathwayGraph>(() => 
    localizeGraph(generateForwardRoadmap(profile), profile.language)
  );

  // Selected Node Bottom Sheet
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync profile to local storage
  useEffect(() => {
    localStorage.setItem('pathway_profile', JSON.stringify(profile));
  }, [profile]);

  // Sync bookmarks to local storage
  useEffect(() => {
    localStorage.setItem('pathway_bookmarks', JSON.stringify(savedNodes));
  }, [savedNodes]);

  // Sync progress to local storage
  useEffect(() => {
    localStorage.setItem('pathway_progress', JSON.stringify(completedStepIds));
  }, [completedStepIds]);

  // Handle Dynamic Language Switch
  const handleLanguageChange = (newLang: LanguageCode) => {
    const updated = { ...profile, language: newLang };
    setProfile(updated);

    let newGraph: PathwayGraph;
    if (graph.id.startsWith('backward_roadmap_')) {
      const jobId = graph.id.replace('backward_roadmap_', '');
      newGraph = localizeGraph(generateBackwardRoadmap(jobId, updated.currentStage), newLang);
    } else {
      newGraph = localizeGraph(generateForwardRoadmap(updated), newLang);
    }
    setGraph(newGraph);

    if (selectedNode) {
      const updatedNode = newGraph.nodes.find(n => n.id === selectedNode.id);
      if (updatedNode) setSelectedNode(updatedNode);
    }
  };

  // Handle Quick Stream Switch
  const handleStreamChange = (streamCode: string) => {
    const updated = { ...profile, selectedStream: streamCode };
    setProfile(updated);
    const newGraph = localizeGraph(generateForwardRoadmap(updated), updated.language);
    setGraph(newGraph);
  };

  // Handle Quick Stage Switch
  const handleStageChange = (stage: string) => {
    const updated = { ...profile, currentStage: stage as any };
    setProfile(updated);
    const newGraph = localizeGraph(generateForwardRoadmap(updated), updated.language);
    setGraph(newGraph);
  };

  // Handle Target Job Select (Backward Mode)
  const handleSelectTargetJob = (jobId: string) => {
    const rawGraph = generateBackwardRoadmap(jobId, profile.currentStage);
    const localized = localizeGraph(rawGraph, profile.language);
    setGraph(localized);
    setActiveTab('canvas');
  };

  // Handle Bookmark Toggle
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

  // Handle Step Completion Toggle (Section 4)
  const handleToggleCompleteStep = (stepId: string) => {
    setCompletedStepIds(prev => {
      if (prev.includes(stepId)) {
        return prev.filter(id => id !== stepId);
      } else {
        return [...prev, stepId];
      }
    });
  };

  // Handle Reset Progress
  const handleResetProgress = () => {
    setCompletedStepIds([]);
  };

  // Live Presentation Persona Preset Handler
  const handleSelectPersona = (persona: 'RAHUL_10TH' | 'SNEHA_BIPC' | 'KIRAN_DIPLOMA' | 'POOJA_MEC' | 'ARJUN_HEC') => {
    let newProfile: UserProfile = { ...profile };

    switch (persona) {
      case 'RAHUL_10TH':
        newProfile = {
          currentStage: 'CLASS_10',
          board: 'CBSE',
          state: 'ALL',
          selectedStream: 'MPC',
          interests: ['tech', 'core_engg'],
          parentMode: false,
          language: profile.language
        };
        break;
      case 'SNEHA_BIPC':
        newProfile = {
          currentStage: 'CLASS_11_12',
          board: 'AP_STATE',
          state: 'AP',
          selectedStream: 'BiPC',
          interests: ['medical'],
          parentMode: false,
          language: profile.language
        };
        break;
      case 'KIRAN_DIPLOMA':
        newProfile = {
          currentStage: 'DIPLOMA_3YR',
          board: 'TS_STATE',
          state: 'TS',
          selectedStream: 'POLYTECHNIC',
          interests: ['core_engg', 'tech'],
          parentMode: false,
          language: profile.language
        };
        break;
      case 'POOJA_MEC':
        newProfile = {
          currentStage: 'CLASS_11_12',
          board: 'CBSE',
          state: 'ALL',
          selectedStream: 'MEC',
          interests: ['finance', 'tech'],
          parentMode: false,
          language: profile.language
        };
        break;
      case 'ARJUN_HEC':
        newProfile = {
          currentStage: 'CLASS_11_12',
          board: 'CBSE',
          state: 'ALL',
          selectedStream: 'HEC',
          interests: ['law', 'civil_services'],
          parentMode: false,
          language: profile.language
        };
        break;
    }

    setProfile(newProfile);
    const newGraph = localizeGraph(generateForwardRoadmap(newProfile), newProfile.language);
    setGraph(newGraph);
    setActiveTab('canvas');
  };

  return (
    <>
      <MobileAppShell
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        profile={profile}
        setProfile={setProfile}
        onOpenAiCounselor={() => setIsAiCounselorOpen(true)}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        savedCount={savedNodes.length}
        onSelectPersona={handleSelectPersona}
        onLanguageChange={handleLanguageChange}
      >
        {/* Tab 1: Roadmap View (Vertical Metro Subway Canvas) */}
        {activeTab === 'canvas' && (
          <MobileRoadmapView
            graph={graph}
            onSelectNode={(node) => setSelectedNode(node)}
            selectedNodeId={selectedNode?.id}
            parentMode={profile.parentMode}
            onOpenAiCounselor={() => setIsAiCounselorOpen(true)}
            currentStream={profile.selectedStream}
            onChangeStream={handleStreamChange}
            currentStage={profile.currentStage}
            onChangeStage={handleStageChange}
            language={profile.language}
            userProfile={profile}
            completedStepIds={completedStepIds}
            onToggleCompleteStep={handleToggleCompleteStep}
            onResetProgress={handleResetProgress}
          />
        )}

        {/* Tab 2: Forward Wizard */}
        {activeTab === 'forward' && (
          <div className="p-3 sm:p-4">
            <ForwardPathFinder
              profile={profile}
              setProfile={setProfile}
              language={profile.language}
              onGenerateRoadmap={() => {
                const newGraph = localizeGraph(generateForwardRoadmap(profile), profile.language);
                setGraph(newGraph);
                setActiveTab('canvas');
              }}
            />
          </div>
        )}

        {/* Tab 3: Target Careers Search */}
        {activeTab === 'backward' && (
          <div className="p-3 sm:p-4">
            <BackwardPathFinder
              onSelectTargetJob={handleSelectTargetJob}
              language={profile.language}
            />
          </div>
        )}

        {/* Tab 4: Path Comparison */}
        {activeTab === 'compare' && (
          <div className="p-3 sm:p-4">
            <PathComparisonView
              language={profile.language}
            />
          </div>
        )}

        {/* Tab 5: More Hub (Career Switch, Exams, Degree Lookup, Preferences) */}
        {activeTab === 'more' && (
          <MobileMoreView
            onNavigate={(tab) => setActiveTab(tab)}
            onOpenAiCounselor={() => setIsAiCounselorOpen(true)}
            onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
            parentMode={profile.parentMode}
            onToggleParentMode={(val) => setProfile({ ...profile, parentMode: val })}
            language={profile.language}
            onSetLanguage={handleLanguageChange}
            savedCount={savedNodes.length}
            onSelectPersona={handleSelectPersona}
          />
        )}

        {/* Direct Sub-Views from More menu */}
        {activeTab === 'transitions' && (
          <div className="p-3 sm:p-4 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <button
                type="button"
                onClick={() => setActiveTab('more')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
              >
                ← Back to Menu
              </button>
            </div>
            <CareerTransitionMatrix />
          </div>
        )}

        {activeTab === 'exams' && (
          <div className="p-3 sm:p-4 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <button
                type="button"
                onClick={() => setActiveTab('more')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
              >
                ← Back to Menu
              </button>
            </div>
            <ExamCalendarView />
          </div>
        )}

        {activeTab === 'degree_lookup' && (
          <div className="p-3 sm:p-4 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <button
                type="button"
                onClick={() => setActiveTab('more')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
              >
                ← Back to Menu
              </button>
            </div>
            <DegreeReverseLookup
              onSelectCareer={handleSelectTargetJob}
            />
          </div>
        )}
      </MobileAppShell>

      {/* Native Mobile Bottom Sheet for Node Details (7-Question Evidence System) */}
      <MobileBottomSheet
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
        onAskAi={(node) => {
          setSelectedNode(node);
          setIsAiCounselorOpen(true);
        }}
        onToggleBookmark={handleToggleBookmark}
        isBookmarked={savedNodes.some(n => n.id === selectedNode?.id)}
        language={profile.language}
        userProfile={profile}
        isCompleted={completedStepIds.includes(selectedNode?.id || '')}
        onToggleCompleteStep={handleToggleCompleteStep}
      />

      {/* Grounded AI Counselor Modal / Sheet */}
      <AiCounselorModal
        isOpen={isAiCounselorOpen}
        onClose={() => setIsAiCounselorOpen(false)}
        graphContext={graph}
        selectedNodeContext={selectedNode}
        defaultLanguage={profile.language}
      />

      {/* Saved Bookmarks Drawer */}
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

      {/* Universal Search Modal (Section L) */}
      <UniversalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCareer={handleSelectTargetJob}
        onSelectStream={handleStreamChange}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          setIsSearchOpen(false);
        }}
        language={profile.language}
      />
    </>
  );
}
