"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing Core...");

  const statuses = [
    "Initializing Core...",
    "Loading Assets...",
    "Establishing Connection...",
    "Synchronizing Data...",
    "Preparing Interface...",
    "Ready",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 20;
        setStatus(
          statuses[Math.min(Math.floor(newProgress / 20), statuses.length - 1)],
        );
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
        }
        return Math.min(newProgress, 100);
      });
    }, 400);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-darkBg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <div className="font-display text-4xl md:text-6xl font-bold text-neonBlue neon-text-blue mb-2">
          SYSTEM BOOT
        </div>
        <div className="font-body text-gray-400 text-lg mb-8">
          Digital Odyssey v2.0
        </div>

        <div className="w-64 md:w-80 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-neonBlue via-neonPurple to-neonGreen"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="font-mono text-neonGreen text-sm">{status}</div>

        <div className="mt-4 flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-neonBlue"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
