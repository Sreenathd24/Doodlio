import React from "react";
import { motion } from "motion/react";
import "../styles/skills/skills.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SkillIcon from "../assets/SkillIcon";

const DoodleFlex = () => (
  <svg width="26" height="26" viewBox="0 0 64 64" fill="none">
    <path
      d="M36 6 L18 34 H30 L26 58 L46 28 H34 Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const skillCategories = [
  {
    title: "Frontend Magic",
    emoji: "🎨",
    skills: [
      "React & Next.js",
      "TypeScript",
      "CSS/SCSS",
      "Tailwind CSS",
      "Motion/Framer Motion",
    ],
    color: "frontend",
  },
  {
    title: "Backend Wizardry",
    emoji: "⚙️",
    skills: [
      "Node.js & Express",
      "Python & Django",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
    color: "backend",
  },
  {
    title: "Dev Tools",
    emoji: "🛠️",
    skills: ["Git & GitHub", "VS Code", "Docker", "Figma", "Chrome DevTools"],
    color: "tools",
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  return (
    <>
      <section id="skills" ref={ref} className="doodle-skills">
        {/* Background doodles */}
        <div className="skills-doodles">
          <div className="doodle trophy">🏆</div>
          <div className="doodle sparkles">✨</div>
          <div className="doodle code">💻</div>
        </div>

        <div className="skills-container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="skills-title">
              My Skillz
              <span className="emoji">
                <DoodleFlex />
              </span>
            </h2>
            <p className="skills-subtitle">
              (yes, with a 'z' because I'm cool like that)
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{
                  y: 50,
                  opacity: 0,
                  rotate: index % 2 === 0 ? -5 : 5,
                }}
                animate={
                  isVisible
                    ? { y: 0, opacity: 1, rotate: index % 2 === 0 ? -1 : 1 }
                    : {}
                }
                transition={{
                  delay: 0.1 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className="skill-category"
              >
                <motion.div
                  className={`category-box ${category.color}`}
                  whileHover={{ scale: 1.02, rotate: 0 }}
                >
                  <div className="category-header">
                    <span className="icon">{category.emoji}</span>
                    <h3>{category.title}</h3>
                  </div>
                  <ul className="skills-list">
                    {category.skills.map((skill, i) => (
                      <li key={i}>
                        <motion.span
                          className="checkmark"
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <SkillIcon name={skill} />
                        </motion.span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={isVisible ? { scale: 1, rotate: -2 } : {}}
            transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
            className="skills-note"
          >
            <p className="note-title">Pro Tip:</p>
            <p className="note-text">
              If you don't see a skill here, I can probably learn it by next
              Tuesday. Or at least fake it convincingly. 😉
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
