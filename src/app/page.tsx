"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { Starfield } from "@/components/portfolio/Overlays";
import { HudHeader, Footer } from "@/components/portfolio/Layout";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/components/portfolio/Sections";
import { StoryModeModal } from "@/components/portfolio/StoryModeModal";

// Lib / Hooks
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { USER_DATA, generateQuests } from "@/lib/data";
import { GameState, Quest } from "@/lib/types";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isStoryModeOpen, setIsStoryModeOpen] = useState(false);
  const [quests, setQuests] = useState<Quest[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    level: 1,
    xp: 0,
    xpToNext: 100,
    totalXp: 0,
    completedQuests: [],
    unlockedAchievements: [],
    currentChapter: 0,
    skillPoints: 0,
  });

  useEffect(() => {
    setQuests(generateQuests());
    // Potentially load gameState from localStorage here if desired for persistence
  }, []);

  const typingText = useTypingEffect(USER_DATA.typingRoles, 100, 50, 2000);

  return (
    <main className="relative min-h-screen">
      <Starfield />

      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <HudHeader gameState={gameState} />

          <div className="relative z-10">
            <HeroSection
              onStoryMode={() => setIsStoryModeOpen(true)}
              typingText={typingText}
            />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </div>

          <StoryModeModal
            isOpen={isStoryModeOpen}
            onClose={() => setIsStoryModeOpen(false)}
            gameState={gameState}
            setGameState={setGameState}
            quests={quests}
            setQuests={setQuests}
          />
        </>
      )}
    </main>
  );
}
