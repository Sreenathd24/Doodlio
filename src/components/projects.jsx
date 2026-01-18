import React from "react";
import "../styles/project/project.css";
import { motion } from "motion/react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const DoodleBuilder = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: "var(--ink-black)" }}
  >
    {/* Head */}
    <circle cx="80" cy="30" r="10" stroke="currentColor" strokeWidth="3" />

    {/* Body */}
    <path
      d="M80 40 Q78 65 80 85"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Left arm (placing block) */}
    <path
      d="M80 55 Q60 65 54 80"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Right arm (tool) */}
    <path
      d="M80 55 Q100 60 110 50"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Tool handle */}
    <path
      d="M110 50 L120 40"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Tool head */}
    <rect
      x="118"
      y="34"
      width="18"
      height="8"
      rx="2"
      stroke="currentColor"
      strokeWidth="3"
    />

    {/* Legs (kneeling) */}
    <path
      d="M80 85 Q65 95 60 115"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M80 85 Q90 100 88 118"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Construction blocks */}
    <rect
      x="40"
      y="92"
      width="28"
      height="16"
      rx="3"
      stroke="currentColor"
      strokeWidth="3"
    />
    <rect
      x="42"
      y="76"
      width="28"
      height="16"
      rx="3"
      stroke="currentColor"
      strokeWidth="3"
    />
    <rect
      x="44"
      y="60"
      width="28"
      height="16"
      rx="3"
      stroke="currentColor"
      strokeWidth="3"
    />

    {/* Ground */}
    <path
      d="M20 130 Q80 134 140 130"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.6"
    />

    {/* Motion / effort lines */}
    <path
      d="M56 52 Q50 46 44 50"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M112 28 Q118 24 124 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

const projects = [
  {
    title: "NodeVizor",
    description:
      "Track your caffeine intake and productivity correlation. Spoiler: more coffee = more features.",
    emoji: "☕",
    tags: ["TypeScript", "React"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    rotate: 3,
  },
  {
    title: "Namma Ooru Deals",
    description:
      "Because the world needs more memes. AI-powered caption suggestions included.",
    emoji: "😂",
    tags: ["React", "Express.js", "Node.js", "MonogDB"],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    rotate: -3,
  },
  {
    title: "Detection of Malcious Url",
    description:
      "A todo app that actually makes you want to do things. Features: reminders, procrastination mode, and guilt-tripping notifications.",
    emoji: "📝",
    tags: ["Python", "Numpy", "pandas"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    rotate: -2,
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <section id="projects" ref={ref} className="doodle-projects">
        <div className="projects-doodles">
          <div className="doodle lightbulb">💡</div>
          <div className="doodle star">⭐</div>
        </div>

        <div className="projects-container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="projects-title">
              Stuff I Built
              <span className="emoji">
                <DoodleBuilder />
              </span>
            </h2>
            <p className="projects-subtitle">
              (and some stuff I'm still building... and some I gave up on)
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0, rotate: project.rotate }}
                animate={
                  isVisible ? { y: 0, opacity: 1, rotate: project.rotate } : {}
                }
                transition={{
                  delay: 0.1 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                className="project-card"
              >
                <motion.div
                  className="polaroid"
                  whileHover={{ rotate: 0, y: -8 }}
                >
                  <div
                    className="project-image"
                    style={{ background: project.gradient }}
                  >
                    <span>{project.emoji}</span>
                  </div>
                  <div className="project-info">
                    <h3
                      style={{
                        color:
                          theme !== "dark" ? "#000000" : "var(--paper-lines)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color:
                          theme !== "dark" ? "#000000" : "var(--paper-lines)",
                      }}
                    >
                      {project.description}
                    </p>
                    <div
                      className="tags"
                      style={{
                        color:
                          theme !== "dark" ? "#000000" : "var(--paper-lines)",
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="links">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <Github size={16} />
                        Code
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </div>
                  </div>
                  <div className="tape" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={isVisible ? { scale: 1, rotate: 1 } : {}}
            transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
            className="projects-cta"
          >
            <div className="cta-box">
              <h3 className="cta-title">Want to see more?</h3>
              <p className="cta-text">
                Check out my GitHub for all the unfinished side projects!
              </p>
              <motion.a
                href="#contact"
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
                <span className="arrow">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
