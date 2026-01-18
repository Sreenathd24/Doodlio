import React from "react";
import { motion } from "motion/react";
import "../styles/home/home.css";

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const Doodles = {
    star: "☆",
    sparkle: "✨",
    smiley: "☺",
    arrow: "→",
    coffee: " ☕",
    rocket: "🚀",
  };

  return (
    <>
      <section id="home" className="doodle-hero">
        {/* Doodle decorations */}
        <div className="hero-doodles">
          <motion.div
            className="doodle star-top-left"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ☆
          </motion.div>
          <motion.div
            className="doodle heart-top-right"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <motion.div
            className="doodle arrow-bottom-left"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            ☺
          </motion.div>
          <motion.div
            className="doodle check-bottom-right"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            →
          </motion.div>
          <motion.div
            className="doodle coffee"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            ☕
          </motion.div>
          <motion.div
            className="doodle rocket"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            🚀
          </motion.div>
        </div>

        <div className="hero-container">
          {/* Hand-drawn name */}
          <motion.div
            initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
          >
            <motion.h1
              className="hero-title"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {"Sreenath Dharman".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="letter"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    y: -10,
                    color: "var(--marker-blue)",
                    scale: 1.2,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Subtitle with role */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="hero-subtitle">
              <span
                style={{
                  textDecoration: "line-through",
                  opacity: 0.5,
                  fontStyle: "italic",
                }}
              >
                Professional Adult
              </span>{" "}
              <span className="role"> Full stack MERN developer</span>
            </p>
            <p className="hero-tagline">
              (because frontend alone isn't enough)
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hero-buttons"
          >
            <motion.button
              onClick={scrollToProjects}
              className="hero-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See My Stuff
              <motion.span
                className="arrow"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                ✨
              </motion.span>
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="hero-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Chat
              <span className="arrow">→</span>
            </motion.button>
          </motion.div>

          {/* Fun note */}
          <motion.div
            initial={{ scale: 0, rotate: -10, opacity: 0 }}
            animate={{ scale: 1, rotate: 2, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 150 }}
            className="hero-note"
          >
            <p className="note-text">
              ✨ Currently accepting: cool projects, coffee, & high-fives ✨
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
