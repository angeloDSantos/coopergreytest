interface BaroqueOrnamentsProps {
  variant?: "corner-flourish" | "side-accent" | "center-medallion" | "border-decoration";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top" | "bottom" | "left" | "right";
  opacity?: number;
  animate?: boolean;
}

const BaroqueOrnaments = ({ 
  variant = "corner-flourish", 
  position = "top-right", 
  opacity = 0.15,
  animate = true 
}: BaroqueOrnamentsProps) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 scale-x-[-1]",
    "bottom-left": "bottom-0 left-0 scale-y-[-1]",
    "bottom-right": "bottom-0 right-0 scale-[-1]",
    "top": "top-0 left-1/2 -translate-x-1/2",
    "bottom": "bottom-0 left-1/2 -translate-x-1/2 scale-y-[-1]",
    "left": "left-0 top-1/2 -translate-y-1/2",
    "right": "right-0 top-1/2 -translate-y-1/2 scale-x-[-1]",
  };

  const cornerFlourish = (
    <svg viewBox="0 0 400 400" className="w-64 h-64 md:w-96 md:h-96" style={{ opacity }}>
      <defs>
        <linearGradient id={`baroque-gold-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(35, 85%, 52%)", stopOpacity: 0.9 }} />
          <stop offset="50%" style={{ stopColor: "hsl(38, 88%, 62%)", stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: "hsl(32, 82%, 42%)", stopOpacity: 0.3 }} />
        </linearGradient>
        <filter id={`glow-${position}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Ornate corner flourish with curves and swirls */}
      <path
        d="M 20 20 Q 40 25, 60 35 T 100 60 Q 120 80, 140 110 T 180 160"
        stroke={`url(#baroque-gold-${position})`}
        strokeWidth="2.5"
        fill="none"
        filter={`url(#glow-${position})`}
        className={animate ? "animate-[draw_3s_ease-in-out_infinite_alternate]" : ""}
      />
      <path
        d="M 20 20 Q 35 30, 50 45 T 80 85 Q 95 105, 115 130 T 145 175"
        stroke={`url(#baroque-gold-${position})`}
        strokeWidth="2"
        fill="none"
        filter={`url(#glow-${position})`}
        opacity="0.7"
      />
      
      {/* Decorative swirls */}
      <path
        d="M 60 40 Q 80 35, 100 45 T 140 70 Q 155 85, 165 105"
        stroke={`url(#baroque-gold-${position})`}
        strokeWidth="1.5"
        fill="none"
        filter={`url(#glow-${position})`}
      />
      
      {/* Small ornamental dots */}
      <circle cx="80" cy="50" r="2" fill={`url(#baroque-gold-${position})`} filter={`url(#glow-${position})`} />
      <circle cx="120" cy="90" r="2.5" fill={`url(#baroque-gold-${position})`} filter={`url(#glow-${position})`} />
      <circle cx="160" cy="140" r="2" fill={`url(#baroque-gold-${position})`} filter={`url(#glow-${position})`} />
      
      {/* Leaf-like flourishes */}
      <path
        d="M 100 55 Q 110 50, 120 55 Q 125 60, 120 65 Q 110 70, 100 65 Z"
        fill={`url(#baroque-gold-${position})`}
        filter={`url(#glow-${position})`}
        opacity="0.6"
      />
    </svg>
  );

  const sideAccent = (
    <svg viewBox="0 0 200 600" className="w-32 h-full" style={{ opacity }}>
      <defs>
        <linearGradient id={`side-gold-${position}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(35, 85%, 52%)", stopOpacity: 0.2 }} />
          <stop offset="50%" style={{ stopColor: "hsl(38, 88%, 62%)", stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: "hsl(32, 82%, 42%)", stopOpacity: 0.2 }} />
        </linearGradient>
        <filter id={`side-glow-${position}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Vertical flowing ornament */}
      <path
        d="M 100 50 Q 80 150, 120 250 T 100 450 Q 90 520, 100 550"
        stroke={`url(#side-gold-${position})`}
        strokeWidth="2"
        fill="none"
        filter={`url(#side-glow-${position})`}
      />
      
      {/* Side flourishes */}
      {[150, 300, 450].map((y, i) => (
        <g key={i}>
          <path
            d={`M 100 ${y} Q 130 ${y - 10}, 150 ${y} T 170 ${y + 15}`}
            stroke={`url(#side-gold-${position})`}
            strokeWidth="1.5"
            fill="none"
            filter={`url(#side-glow-${position})`}
          />
          <circle cx="150" cy={y} r="2" fill={`url(#side-gold-${position})`} />
        </g>
      ))}
    </svg>
  );

  const centerMedallion = (
    <svg viewBox="0 0 300 300" className="w-48 h-48 md:w-64 md:h-64" style={{ opacity }}>
      <defs>
        <radialGradient id={`center-gold-${position}`}>
          <stop offset="0%" style={{ stopColor: "hsl(38, 88%, 62%)", stopOpacity: 0.8 }} />
          <stop offset="70%" style={{ stopColor: "hsl(35, 85%, 52%)", stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: "hsl(32, 82%, 42%)", stopOpacity: 0 }} />
        </radialGradient>
        <filter id={`medallion-glow-${position}`}>
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Central ornamental circle */}
      <circle 
        cx="150" 
        cy="150" 
        r="80" 
        stroke={`url(#center-gold-${position})`}
        strokeWidth="2"
        fill="none"
        filter={`url(#medallion-glow-${position})`}
      />
      
      {/* Decorative spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const radian = (angle * Math.PI) / 180;
        const x1 = 150 + Math.cos(radian) * 60;
        const y1 = 150 + Math.sin(radian) * 60;
        const x2 = 150 + Math.cos(radian) * 90;
        const y2 = 150 + Math.sin(radian) * 90;
        
        return (
          <g key={angle}>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={`url(#center-gold-${position})`}
              strokeWidth="1.5"
              filter={`url(#medallion-glow-${position})`}
            />
            <circle cx={x2} cy={y2} r="3" fill={`url(#center-gold-${position})`} />
          </g>
        );
      })}
      
      {/* Center ornament */}
      <circle cx="150" cy="150" r="8" fill={`url(#center-gold-${position})`} filter={`url(#medallion-glow-${position})`} />
    </svg>
  );

  const borderDecoration = (
    <svg viewBox="0 0 800 80" className="w-full h-20" style={{ opacity }}>
      <defs>
        <linearGradient id={`border-gold-${position}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "hsl(35, 85%, 52%)", stopOpacity: 0 }} />
          <stop offset="50%" style={{ stopColor: "hsl(38, 88%, 62%)", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "hsl(32, 82%, 42%)", stopOpacity: 0 }} />
        </linearGradient>
        <filter id={`border-glow-${position}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Continuous ornamental border */}
      <path
        d="M 0 40 Q 100 30, 200 40 T 400 40 T 600 40 T 800 40"
        stroke={`url(#border-gold-${position})`}
        strokeWidth="2"
        fill="none"
        filter={`url(#border-glow-${position})`}
      />
      
      {/* Decorative elements along border */}
      {[100, 200, 300, 400, 500, 600, 700].map((x) => (
        <g key={x}>
          <path
            d={`M ${x} 35 Q ${x + 10} 25, ${x + 20} 35 T ${x + 30} 45`}
            stroke={`url(#border-gold-${position})`}
            strokeWidth="1.5"
            fill="none"
            filter={`url(#border-glow-${position})`}
          />
          <circle cx={x + 15} cy="30" r="2" fill={`url(#border-gold-${position})`} />
        </g>
      ))}
    </svg>
  );

  const variants = {
    "corner-flourish": cornerFlourish,
    "side-accent": sideAccent,
    "center-medallion": centerMedallion,
    "border-decoration": borderDecoration,
  };

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none`}>
      {variants[variant]}
    </div>
  );
};

export default BaroqueOrnaments;
