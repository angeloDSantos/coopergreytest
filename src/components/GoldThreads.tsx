interface GoldThreadsProps {
  variant?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  opacity?: number;
}

const GoldThreads = ({ variant = "top-right", opacity = 0.15 }: GoldThreadsProps) => {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className={`absolute ${positions[variant]} pointer-events-none overflow-hidden w-full h-full`}>
      <svg
        viewBox="0 0 800 800"
        className="w-full h-full"
        style={{ opacity }}
      >
        <defs>
          <linearGradient id={`goldGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "hsl(35, 85%, 52%)", stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: "hsl(38, 88%, 62%)", stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: "hsl(32, 82%, 42%)", stopOpacity: 0.2 }} />
          </linearGradient>
          <filter id={`glow-${variant}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Flowing thread patterns */}
        <path
          d="M 0 200 Q 200 180 400 220 T 800 200"
          stroke={`url(#goldGradient-${variant})`}
          strokeWidth="2"
          fill="none"
          filter={`url(#glow-${variant})`}
        />
        <path
          d="M 0 300 Q 250 320 500 280 T 800 300"
          stroke={`url(#goldGradient-${variant})`}
          strokeWidth="1.5"
          fill="none"
          filter={`url(#glow-${variant})`}
        />
        <path
          d="M 0 400 Q 200 430 400 390 T 800 400"
          stroke={`url(#goldGradient-${variant})`}
          strokeWidth="2.5"
          fill="none"
          filter={`url(#glow-${variant})`}
        />
        <path
          d="M 0 500 Q 300 480 600 520 T 800 500"
          stroke={`url(#goldGradient-${variant})`}
          strokeWidth="1"
          fill="none"
          filter={`url(#glow-${variant})`}
        />
        
        {/* Additional decorative threads */}
        <path
          d="M 100 0 Q 120 200 100 400 T 100 800"
          stroke={`url(#goldGradient-${variant})`}
          strokeWidth="1.5"
          fill="none"
          filter={`url(#glow-${variant})`}
          opacity="0.5"
        />
        <path
          d="M 700 0 Q 680 200 700 400 T 700 800"
          stroke={`url(#goldGradient-${variant})`}
          strokeWidth="1.5"
          fill="none"
          filter={`url(#glow-${variant})`}
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default GoldThreads;
