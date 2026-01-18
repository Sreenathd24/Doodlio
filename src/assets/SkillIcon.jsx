export const ReactIcon = () => (
  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="4" fill="currentColor" />
    <ellipse
      cx="32"
      cy="32"
      rx="22"
      ry="8"
      stroke="currentColor"
      strokeWidth="3"
    />
    <ellipse
      cx="32"
      cy="32"
      rx="8"
      ry="22"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
);

export const TypeScriptIcon = () => (
  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
    <rect
      x="10"
      y="10"
      width="44"
      height="44"
      rx="6"
      stroke="currentColor"
      strokeWidth="3"
    />
    <path
      d="M32 20 L32 44"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M24 20 L40 20"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const CssIcon = () => (
  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
    <path
      d="M16 10 L48 10 L44 52 L32 56 L20 52 Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
);

export const TailwindIcon = () => (
  <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
    <path
      d="M10 32 Q22 20 32 32 Q42 44 54 32"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const MotionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
    <path
      d="M16 48 L48 16"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M16 16 L16 48 L48 48"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
);

export const NodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
    <polygon
      points="32,6 54,18 54,46 32,58 10,46 10,18"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
  </svg>
);

export const DjangoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
    <path d="M24 12 L24 52" stroke="currentColor" strokeWidth="3" />
    <path
      d="M24 12 Q44 18 40 32 Q36 44 24 52"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
);

export const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
    <ellipse
      cx="32"
      cy="16"
      rx="20"
      ry="8"
      stroke="currentColor"
      strokeWidth="3"
    />
    <path d="M12 16 V48" stroke="currentColor" strokeWidth="3" />
    <path d="M52 16 V48" stroke="currentColor" strokeWidth="3" />
    <ellipse
      cx="32"
      cy="48"
      rx="20"
      ry="8"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
);

const SkillIcon = ({ name }) => {
  const map = {
    "React & Next.js": <ReactIcon />,
    TypeScript: <TypeScriptIcon />,
    "CSS/SCSS": <CssIcon />,
    "Tailwind CSS": <TailwindIcon />,
    "Motion/Framer Motion": <MotionIcon />,
    "Node.js & Express": <NodeIcon />,
    "Python & Django": <DjangoIcon />,
    PostgreSQL: <DatabaseIcon />,
    MongoDB: <DatabaseIcon />,
  };

  return map[name] || <span>•</span>;
};

export default SkillIcon;
