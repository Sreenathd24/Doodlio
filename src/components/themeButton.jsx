import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import "../styles/themeToggle/themeToggle.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      whileHover={{
        scale: 1.1,
        rotate: 15,
      }}
      whileTap={{
        scale: 0.9,
        rotate: -15,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <motion.div
        className="icon-wrapper"
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      >
        {isDark ? <Moon size={28} /> : <Sun size={28} />}
      </motion.div>

      <div className="annotation">
        {isDark ? "← dark mode!" : "← click me!"}
      </div>

      <motion.div
        className="sparkle"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        ✨
      </motion.div>
    </motion.button>
  );
}
