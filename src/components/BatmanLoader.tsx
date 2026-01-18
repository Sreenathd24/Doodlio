import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import '../styles/loading/BatmanLoader.css';

export function BatmanLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="batman-loader"
        >
          {/* Bat signal effect */}
          <motion.div
            className="bat-signal"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="glow" />
          </motion.div>

          {/* Batman logo */}
          <motion.div
            className="batman-logo"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          >
            <motion.svg
              width="200"
              height="100"
              viewBox="0 0 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <path
                d="M100 20 L120 30 L140 25 L150 35 L165 30 L180 40 L190 35 L185 50 L175 60 L160 55 L150 65 L140 60 L130 70 L120 65 L110 75 L100 80 L90 75 L80 65 L70 70 L60 60 L50 65 L40 55 L25 60 L15 50 L10 35 L20 40 L35 30 L50 35 L60 25 L80 30 L100 20 Z"
                fill="#2a2a2a"
                stroke="#f9d71c"
                strokeWidth="2"
              />
            </motion.svg>
          </motion.div>

          {/* Loading text with handwritten style */}
          <motion.div
            className="loading-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.5 }}
          >
            <motion.p
              className="main-text"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Loading awesome stuff...
            </motion.p>
            <br />
            <motion.p className="sub-text">
              (the hero you deserve)
            </motion.p>
          </motion.div>

          {/* Doodle decorations */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="doodle-decoration"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0, 1, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {['☆', '✨', '→', '♥'][i % 4]}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}