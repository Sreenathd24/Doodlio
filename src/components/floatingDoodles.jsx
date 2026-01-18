import { motion } from "motion/react";
import "../styles/floatingDoodles/floatingdoosles.css";

const doodles = [
  { emoji: "☆", size: 40, delay: 0 },
  { emoji: "✨", size: 35, delay: 0.5 },
  { emoji: "♥", size: 38, delay: 1 },
  { emoji: "→", size: 42, delay: 1.5 },
  { emoji: "☺", size: 45, delay: 2 },
  { emoji: "✓", size: 36, delay: 2.5 },
  { emoji: "☀", size: 40, delay: 3 },
  { emoji: "★", size: 38, delay: 3.5 },
];

export function FloatingDoodles() {
  return (
    <div className="floating-doodles">
      {doodles.map((doodle, index) => (
        <motion.div
          key={index}
          className="floating-emoji"
          style={{
            fontSize: doodle.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: doodle.delay,
            ease: "easeInOut",
          }}
        >
          {doodle.emoji}
        </motion.div>
      ))}

      {/* Squiggly lines */}
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={`line-${i}`}
          className="floating-squiggle"
          width="200"
          height="200"
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path
            d={`M10,100 Q50,${50 + i * 10} 100,100 T190,100`}
            stroke="var(--marker-blue)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>
      ))}
    </div>
  );
}
