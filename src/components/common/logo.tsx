import type { SVGProps } from 'react';

export function FelleskjoepetLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Felleskjøpet Logo"
      {...props}
    >
      <rect width="48" height="48" rx="4" fill="#3A7D44" /> {/* FK Green color */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="white"
      >
        FK
      </text>
    </svg>
  );
}
