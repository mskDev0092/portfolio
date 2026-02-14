"use client";

import { useState, useCallback, Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Quest, GameState } from "@/lib/types";
import { STORY_CHAPTERS, ACHIEVEMENTS } from "@/lib/data";
import { XpPopup, LevelUpOverlay } from "./Overlays";

// Quest Card Component
export const QuestCard = ({
  quest,
  onComplete,
  compact = false,
}: {
  quest: Quest;
  onComplete: () => void;
  compact?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className={cn(
      "quest-card glass-panel rounded-lg transition-all",
      quest.completed ? "completed opacity-60" : "",
      compact ? "p-3" : "p-4",
    )}
  >
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
          quest.completed ? "bg-neonPurple/20" : "bg-neonBlue/20",
        )}
      >
        <i
          className={cn(
            quest.completed
              ? "fa-solid fa-check text-neonPurple"
              : "fa-solid fa-circle text-neonBlue",
          )}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h5
          className={cn(
            "font-bold text-white truncate",
            compact ? "text-sm" : "text-base",
          )}
        >
          {quest.title}
        </h5>
        {!compact && (
          <p className="text-gray-400 text-sm truncate">{quest.description}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="border-neonGreen text-neonGreen">
          +{quest.xpReward} XP
        </Badge>
        {!quest.completed && (
          <>
            <Button
              size="sm"
              onClick={onComplete}
              className="bg-neonGreen/20 text-neonGreen hover:bg-neonGreen hover:text-black hidden sm:flex"
            >
              Complete
            </Button>
            <Button
              size="sm"
              variant="outline"
              asChild
              className="border-neonBlue/30 text-neonBlue hover:bg-neonBlue/10"
            >
              <a href={quest.target} target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-external-link-alt" />
              </a>
            </Button>
          </>
        )}
      </div>
    </div>
    {!quest.completed && (
      <Button
        size="sm"
        onClick={onComplete}
        className="w-full mt-3 bg-neonGreen/20 text-neonGreen hover:bg-neonGreen hover:text-black sm:hidden"
      >
        Complete Quest
      </Button>
    )}
  </motion.div>
);

// Story Mode Modal
export const StoryModeModal = ({
  isOpen,
  onClose,
  gameState,
  setGameState,
  quests,
  setQuests,
}: {
  isOpen: boolean;
  onClose: () => void;
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
  quests: Quest[];
  setQuests: Dispatch<SetStateAction<Quest[]>>;
}) => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [showXpPopup, setShowXpPopup] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [activeTab, setActiveTab] = useState("story");

  const handleCompleteQuest = useCallback(
    (questId: string) => {
      const quest = quests.find((q) => q.id === questId);
      if (!quest || quest.completed) return;

      setQuests((prev) =>
        prev.map((q) => (q.id === questId ? { ...q, completed: true } : q)),
      );

      setXpGained(quest.xpReward);
      setShowXpPopup(true);

      setGameState((prev) => {
        let newXp = prev.xp + quest.xpReward;
        let newLevel = prev.level;
        let newXpToNext = prev.xpToNext;
        let newSkillPoints = prev.skillPoints;
        let leveledUp = false;

        while (newXp >= newXpToNext) {
          newXp -= newXpToNext;
          newLevel++;
          newXpToNext = Math.floor(newXpToNext * 1.5);
          newSkillPoints++;
          leveledUp = true;
        }

        if (leveledUp) {
          setTimeout(() => setShowLevelUp(true), 2000);
        }

        return {
          ...prev,
          xp: newXp,
          level: newLevel,
          xpToNext: newXpToNext,
          totalXp: prev.totalXp + quest.xpReward,
          completedQuests: [...prev.completedQuests, questId],
          skillPoints: newSkillPoints,
        };
      });
    },
    [quests, setQuests, setGameState],
  );

  const completedCount = quests.filter((q) => q.completed).length;
  const totalQuests = quests.length;

  const getCategoryQuests = (category: string) => {
    return quests.filter((q) => q.id.startsWith(category));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full h-full sm:h-[90vh] sm:max-w-4xl top-0 left-0 translate-x-0 translate-y-0 sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] game-modal p-0 overflow-hidden flex flex-col rounded-none sm:rounded-xl border-none sm:border border-neonBlue/30 shadow-none sm:shadow-2xl">
        {/* Header */}
        <div className="relative p-3 sm:p-6 border-b border-neonBlue/30 shrink-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonBlue via-neonPurple to-neonGreen" />
          <DialogHeader className="gap-1 sm:gap-2">
            <DialogTitle className="font-display text-lg sm:text-2xl md:text-3xl text-white flex items-center gap-2 sm:gap-3">
              <i className="fa-solid fa-gamepad text-neonPurple" />
              <span className="truncate">Digital Odyssey</span>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <Badge className="bg-neonGreen/20 text-neonGreen border-neonGreen shrink-0">
                Level {gameState.level}
              </Badge>
              <span className="text-gray-400 text-xs sm:text-sm shrink-0">
                {completedCount}/{totalQuests} Quests
              </span>
            </div>
            <div className="flex-1 sm:max-w-xs">
              <Progress
                value={(gameState.xp / gameState.xpToNext) * 100}
                className="h-2"
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full flex-1 flex flex-col min-h-0"
        >
          <div className="border-b border-neonBlue/30 px-4 sm:px-6 overflow-x-auto shrink-0">
            <TabsList className="bg-transparent h-auto p-0 flex">
              {["story", "quests", "achievements", "map"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="data-[state=active]:bg-transparent data-[state=active]:text-neonBlue data-[state=active]:border-b-2 data-[state=active]:border-neonBlue px-3 sm:px-4 py-3 rounded-none text-gray-400 capitalize text-xs sm:text-sm"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <ScrollArea className="flex-1 w-full">
            <div className="p-4 sm:p-6 min-h-full pb-12">
              {/* Story Tab */}
              <TabsContent
                value="story"
                className="m-0 focus-visible:outline-none flex-1 flex flex-col"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentChapter}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6 flex-1 flex flex-col min-h-[400px]"
                  >
                    <div className="text-center mb-8">
                      <span className="text-5xl sm:text-6xl">
                        {STORY_CHAPTERS[currentChapter].icon}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-neonPurple mt-4">
                        {STORY_CHAPTERS[currentChapter].title}
                      </h3>
                      <p className="text-neonBlue text-base sm:text-lg">
                        {STORY_CHAPTERS[currentChapter].subtitle}
                      </p>
                    </div>

                    <div className="glass-panel p-4 sm:p-6 rounded-lg whitespace-pre-wrap text-gray-300 text-sm sm:text-base leading-relaxed font-body min-h-[150px]">
                      {STORY_CHAPTERS[currentChapter].narrative}
                    </div>

                    {/* Chapter Content */}
                    {currentChapter > 0 &&
                      currentChapter < STORY_CHAPTERS.length - 1 && (
                        <div className="space-y-4">
                          <h4 className="font-display text-lg sm:text-xl text-white flex items-center gap-2">
                            <i className="fa-solid fa-trophy text-neonGreen" />
                            Chapter Quests
                          </h4>
                          <div className="grid gap-3">
                            {currentChapter === 1 &&
                              getCategoryQuests("cert_frontend").map(
                                (quest) => (
                                  <QuestCard
                                    key={quest.id}
                                    quest={quest}
                                    onComplete={() =>
                                      handleCompleteQuest(quest.id)
                                    }
                                  />
                                ),
                              )}
                            {currentChapter === 2 &&
                              getCategoryQuests("cert_backend").map((quest) => (
                                <QuestCard
                                  key={quest.id}
                                  quest={quest}
                                  onComplete={() =>
                                    handleCompleteQuest(quest.id)
                                  }
                                />
                              ))}
                            {currentChapter === 3 &&
                              getCategoryQuests("cert_ai").map((quest) => (
                                <QuestCard
                                  key={quest.id}
                                  quest={quest}
                                  onComplete={() =>
                                    handleCompleteQuest(quest.id)
                                  }
                                />
                              ))}
                            {currentChapter === 4 &&
                              getCategoryQuests("cert_cloud").map((quest) => (
                                <QuestCard
                                  key={quest.id}
                                  quest={quest}
                                  onComplete={() =>
                                    handleCompleteQuest(quest.id)
                                  }
                                />
                              ))}
                            {currentChapter === 5 &&
                              getCategoryQuests("cert_testing").map((quest) => (
                                <QuestCard
                                  key={quest.id}
                                  quest={quest}
                                  onComplete={() =>
                                    handleCompleteQuest(quest.id)
                                  }
                                />
                              ))}
                            {currentChapter === 6 &&
                              getCategoryQuests("proj_")
                                .slice(0, 5)
                                .map((quest) => (
                                  <QuestCard
                                    key={quest.id}
                                    quest={quest}
                                    onComplete={() =>
                                      handleCompleteQuest(quest.id)
                                    }
                                  />
                                ))}
                          </div>
                        </div>
                      )}

                    {/* Navigation */}
                    <div className="flex justify-between items-center pt-8 pb-4 sticky bottom-0 bg-background/80 backdrop-blur-md sm:static sm:bg-transparent z-10 -mx-4 px-4 sm:mx-0 sm:px-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentChapter(Math.max(0, currentChapter - 1))
                        }
                        disabled={currentChapter === 0}
                        className="border-neonBlue/30 text-neonBlue hover:bg-neonBlue/10"
                      >
                        <i className="fa-solid fa-arrow-left mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Previous</span>
                      </Button>
                      <div className="flex gap-1.5 sm:gap-2">
                        {STORY_CHAPTERS.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentChapter(i)}
                            className={cn(
                              "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all",
                              i === currentChapter
                                ? "bg-neonBlue scale-125"
                                : "bg-gray-600 hover:bg-gray-500",
                            )}
                          />
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentChapter(
                            Math.min(
                              STORY_CHAPTERS.length - 1,
                              currentChapter + 1,
                            ),
                          )
                        }
                        disabled={currentChapter === STORY_CHAPTERS.length - 1}
                        className="border-neonPurple/30 text-neonPurple hover:bg-neonPurple/10"
                      >
                        <span className="hidden sm:inline">Next</span>
                        <i className="fa-solid fa-arrow-right ml-1 sm:ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>

              {/* Quests Tab */}
              <TabsContent
                value="quests"
                className="m-0 focus-visible:outline-none flex-1"
              >
                <div className="space-y-6">
                  {[
                    "Frontend",
                    "Backend/DevOps",
                    "AI/Generative AI",
                    "Cloud/AWS",
                    "Testing/Other",
                    "Projects",
                  ].map((category, catIndex) => {
                    const categoryKey = [
                      "cert_frontend",
                      "cert_backend",
                      "cert_ai",
                      "cert_cloud",
                      "cert_testing",
                      "proj_",
                    ][catIndex];
                    const categoryQuests = quests.filter((q) =>
                      q.id.startsWith(categoryKey),
                    );
                    const completed = categoryQuests.filter(
                      (q) => q.completed,
                    ).length;

                    return (
                      <div key={category}>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-display text-base sm:text-lg text-white flex items-center gap-2">
                            <i
                              className={cn(
                                catIndex === 0 &&
                                  "fa-solid fa-palette text-neonBlue",
                                catIndex === 1 &&
                                  "fa-solid fa-server text-neonPurple",
                                catIndex === 2 &&
                                  "fa-solid fa-brain text-neonGreen",
                                catIndex === 3 &&
                                  "fa-solid fa-cloud text-cyan-400",
                                catIndex === 4 &&
                                  "fa-solid fa-vial text-yellow-400",
                                catIndex === 5 &&
                                  "fa-solid fa-rocket text-neonPink",
                              )}
                            />
                            {category}
                          </h4>
                          <Badge
                            variant="outline"
                            className="border-gray-600 text-[10px] sm:text-xs"
                          >
                            {completed}/{categoryQuests.length}
                          </Badge>
                        </div>
                        <div className="grid gap-2">
                          {categoryQuests.slice(0, 5).map((quest) => (
                            <QuestCard
                              key={quest.id}
                              quest={quest}
                              onComplete={() => handleCompleteQuest(quest.id)}
                              compact
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Achievements Tab */}
              <TabsContent
                value="achievements"
                className="m-0 focus-visible:outline-none flex-1"
              >
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {ACHIEVEMENTS.map((achievement) => {
                    const isUnlocked = gameState.unlockedAchievements.includes(
                      achievement.id,
                    );
                    return (
                      <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={cn(
                          "p-3 sm:p-4 rounded-lg border text-center transition-all",
                          isUnlocked
                            ? "bg-gradient-to-br from-neonPurple/20 to-neonBlue/20 border-neonPurple"
                            : "bg-gray-900/50 border-gray-700 opacity-50",
                        )}
                      >
                        <div className="text-3xl sm:text-4xl mb-2">
                          {achievement.icon}
                        </div>
                        <h5 className="font-display text-sm sm:text-base text-white mb-1">
                          {achievement.title}
                        </h5>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          {achievement.description}
                        </p>
                        {isUnlocked && (
                          <Badge className="mt-2 bg-neonGreen/20 text-neonGreen border-neonGreen text-[10px]">
                            Unlocked
                          </Badge>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Map Tab */}
              <TabsContent
                value="map"
                className="m-0 focus-visible:outline-none flex-1"
              >
                <div className="flex flex-col items-center">
                  <h4 className="font-display text-lg sm:text-xl text-white mb-6">
                    Journey Map
                  </h4>
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {STORY_CHAPTERS.map((chapter, index) => (
                      <motion.button
                        key={chapter.id}
                        onClick={() => {
                          setActiveTab("story");
                          setCurrentChapter(index);
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl transition-all border-2",
                          index < currentChapter
                            ? "bg-gradient-to-br from-neonGreen to-neonBlue border-neonGreen shadow-neon-green"
                            : index === currentChapter
                              ? "bg-gradient-to-br from-neonBlue to-neonPurple border-neonBlue shadow-neon-blue animate-pulse"
                              : "bg-gray-800 border-gray-600 opacity-50",
                        )}
                      >
                        {chapter.icon}
                      </motion.button>
                    ))}
                  </div>
                  <div className="mt-6 text-center text-gray-400 text-xs sm:text-sm">
                    Click on any chapter to jump to it
                  </div>
                </div>
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>

        {/* XP Popup */}
        <AnimatePresence>
          {showXpPopup && (
            <XpPopup
              amount={xpGained}
              onComplete={() => setShowXpPopup(false)}
            />
          )}
        </AnimatePresence>

        {/* Level Up */}
        <AnimatePresence>
          {showLevelUp && (
            <LevelUpOverlay
              level={gameState.level}
              onComplete={() => setShowLevelUp(false)}
            />
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};
