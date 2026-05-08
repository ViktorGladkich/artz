export const CutoutCorner = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox={`0 0 ${size} ${size}`} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute text-white z-20 pointer-events-none ${className}`}
  >
    <path 
      d={`M 0 0 L ${size} 0 A ${size} ${size} 0 0 0 0 ${size} Z`} 
      fill="currentColor"
    />
  </svg>
);
