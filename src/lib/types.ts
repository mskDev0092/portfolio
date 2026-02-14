export interface Certification {
  title: string;
  provider: string;
  link: string;
  completed?: boolean;
}

export interface Project {
  title: string;
  github: string;
  live?: string;
  stack: string;
  topics: string;
  from: string;
  completed?: boolean;
}

export interface SkillCategory {
  name: string;
  certifications: Certification[];
  unlocked: boolean;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  type: "certification" | "project" | "challenge";
  target: string;
  completed: boolean;
  requiredLevel?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface GameState {
  level: number;
  xp: number;
  xpToNext: number;
  totalXp: number;
  completedQuests: string[];
  unlockedAchievements: string[];
  currentChapter: number;
  skillPoints: number;
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  narrative: string;
  icon: string;
}
