"use client";

import { motion } from "framer-motion";
import { GameState } from "@/lib/types";

export const HudHeader = ({ gameState }: { gameState: GameState }) => (
  <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-neonBlue/30">
    <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <i className="fa-solid fa-microchip text-neonBlue text-2xl" />
        </motion.div>
        <div>
          <h1 className="font-display text-lg md:text-xl font-bold tracking-wider text-white">
            MSK<span className="text-neonPurple">DEV</span>
          </h1>
          <div className="text-[10px] text-neonBlue tracking-[0.2em] uppercase">
            Portfolio v2.0
          </div>
        </div>
      </div>

      {/* Game Stats */}
      <div className="hidden md:flex items-center gap-6">
        <div className="text-center">
          <div className="text-xs text-gray-400 uppercase tracking-wider">
            Level
          </div>
          <div className="text-neonGreen font-display font-bold text-xl">
            {gameState.level.toString().padStart(2, "0")}
          </div>
        </div>

        <div className="w-32 lg:w-40">
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-neonBlue">XP</span>
            <span className="text-white font-mono">
              {gameState.xp}/{gameState.xpToNext}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neonBlue to-neonPurple"
              initial={{ width: 0 }}
              animate={{
                width: `${(gameState.xp / gameState.xpToNext) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="text-center">
          <div className="text-xs text-gray-400 uppercase tracking-wider">
            Skill Points
          </div>
          <div className="text-neonPurple font-display font-bold text-xl">
            {gameState.skillPoints}
          </div>
        </div>
      </div>
    </div>
  </header>
);

export const Footer = () => (
  <footer className="py-8 px-4 border-t border-neonBlue/20">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <i className="fa-solid fa-microchip text-neonBlue" />
        <span className="font-display text-white">
          MSK<span className="text-neonPurple">DEV</span>
        </span>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/mskDev0092"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neonBlue transition"
        >
          <i className="fa-brands fa-github text-xl" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neonBlue transition"
        >
          <i className="fa-brands fa-linkedin text-xl" />
        </a>
      </div>
      <div className="text-gray-500 text-sm">
        © 2024 mskDev0092. All rights reserved.
      </div>
    </div>
  </footer>
);
