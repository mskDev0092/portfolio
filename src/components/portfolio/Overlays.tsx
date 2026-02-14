"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Starfield Background
export const Starfield = () => {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; size: number; duration: number }>
  >([]);

  useEffect(() => {
    setMounted(true);
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 20 + 10,
    }));
    setStars(generatedStars);
  }, []);

  if (!mounted) return <div className="fixed inset-0 bg-[#050b14] z-0" />;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-darkerBg to-darkBg" />
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-50"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              animation: `star-move ${star.duration}s linear infinite`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <style jsx global>{`
        @keyframes star-move {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100vw);
          }
        }
      `}</style>
    </div>
  );
};

// XP Popup Component
export const XpPopup = ({
  amount,
  onComplete,
}: {
  amount: number;
  onComplete: () => void;
}) => (
  <motion.div
    initial={{ opacity: 1, y: 0, scale: 1 }}
    animate={{ opacity: 0, y: -50, scale: 1.5 }}
    transition={{ duration: 2 }}
    onAnimationComplete={onComplete}
    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-display font-bold text-neonGreen neon-text-green z-[100] pointer-events-none"
  >
    +{amount} XP
  </motion.div>
);

// Level Up Overlay
export const LevelUpOverlay = ({
  level,
  onComplete,
}: {
  level: number;
  onComplete: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 1.5] }}
    transition={{ duration: 2 }}
    onAnimationComplete={onComplete}
    className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none"
  >
    <div className="text-center">
      <motion.div
        className="text-6xl md:text-8xl font-display font-black text-neonPurple neon-text-purple mb-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: 3 }}
      >
        LEVEL UP!
      </motion.div>
      <div className="text-4xl md:text-6xl font-display text-white">
        Level {level}
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-radial from-neonPurple/30 via-transparent to-transparent" />
  </motion.div>
);
