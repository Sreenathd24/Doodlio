import React, { useState } from "react";
import { motion } from "motion/react";
import "../styles/about/about.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import AboutmeDoodle from "../assets/aboutme";

const About = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  return (
    <>
      <section id="about" ref={ref} className="doodle-about">
        {/* Background doodles */}
        <div className="about-doodles">
          <div className="doodle coffee">📚</div>
          <div className="doodle rocket">💻</div>
          <div className="doodle star">⭐</div>
        </div>

        <div className="about-container">
          <motion.div
            initial={{ y: 30, opacity: 0, rotate: -3 }}
            animate={isVisible ? { y: 0, opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-title">
              About Me
              <span className="emoji">☺</span>
            </h2>
          </motion.div>

          <div className="about-content">
            {/* Photo section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="about-photo"
            >
              <div className="polaroid">
                <div className="photo-frame">
                  {" "}
                  <AboutmeDoodle />
                </div>
                <p className="caption">me @ my desk</p>
              </div>
              <div className="tape tape-1" />
              <div className="tape tape-2" />
            </motion.div>

            {/* Text section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="about-text"
            >
              <div className="story">
                <p>
                  Hey there! 👋 I'm a developer who loves turning{" "}
                  <span className="highlight">coffee into code</span> and bugs
                  into features (totally on purpose).
                </p>
                <p>
                  I've been coding for <strong>3+ years</strong>, and I still
                  Google "how to center a div" at least once a week.
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "#e74c3c",
                      marginLeft: "8px",
                      fontStyle: "italic",
                    }}
                  >
                    (true story)
                  </span>
                </p>
                <p>
                  When I'm not debugging at 2 AM, you'll find me experimenting
                  with new frameworks, contributing to open source, or
                  pretending I understand design patterns.
                </p>
              </div>

              <div className="fun-facts">
                <h3 className="facts-title">Fun Facts About Me:</h3>
                <ul className="facts-list">
                  <li>I name my variables after food 🍕</li>
                  <li>My rubber duck is my best coworker 🦆</li>
                  <li>I have 47 side projects (3 are "almost done") 📦</li>
                  <li>Tabs vs Spaces? I use both to watch the world burn 🔥</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
