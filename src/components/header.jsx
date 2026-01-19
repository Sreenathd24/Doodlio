import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FileText, Menu, X } from "lucide-react";
import Logo from "../assets/logo";
import "../styles/header/header.css";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const HeaderComponent = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* 🔍 Scroll spy */
  useEffect(() => {
    const handleScroll = () => {
      for (const item of navigationLinks) {
        const id = item.href.slice(1);
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setCurrentPage(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔒 Lock body scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="doodle-navigation">
        <div className="nav-container">
          <div className="nav-content">
            <motion.div
              className="nav-logo"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Logo />
            </motion.div>

            <div className="nav-menu">
              {navigationLinks.map((item, index) => (
                <motion.div
                  key={item.href}
                  className="nav-link"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                >
                  <span>{item.label}</span>

                  {currentPage === item.href.slice(1) && (
                    <motion.div layoutId="scribble">
                      <svg
                        className="nav-underline"
                        viewBox="0 0 100 8"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,4 Q25,2 50,4 T100,4"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              <motion.a
                href={`${import.meta.env.BASE_URL}Sreenath Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                <FileText size={18} />
                <span>Resume</span>
                <svg className="resume-underline" viewBox="0 0 120 6">
                  <path
                    d="M2,3 Q30,1 60,3 T118,3"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.a>
            </div>

            <button
              className="nav-burger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="mobile-backdrop"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              {navigationLinks.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`mobile-link ${
                    currentPage === item.href.slice(1) ? "active" : ""
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="mobile-doodle">☆ ♥ ↗</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderComponent;
