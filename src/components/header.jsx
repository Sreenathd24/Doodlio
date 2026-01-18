import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Logo from "../assets/logo";
import "../styles/header/header.css";
import Marker from "../assets/marker";
import { FileText } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
const HeaderComponent = () => {
  const [currentPage, setCurrentPage] = useState("home");
  console.log("currentPage: ", currentPage);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map((item) => item.href.slice(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setCurrentPage(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    console.log("element: ", element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // setMobileMenuOpen(false);
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
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <Logo />
              {/* <motion.div
                className="doodle star-logo"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              > */}
              {/* ☆ */}
              {/* </motion.div> */}
            </motion.div>

            <div className="nav-menu">
              {navigationLinks?.map((item, index) => (
                <motion.div
                  className="nav-link"
                  key={item.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                >
                  <span>{item.label}</span>
                  {currentPage === item.href.slice(1) && (
                    <motion.div layoutId="scribbleUnderline">
                      <svg
                        className="nav-underline"
                        width="100%"
                        height="8"
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
                href={`${import.meta.env.BASE_URL}Sreenath_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navigationLinks.length * 0.1 }}
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
