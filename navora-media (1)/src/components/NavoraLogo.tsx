import React from "react";

interface NavoraLogoProps {
  className?: string;
  size?: number;
}

export default function NavoraLogo({ className = "", size = 42 }: NavoraLogoProps) {
  // 31 beautifully overlapping spiral blades sweeping clockwise
  const spiralArmCount = 31;
  const logoOrange = "#E57324"; // Exact premium copper orange matching the brand assets 
  const logoBlack = "#13110F";  // Rich charcoal black matching the central circle

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`select-none flex-shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="none" />
      
      {/* Curved Spiral arms drawn underneath */}
      <g>
        {Array.from({ length: spiralArmCount }).map((_, idx) => {
          const angle = (idx * 360) / spiralArmCount;
          return (
            <path
              key={idx}
              // Starts inside the central circle boundary to prevent gaps,
              // then sweeps upwards/outwards and clockwise in a gorgeous mathematical spiral.
              d="M 50,36 C 58,22 75,18 85,28"
              stroke={logoOrange}
              strokeWidth="3.4"
              strokeLinecap="round"
              transform={`rotate(${angle} 50 50)`}
            />
          );
        })}
      </g>
      
      {/* Central Solid Circle drawn on top to perfectly clip the spiral bases */}
      <circle
        cx="50"
        cy="50"
        r="17.2"
        fill={logoBlack}
      />
    </svg>
  );
}
