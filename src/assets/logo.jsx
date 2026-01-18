const Logo = () => (
  <svg
    className="logo-svg"
    viewBox="0 0 360 110"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <rect
      x="20"
      y="30"
      width="90"
      height="55"
      rx="6"
      stroke="currentColor"
      strokeWidth="3"
    />
    <rect
      x="15"
      y="85"
      width="100"
      height="10"
      rx="4"
      stroke="currentColor"
      strokeWidth="3"
    />

    <circle cx="50" cy="55" r="3" fill="currentColor" />
    <circle cx="80" cy="55" r="3" fill="currentColor" />

    <path
      d="M52 68 Q65 75 78 68"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <path d="M10 20 Q18 10 28 20" stroke="currentColor" strokeWidth="2" />
    <path d="M115 40 Q125 35 130 45" stroke="currentColor" strokeWidth="2" />

    <text
      x="150"
      y="75"
      fontSize="38"
      fontFamily="Comic Sans MS, cursive"
      fill="currentColor"
    >
      S
    </text>

    <text
      x="180"
      y="75"
      fontSize="38"
      fontFamily="Comic Sans MS, cursive"
      fill="var(--marker-blue)"
    >
      D
    </text>
  </svg>
);

export default Logo;
