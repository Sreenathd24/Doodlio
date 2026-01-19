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
                  Hey there! I'm a developer who loves turning{" "}
                  <span className="highlight">coffee into code</span> and bugs
                  into features.
                </p>
                <p>
                  With <strong>3+ years</strong> in the trenches, I’ve mastered
                  the art of the "perfect search" because knowing the answer is
                  good, but finding it in seconds is a superpower.
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
                  <li>
                    I read documentation so others don’t have to. (Sometimes.)
                  </li>
                  <li>I turn “quick fixes” into long-term relationships.</li>

                  <li>I believe every bug teaches patience.</li>

                  <li>I ship fast so I can fix faster.</li>
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
