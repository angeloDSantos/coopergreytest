interface BaroqueDividerProps {
  variant?: "standard" | "ornate" | "minimal";
  flip?: boolean;
}

const BaroqueDivider = ({ variant = "standard", flip = false }: BaroqueDividerProps) => {
  const standardDivider = (
    <svg
      viewBox="0 0 1200 120"
      className="w-full h-24 md:h-32"
      preserveAspectRatio="none"
      style={{ transform: flip ? "scaleY(-1)" : "none" }}
    >
      <defs>
        <linearGradient id={`divider-gradient-${flip}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "hsl(35, 85%, 52%)", stopOpacity: 0 }} />
          <stop offset="20%" style={{ stopColor: "hsl(38, 88%, 62%)", stopOpacity: 0.25 }} />
          <stop offset="50%" style={{ stopColor: "hsl(35, 85%, 52%)", stopOpacity: 0.4 }} />
          <stop offset="80%" style={{ stopColor: "hsl(38, 88%, 62%)", stopOpacity: 0.25 }} />
          <stop offset="100%" style={{ stopColor: "hsl(32, 82%, 42%)", stopOpacity: 0 }} />
        </linearGradient>
        <filter id={`divider-glow-${flip}`}>
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Main flowing curve */}
      <path
        d="M 0 60 Q 150 40, 300 60 T 600 60 T 900 60 T 1200 60"
        stroke={`url(#divider-gradient-${flip})`}
        strokeWidth="1.5"
        fill="none"
        filter={`url(#divider-glow-${flip})`}
        opacity="0.7"
      />

      {/* Upper decorative curve */}
      <path
        d="M 100 45 Q 200 35, 300 45 T 500 45 T 700 45 T 900 45 T 1100 45"
        stroke={`url(#divider-gradient-${flip})`}
        strokeWidth="1"
        fill="none"
        filter={`url(#divider-glow-${flip})`}
        opacity="0.4"
      />

      {/* Lower decorative curve */}
      <path
        d="M 100 75 Q 200 85, 300 75 T 500 75 T 700 75 T 900 75 T 1100 75"
        stroke={`url(#divider-gradient-${flip})`}
        strokeWidth="1"
        fill="none"
        filter={`url(#divider-glow-${flip})`}
        opacity="0.4"
      />

      {/* Ornamental flourishes at intervals */}
      {[300, 600, 900].map((x, i) => (
        <g key={i}>
          {/* Center swirl */}
          <path
            d={`M ${x} 55 Q ${x - 15} 50, ${x - 20} 60 T ${x - 15} 70 Q ${x - 10} 75, ${x} 70`}
            stroke={`url(#divider-gradient-${flip})`}
            strokeWidth="1"
            fill="none"
            filter={`url(#divider-glow-${flip})`}
            opacity="0.5"
          />
          <path
            d={`M ${x} 55 Q ${x + 15} 50, ${x + 20} 60 T ${x + 15} 70 Q ${x + 10} 75, ${x} 70`}
            stroke={`url(#divider-gradient-${flip})`}
            strokeWidth="1"
            fill="none"
            filter={`url(#divider-glow-${flip})`}
            opacity="0.5"
          />
          
          {/* Decorative dots */}
          <circle cx={x} cy="60" r="2" fill={`url(#divider-gradient-${flip})`} filter={`url(#divider-glow-${flip})`} opacity="0.6" />
          <circle cx={x - 25} cy="58" r="1.5" fill={`url(#divider-gradient-${flip})`} opacity="0.4" />
          <circle cx={x + 25} cy="58" r="1.5" fill={`url(#divider-gradient-${flip})`} opacity="0.4" />
        </g>
      ))}
    </svg>
  );

  const ornateDivider = (
    <svg
      viewBox="0 0 1200 150"
      className="w-full h-32 md:h-40"
      preserveAspectRatio="none"
      style={{ transform: flip ? "scaleY(-1)" : "none" }}
    >
      <defs>
        <linearGradient id={`ornate-gradient-${flip}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "hsl(35, 85%, 52%)", stopOpacity: 0 }} />
          <stop offset="25%" style={{ stopColor: "hsl(38, 88%, 62%)", stopOpacity: 0.3 }} />
          <stop offset="50%" style={{ stopColor: "hsl(35, 85%, 52%)", stopOpacity: 0.5 }} />
          <stop offset="75%" style={{ stopColor: "hsl(38, 88%, 62%)", stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: "hsl(32, 82%, 42%)", stopOpacity: 0 }} />
        </linearGradient>
        <filter id={`ornate-glow-${flip}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Central ornate medallion */}
      <g transform="translate(600, 75)" opacity="0.6">
        {/* Outer circle */}
        <circle r="35" stroke={`url(#ornate-gradient-${flip})`} strokeWidth="1.5" fill="none" filter={`url(#ornate-glow-${flip})`} />
        
        {/* Inner decorative elements */}
        <circle r="25" stroke={`url(#ornate-gradient-${flip})`} strokeWidth="1" fill="none" opacity="0.5" />
        
        {/* Radiating flourishes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const radian = (angle * Math.PI) / 180;
          const x1 = Math.cos(radian) * 20;
          const y1 = Math.sin(radian) * 20;
          const x2 = Math.cos(radian) * 40;
          const y2 = Math.sin(radian) * 40;
          
          return (
            <g key={angle}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={`url(#ornate-gradient-${flip})`}
                strokeWidth="1"
                filter={`url(#ornate-glow-${flip})`}
              />
              <circle cx={x2} cy={y2} r="1.5" fill={`url(#ornate-gradient-${flip})`} />
            </g>
          );
        })}
        
        {/* Center ornament */}
        <circle r="4" fill={`url(#ornate-gradient-${flip})`} filter={`url(#ornate-glow-${flip})`} />
      </g>

      {/* Flowing lines extending from center */}
      <path
        d="M 0 75 Q 150 60, 300 75 T 600 75"
        stroke={`url(#ornate-gradient-${flip})`}
        strokeWidth="1.5"
        fill="none"
        filter={`url(#ornate-glow-${flip})`}
        opacity="0.6"
      />
      <path
        d="M 600 75 Q 750 90, 900 75 T 1200 75"
        stroke={`url(#ornate-gradient-${flip})`}
        strokeWidth="1.5"
        fill="none"
        filter={`url(#ornate-glow-${flip})`}
        opacity="0.6"
      />

      {/* Side flourishes */}
      {[200, 400, 800, 1000].map((x, i) => (
        <g key={i} opacity="0.5">
          <path
            d={`M ${x} 70 Q ${x - 10} 60, ${x - 15} 70 Q ${x - 10} 80, ${x} 75`}
            stroke={`url(#ornate-gradient-${flip})`}
            strokeWidth="1"
            fill="none"
            filter={`url(#ornate-glow-${flip})`}
          />
          <circle cx={x} cy="72" r="1.5" fill={`url(#ornate-gradient-${flip})`} />
        </g>
      ))}
    </svg>
  );

  const minimalDivider = (
    <svg
      viewBox="0 0 1200 80"
      className="w-full h-16 md:h-20"
      preserveAspectRatio="none"
      style={{ transform: flip ? "scaleY(-1)" : "none" }}
    >
      <defs>
        <linearGradient id={`minimal-gradient-${flip}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "hsl(35, 85%, 52%)", stopOpacity: 0 }} />
          <stop offset="30%" style={{ stopColor: "hsl(38, 88%, 62%)", stopOpacity: 0.2 }} />
          <stop offset="50%" style={{ stopColor: "hsl(35, 85%, 52%)", stopOpacity: 0.35 }} />
          <stop offset="70%" style={{ stopColor: "hsl(38, 88%, 62%)", stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: "hsl(32, 82%, 42%)", stopOpacity: 0 }} />
        </linearGradient>
        <filter id={`minimal-glow-${flip}`}>
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Simple flowing line */}
      <path
        d="M 0 40 Q 200 30, 400 40 T 800 40 T 1200 40"
        stroke={`url(#minimal-gradient-${flip})`}
        strokeWidth="1"
        fill="none"
        filter={`url(#minimal-glow-${flip})`}
        opacity="0.6"
      />

      {/* Central accent */}
      <g transform="translate(600, 40)" opacity="0.5">
        <circle r="8" stroke={`url(#minimal-gradient-${flip})`} strokeWidth="1" fill="none" filter={`url(#minimal-glow-${flip})`} />
        <circle r="2" fill={`url(#minimal-gradient-${flip})`} />
      </g>

      {/* Small decorative elements */}
      {[300, 900].map((x, i) => (
        <g key={i} opacity="0.4">
          <path
            d={`M ${x - 10} 38 L ${x + 10} 38`}
            stroke={`url(#minimal-gradient-${flip})`}
            strokeWidth="1"
            filter={`url(#minimal-glow-${flip})`}
          />
          <circle cx={x} cy="38" r="1.5" fill={`url(#minimal-gradient-${flip})`} />
        </g>
      ))}
    </svg>
  );

  const variants = {
    standard: standardDivider,
    ornate: ornateDivider,
    minimal: minimalDivider,
  };

  return (
    <div className="w-full relative z-20">
      {variants[variant]}
    </div>
  );
};

export default BaroqueDivider;
