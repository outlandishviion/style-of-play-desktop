export function ProgressGauge({ targetRotation = 0 }: { targetRotation?: number }) {
  // Generate unique animation names based on targetRotation to force re-animation
  const animationId = `anim-${targetRotation}`;
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 203 118" 
      fill="none"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <style>{`
        @keyframes draw-arc-${animationId} {
          from { stroke-dashoffset: 296; }
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes rotate-needle-${animationId} {
          from { transform: rotate(-90deg); }
          to { transform: rotate(${targetRotation}deg); }
        }

        @keyframes rotate-clip-wipe-${animationId} {
          from { transform: rotate(-180deg); }
          to { transform: rotate(${targetRotation}deg); }
        }
        
        @keyframes fade-in-dial-${animationId} {
          from { opacity: 0; }
          to { opacity: 0.8; }
        }

        @keyframes fade-in-fill-${animationId} {
          from { opacity: 0; }
          to { opacity: 0.3; }
        }

        .dial-bg-${animationId} {
          stroke: #888; 
          opacity: 0;
          animation: fade-in-dial-${animationId} 0.8s ease forwards;
          animation-delay: 0.2s;
        }

        .arc-path-${animationId} {
          stroke-dasharray: 296;
          stroke-dashoffset: 296;
          animation: draw-arc-${animationId} 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.2s;
        }
        
        .needle-group-${animationId} {
          transform-origin: 100.937px 103.199px;
          transform: rotate(-90deg);
          animation: rotate-needle-${animationId} 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.2s;
        }

        .clip-rect-${animationId} {
          transform-origin: 100.937px 103.199px;
          transform: rotate(-180deg);
          animation: rotate-clip-wipe-${animationId} 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.2s;
        }
        
        .inner-fill-${animationId} {
          opacity: 0;
          animation: fade-in-fill-${animationId} 0.8s ease forwards;
          animation-delay: 0.2s;
        }

        .circle-base-${animationId} {
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .arc-path-${animationId}, .needle-group-${animationId}, .dial-bg-${animationId}, .inner-fill-${animationId}, .clip-rect-${animationId} { 
            animation: none !important;
          }
          .dial-bg-${animationId} { opacity: 0.8; }
          .circle-base-${animationId} { opacity: 1; }
          .inner-fill-${animationId} { opacity: 0.3; }
          .arc-path-${animationId} { stroke-dashoffset: 0; }
          .needle-group-${animationId} { transform: rotate(${targetRotation}deg); }
          .clip-rect-${animationId} { transform: rotate(${targetRotation}deg); }
        }
      `}</style>

      <defs>
        <linearGradient id={`arc-gradient-${animationId}`} x1="199.386" y1="102.229" x2="3.02059" y2="104.031" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF522C" />
          <stop offset="0.25" stopColor="#F8BB44" />
          <stop offset="0.5" stopColor="#FFD500" />
          <stop offset="0.75" stopColor="#28FFBB" />
          <stop offset="1" stopColor="#5BD3E9" />
        </linearGradient>
        
        <linearGradient id={`fill-gradient-${animationId}`} x1="176.486" y1="102.455" x2="25.7965" y2="103.838" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF522C" />
          <stop offset="0.25" stopColor="#F8BB44" />
          <stop offset="0.5" stopColor="#FFD500" />
          <stop offset="0.75" stopColor="#28FFBB" />
          <stop offset="1" stopColor="#5BD3E9" />
        </linearGradient>
        
        <clipPath id={`fill-clip-${animationId}`}>
          <rect className={`clip-rect-${animationId}`} x="0" y="0" width="203" height="103.2" />
        </clipPath>
      </defs>
      
      <path className={`dial-bg-${animationId}`} d="M195.117 103.201C195.117 90.833 192.681 78.5863 187.948 67.1598C183.215 55.7334 176.278 45.3511 167.532 36.6057C158.787 27.8602 148.405 20.923 136.978 16.19C125.552 11.457 113.305 9.021 100.937 9.021C88.5691 9.02099 76.3224 11.457 64.896 16.19C53.4695 20.923 43.0872 27.8602 34.3418 36.6056C25.5964 45.351 18.6591 55.7333 13.9261 67.1598C9.19313 78.5862 6.75709 90.833 6.75708 103.201" strokeWidth="3" strokeLinejoin="bevel" />
      
      <path className={`inner-fill-${animationId}`} d="M28.6638 103.201C28.6638 93.6793 30.5453 84.2515 34.2001 75.4593C37.8549 66.667 43.211 58.6836 49.9607 51.9678C56.7104 45.2519 64.7207 39.936 73.5312 36.3254C82.3417 32.7148 91.7788 30.8808 101.3 30.9286C110.822 30.9765 120.24 32.9053 129.014 36.6043C137.787 40.3033 145.744 45.6995 152.426 52.4828C159.108 59.2662 164.383 67.3031 167.949 76.1316C171.516 84.9601 173.302 94.4063 173.207 103.927L100.937 103.201L28.6638 103.201Z" fill={`url(#fill-gradient-${animationId})`} clipPath={`url(#fill-clip-${animationId})`} />

      <path className={`arc-path-${animationId}`} d="M6.75708 103.201C6.75708 90.7932 9.20883 78.5078 13.9715 67.0505C18.7341 55.5932 25.7137 45.19 34.5093 36.4385C43.3049 27.687 53.7431 20.7597 65.2242 16.0548C76.7052 11.3498 89.0028 8.95982 101.41 9.02219C113.818 9.08456 126.091 11.598 137.524 16.4182C148.957 21.2384 159.325 28.2702 168.032 37.1097C176.74 45.9492 183.614 56.422 188.262 67.9266C192.909 79.4312 195.237 91.7406 195.112 104.148" stroke={`url(#arc-gradient-${animationId})`} strokeWidth="10.4644" strokeLinejoin="round" />
      
      <g className={`needle-group-${animationId}`}>
        <path d="M101.453 71.6331C101.436 71.5181 101.369 71.4078 101.275 71.3265C101.181 71.2452 101.069 71.1995 100.953 71.1995C100.837 71.1995 100.724 71.2452 100.63 71.3265C100.537 71.4078 100.469 71.5181 100.453 71.6331C100.453 71.6331 100.453 71.6331 100.453 71.6331C100.377 72.1592 100.302 72.6853 100.227 73.2114C98.8722 82.6813 97.5175 92.1513 96.1628 101.621C96.0875 102.147 96.0123 102.673 95.937 103.2C99.2808 103.2 102.625 103.2 105.968 103.2C105.893 102.673 105.818 102.147 105.742 101.621C104.388 92.1513 103.033 82.6813 101.678 73.2114C101.603 72.6853 101.528 72.1592 101.453 71.6331Z" fill="white" />
      </g>
      
      <circle className={`circle-base-${animationId}`} cx="100.937" cy="103.199" r="8" fill="#29A8AC" />
      <circle className={`circle-base-${animationId}`} cx="100.937" cy="103.199" r="4" fill="white" />
    </svg>
  );
}
