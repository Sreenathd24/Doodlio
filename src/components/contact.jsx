import React from "react";
import "../styles/contact/contact.css";
import { motion } from "motion/react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Mail, Github, Linkedin, Coffee } from "lucide-react";

const DoodleHello = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60px"
    height="60px"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M4 21V18.5C4 15.4624 6.46243 13 9.5 13H12.8513C15.307 13 17.4651 11.3721 18.1397 9.01097L18.7454 6.89097C18.8961 6.3636 19.3781 6 19.9266 6C20.7258 6 21.3122 6.75106 21.1184 7.5264L19.3638 14.5448C19.15 15.4 18.3816 16 17.5 16M8 21V18M16 6.5C16 8.70914 14.2091 10.5 12 10.5C9.79086 10.5 8 8.70914 8 6.5C8 4.29086 9.79086 2.5 12 2.5C14.2091 2.5 16 4.29086 16 6.5Z"
      stroke="#F3C623"
      stroke-linecap="round"
      stroke-width="1.4"
    />
  </svg>
);

const contactLinks = [
  {
    label: "Email",
    value: "Sreenathdharman99@gmail.com",
    href: "mailto:Sreenathdharman99@gmail.com",
    icon: Mail,
    color: "#e74c3c",
    note: "I check this... sometimes",
  },
  {
    label: "GitHub",
    value: "github.com/Sreenath",
    href: "https://github.com/Sreenathd24",
    icon: Github,
    color: "#F3C623",
    note: "my code lives here",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/Sreenath",
    href: "https://www.linkedin.com/in/sreenath-dharman-214056216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: Linkedin,
    color: "#4a90e2",
    note: "professional mode: ON",
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  return (
    <>
      <section id="contact" ref={ref} className="doodle-contact">
        {/* Background doodles */}
        <div className="contact-doodles">
          <div className="doodle mail">📧</div>
          <div className="doodle chat">💬</div>
          <div className="doodle sparkles">✨</div>
        </div>

        <div className="contact-container">
          <div className="contact-header">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2>
                Let's Be Internet Friends!
                <span className="emoji">
                  <DoodleHello />
                </span>
              </h2>
              <p className="subtitle">
                Or collaborators. Or just say hi. I'm cool with all of it.
              </p>
              <motion.div
                className="arrow-hint"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↓ pick your favorite way to reach me ↓
              </motion.div>
            </motion.div>
          </div>

          {/* Contact cards */}
          <div className="contact-links">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={isVisible ? { x: 0, opacity: 1 } : {}}
                  transition={{
                    delay: 0.2 + index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <motion.div
                    className="sketchy-box"
                    style={{
                      transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                    }}
                    whileHover={{ scale: 1.03, rotate: 0 }}
                  >
                    <div className="content">
                      <motion.div
                        className="icon-circle"
                        style={{
                          borderColor: link.color,
                          backgroundColor: `${link.color}20`,
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={28} style={{ color: link.color }} />
                      </motion.div>

                      <div className="info">
                        <p className="label">{link.label}</p>
                        <p className="value">{link.value}</p>
                        <p className="note">{link.note}</p>
                      </div>

                      <motion.div
                        className="arrow"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.a>
              );
            })}
          </div>

          {/* Fun CTA section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
            className="contact-cta"
          >
            <div className="cta-box">
              <Coffee className="icon" size={24} />
              <p className="title">Got a cool project idea?</p>
              <p className="text">
                Let's grab a virtual coffee and make something awesome together!
              </p>
              <motion.div
                className="subtext"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                (coffee not included, but vibes are)
              </motion.div>
            </div>
          </motion.div>

          {/* Footer with doodles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="contact-footer"
          >
            <div className="emoji-row">
              {["☆", "♥", "✓", "→", "☺"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="emoji"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
            <p className="made-with">
              Made with ❤️, ☕, and way too many doodles
            </p>
            <p className="copyright">
              © {new Date().getFullYear()} Sreenath Dharman
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Contact;
