import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import RTPSlider from './RTPSlider';
import { ProgressGauge } from './ProgressGauge';
import svgPaths from '../imports/svg-53bjzs686o';

type PresetId = 'small-fast' | 'steady' | 'big-win' | 'jackpot' | 'bonus' | 'safe-bet' | 'high-roller' | null;

interface Preset {
  id: PresetId;
  name: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  textColor: string;
  iconUrl: string;
  description: string;
  volatility: string[];
  rtpRange: { min: number; max: number };
}

const presets: Preset[] = [
  {
    id: 'small-fast',
    name: 'Small Fast Wins',
    color: '#4caf50',
    bgGradient: 'linear-gradient(90deg, rgba(76, 175, 80, 0.15) 0%, rgba(76, 175, 80, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(76, 175, 80, 0.5)',
    textColor: '#a5d7a7',
    iconUrl: 'https://images.unsplash.com/photo-1578575784348-fb24551be1b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2lucyUyMG1vbmV5JTIwZmFzdHxlbnwxfHx8fDE3NjIyODYyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Designed for players who enjoy frequent, smaller payouts. These games offer quick wins and steady returns, making them ideal for those who prefer low risk.',
    volatility: ['Low'],
    rtpRange: { min: 96, max: 97 }
  },
  {
    id: 'steady',
    name: 'Steady Rewards',
    color: '#2196f3',
    bgGradient: 'linear-gradient(90deg, rgba(33, 150, 243, 0.15) 0%, rgba(33, 150, 243, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(33, 150, 243, 0.5)',
    textColor: '#90caf9',
    iconUrl: 'https://images.unsplash.com/photo-1647744204047-3afd65c32d8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJ0bGUlMjBzbG93JTIwc3RlYWR5fGVufDF8fHx8MTc2MjI4NjI1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Balanced gameplay with a mix of small and medium wins. Ideal for players seeking consistent entertainment with moderate returns.',
    volatility: ['Medium'],
    rtpRange: { min: 94, max: 95.5 }
  },
  {
    id: 'big-win',
    name: 'Big Win Thrills',
    color: '#ff9800',
    bgGradient: 'linear-gradient(90deg, rgba(255, 152, 0, 0.15) 0%, rgba(255, 152, 0, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(255, 152, 0, 0.5)',
    textColor: '#ffb74d',
    iconUrl: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwdHJvcGh5JTIwd2lufGVufDF8fHx8MTc2MjI4NjI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'For high-risk players chasing massive wins. These games feature volatile gameplay with the potential for huge payouts, appealing to thrill-seekers.',
    volatility: ['High'],
    rtpRange: { min: 93, max: 94.5 }
  },
  {
    id: 'jackpot',
    name: 'Jackpot Hunter',
    color: '#9c27b0',
    bgGradient: 'linear-gradient(90deg, rgba(156, 39, 176, 0.15) 0%, rgba(156, 39, 176, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(156, 39, 176, 0.5)',
    textColor: '#ba68c8',
    iconUrl: 'https://images.unsplash.com/photo-1641885503196-3379a1725e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwamFja3BvdCUyMGx1eHVyeXxlbnwxfHx8fDE3NjIyODYyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Targeted at players chasing life-changing jackpots. These games prioritize massive top prizes, perfect for dreamers with big aspirations.',
    volatility: ['High'],
    rtpRange: { min: 92, max: 93.5 }
  },
  {
    id: 'bonus',
    name: ' Bonus Bonanza',
    color: '#e91e63',
    bgGradient: 'linear-gradient(90deg, rgba(233, 30, 99, 0.15) 0%, rgba(233, 30, 99, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(233, 30, 99, 0.5)',
    textColor: '#f48fb1',
    iconUrl: 'https://images.unsplash.com/photo-1671749999622-4087a86868cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm9udXMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjIyODYyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Focused on games with exciting bonus rounds, free spins, and multipliers. Offers a dynamic experience with frequent feature triggers.',
    volatility: ['Medium', 'Med-High', 'High'],
    rtpRange: { min: 95, max: 96.5 }
  },
  {
    id: 'safe-bet',
    name: 'Safe Bet',
    color: '#8bc34a',
    bgGradient: 'linear-gradient(90deg, rgba(139, 195, 74, 0.15) 0%, rgba(139, 195, 74, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(139, 195, 74, 0.5)',
    textColor: '#aed581',
    iconUrl: 'https://images.unsplash.com/photo-1724219616919-aab943e7b00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGllbGQlMjBzYWZlJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzYyMjg2MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'For conservative players who want minimal risk and a very predictable payout structure. These games emphasize stability over large swings.',
    volatility: ['Low'],
    rtpRange: { min: 96, max: 97 }
  },
  {
    id: 'high-roller',
    name: ' High Roller Special',
    color: '#f44336',
    bgGradient: 'linear-gradient(90deg, rgba(244, 67, 54, 0.15) 0%, rgba(244, 67, 54, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(244, 67, 54, 0.5)',
    textColor: '#ef5350',
    iconUrl: 'https://images.unsplash.com/photo-1719228159232-48608b807a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNoaXBzJTIwY2FzaW5vfGVufDF8fHx8MTc2MjE5ODQzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Designed for players who are comfortable with higher bets and the inherent risks. While wins may be less frequent, the chance for significant payouts appeals to those with a high-stakes mindset.',
    volatility: ['High'],
    rtpRange: { min: 94, max: 95.5 }
  }
];

const volatilityOptions = ['Low', 'Low-Medium', 'Medium', 'Med-High', 'High', 'Very High', 'Adjusted', 'Not Applicable'];

// --- GAUGE LOGIC ---
// Maps volatility strings to rotation angles (-90deg is left, 90deg is right, 0deg is center/top)
const volatilityToRotation: { [key: string]: number } = {
  'Low': -75,
  'Low-Medium': -45,
  'Medium': 0,
  'Med-High': 45,
  'High': 75,
  'Very High': 90,
  'Adjusted': 0,
  'Not Applicable': 0,
};

export function GamingFiltersModal() {
  const [activePreset, setActivePreset] = useState<PresetId>(null);
  const [selectedVolatility, setSelectedVolatility] = useState<string[]>([]);
  const [rtpRange, setRtpRange] = useState<{ min: number; max: number }>({ min: 91, max: 95 });
  const [burstingFilters, setBurstingFilters] = useState<string[]>([]);
  const [hoveredPreset, setHoveredPreset] = useState<PresetId>(null);
  const [isSliderBursting, setIsSliderBursting] = useState(false);

  const activePresetData = presets.find(p => p.id === activePreset);
  const isManualMode = activePreset === null;

  // --- GAUGE LOGIC ---
  // Calculates the target rotation for the gauge needle
  const targetRotation = useMemo(() => {
    const optionsToAverage = isManualMode ? selectedVolatility : activePresetData?.volatility || [];
    
    if (optionsToAverage.length === 0) {
      return 0; // Default to center (Medium)
    }
    
    // Calculate the average rotation based on selected options
    const totalRotation = optionsToAverage.reduce((acc, val) => acc + (volatilityToRotation[val] || 0), 0);
    return totalRotation / optionsToAverage.length;
    
  }, [selectedVolatility, activePresetData, isManualMode]);
  // --- END GAUGE LOGIC ---


  const handlePresetClick = (presetId: PresetId) => {
    if (activePreset === presetId) {
      // Deselect: clear all and go to manual mode
      setActivePreset(null);
      setSelectedVolatility([]);
      setRtpRange({ min: 91, max: 95 });
      setBurstingFilters([]);
      setIsSliderBursting(false);
    } else {
      // Switch to new preset
      const preset = presets.find(p => p.id === presetId);
      if (preset) {
        // Set the preset first (for color reference in burst)
        setActivePreset(presetId);
        setSelectedVolatility(preset.volatility);
        setRtpRange(preset.rtpRange);
        
        // Trigger burst animation for the new filters (0.5s thematic border flash)
        setBurstingFilters(preset.volatility);
        setIsSliderBursting(true);
        setTimeout(() => {
          setBurstingFilters([]);
          setIsSliderBursting(false);
        }, 500);
      }
    }
  };

  const handleVolatilityToggle = (option: string) => {
    if (activePreset) {
      // Breaking the preset - go to manual mode but KEEP all current selections
      setActivePreset(null);
    }
    
    setSelectedVolatility(prev => 
      prev.includes(option) 
        ? prev.filter(v => v !== option)
        : [...prev, option]
    );
  };

  const handleRTPChange = (min: number, max: number) => {
    if (activePreset) {
      // Breaking the preset - go to manual mode but KEEP all current selections
      setActivePreset(null);
    }
    setRtpRange({ min, max });
  };

  // --- BUG FIX #1: PERSISTENT STROKE ---
  // These are the target values for the border animation
  const targetBorderColor = activePresetData ? activePresetData.borderColor : 'rgba(172, 176, 185, 0.15)';
  const targetBorderWidth = activePresetData ? '2px' : '1px';

  return (
    <motion.div // <-- THIS IS THE OUTER motion.div
      className="backdrop-blur-[6px] backdrop-filter relative rounded-[24px] w-full"
      // --- BUG FIX #1: PERSISTENT STROKE ---
      // Control border and background on the outer container
      animate={{ 
        backgroundImage: activePresetData ? activePresetData.bgGradient : 'linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
        borderColor: targetBorderColor,
        borderWidth: targetBorderWidth
      }}
      // --- BUG FIX #1: CRITICAL FIX ---
      // Make each property transition explicit. The key fix is borderColor: { duration: 0 }
      // This prevents the border from fading out when switching presets or entering manual mode
      transition={{
        backgroundImage: { duration: 0.3 },
        borderWidth: { duration: 0.3 },
        borderColor: { duration: 0 }, // ← CRITICAL: Instant color change, NO fade-out
      }}
      style={{
        borderStyle: 'solid', // Keep this static
      }}
    >
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center overflow-clip p-[12px] relative w-full">
          {/* Title and Preset Pills */}
          <div className="box-border content-stretch flex flex-col items-start pb-[16px] pt-0 px-0 relative shrink-0">
            {/* Title */}
            <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center px-[16px] py-0 relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                <div className="basis-0 content-stretch flex gap-[8px] grow h-[34px] items-center min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Style of Play
                    </p>
                    <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[2px] pr-0 pt-[2px] relative shrink-0 w-[14px]">
                      <div className="relative shrink-0 size-[12px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <path clipRule="evenodd" d={svgPaths.p36140b00} fill="white" fillRule="evenodd" opacity="0.25" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preset Pills */}
            <div className="box-border content-stretch flex h-[46px] items-center p-[7px] relative rounded-[999px] shrink-0 w-full">
              {presets.map((preset) => {
                const isActive = activePreset === preset.id;
                const isHovered = hoveredPreset === preset.id;
                const textColor = isActive ? 'white' : (isHovered ? preset.color : 'white');
                
                return (
                  <button 
                    key={preset.id}
                    onClick={() => handlePresetClick(preset.id)}
                    onMouseEnter={() => setHoveredPreset(preset.id)}
                    onMouseLeave={() => setHoveredPreset(null)}
                    className="box-border content-stretch cursor-pointer flex items-start overflow-visible p-0 relative shrink-0"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePresetBg"
                        className="absolute box-border content-stretch flex items-center inset-0 overflow-clip px-[8px] py-0 rounded-[999px]"
                        style={{ 
                          backgroundColor: preset.color
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0">
                          <p className="capitalize font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre opacity-0 pointer-events-none" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {preset.name}
                          </p>
                        </div>
                      </motion.div>
                    )}
                    <div className="box-border content-stretch flex h-[32px] items-center overflow-clip p-[8px] relative rounded-[18px] shrink-0 z-10">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0">
                        <p 
                          className="capitalize font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-nowrap whitespace-pre transition-colors duration-200" 
                          style={{ fontVariationSettings: "'wdth' 100", color: textColor }}
                        >
                          {preset.name}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description and Filters */}
          <motion.div
            className="box-border content-stretch flex flex-col items-center justify-center pb-[16px] pt-0 px-[16px] relative rounded-[16px] shrink-0 w-full"
            style={{
              backgroundColor: activePresetData ? activePresetData.bgGradient.match(/rgba\([^)]+\)/)?.[0] : 'transparent',
              borderWidth: activePresetData ? '2px' : '1px',
              borderStyle: 'solid',
              borderColor: activePresetData ? activePresetData.borderColor : 'rgba(172, 176, 185, 0.15)',
              transition: 'none'
            }}
          >
              {/* Icon and Description - Fixed Height Container */}
              <div className="w-full h-[80px] mb-4 relative shrink-0">
                {isManualMode ? (
                  <div className="content-stretch flex gap-[16px] items-center absolute inset-0">
                    <div className="flex gap-2 shrink-0">
                      <div className="w-[32px] h-[32px] rounded-[8px] border border-[rgba(255,255,255,0.2)]" style={{ backgroundColor: 'rgba(244, 67, 54, 0.15)' }} />
                      <div className="w-[32px] h-[32px] rounded-[8px] border border-[rgba(255,255,255,0.2)]" style={{ backgroundColor: 'rgba(255, 193, 7, 0.15)' }} />
                    </div>
                    <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-white text-[12px] flex-1" style={{ fontVariationSettings: "'wdth' 100", opacity: 0.7 }}>
                      You are in full control. Freely combine Volatility and RTP, or simply choose one of our Style of play presets above.
                    </p>
                  </div>
                ) : activePresetData ? (
                  <div className="content-stretch flex gap-[16px] items-center absolute inset-0">
                    <div className="relative shrink-0 size-[64px] rounded-[12px] overflow-hidden">
                      <ImageWithFallback 
                        src={activePresetData.iconUrl} 
                        alt={activePresetData.name}
                        className="absolute inset-0 size-full object-cover"
                      />
                    </div>
                    <p 
                      className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[12px] flex-1" 
                      style={{ fontVariationSettings: "'wdth' 100", color: activePresetData.textColor }}
                    >
                      {activePresetData.description}
                    </p>
                  </div>
                ) : null}
              </div>

              {/* Filters Grid */}
              <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
                {/* Volatility */}
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[16px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[rgba(172,176,185,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="size-full">
                    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-0 px-[16px] relative w-full">
                      {/* Title */}
                      <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex gap-[8px] grow h-[34px] items-center min-h-px min-w-px relative shrink-0">
                          <div className="h-[24px] relative shrink-0 w-[41.143px]">
                            {/* Volatility dial SVG */}
                            <div className="absolute bottom-[-54.94%] left-1/2 top-[26.31%] translate-x-[-50%] w-[30.872px]">
                              <div className="absolute bottom-1/2 left-0 right-1/2 top-[47.49%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                                  <g opacity="0.3">
                                    <mask fill="white" id="path-1-inside-1_1_111371">
                                      <path d={svgPaths.p328dd680} />
                                    </mask>
                                    <path d={svgPaths.p328dd680} fill="url(#paint0_linear_1_111371)" mask="url(#path-1-inside-1_1_111371)" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
                                  </g>
                                  <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_111371" x1="31.5718" x2="-0.612408" y1="0.616287" y2="0.911554">
                                      <stop stopColor="#FF522C" />
                                      <stop offset="0.25" stopColor="#F8BB44" />
                                      <stop offset="0.5" stopColor="#FFD500" />
                                      <stop offset="0.75" stopColor="#28FFBB" />
                                      <stop offset="1" stopColor="#5BD3E9" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                            <div className="absolute bottom-[12.52%] left-1/2 top-[7.65%] translate-x-[-50%] w-[38.319px]">
                              <div className="absolute inset-[-5.22%_-2.61%]">
                                <ProgressGauge key={activePreset || 'manual'} targetRotation={targetRotation} />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#acb0b9] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Volatility
                            </p>
                            <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[2px] pr-0 pt-[2px] relative shrink-0 w-[14px]">
                              <div className="relative shrink-0 size-[12px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                  <path clipRule="evenodd" d={svgPaths.p36140b00} fill="white" fillRule="evenodd" opacity="0.25" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Volatility Options */}
                      <div className="content-start cursor-pointer flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
                        {volatilityOptions.map((option) => {
                          const isSelected = selectedVolatility.includes(option);
                          const isBursting = burstingFilters.includes(option);
                          const burstColor = activePresetData?.color || '#ffd700';
                          
                          return (
                            <motion.button
                              key={option}
                              onClick={() => handleVolatilityToggle(option)}
                              className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[18px] shrink-0"
                              style={{ 
                                backgroundColor: isSelected ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                                border: '0px solid transparent' // Base border for burst
                              }}
                              animate={isBursting ? {
                                borderColor: [`${burstColor}00`, burstColor, `${burstColor}00`],
                                borderWidth: ['0px', '2px', '0px']
                              } : {}}
                              transition={{ 
                                default: { duration: 0.5 }
                              }}
                            >
                              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0">
                                <p className="capitalize font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {option}
                                </p>
                              </div>
                              <AnimatePresence initial={false}>
                                {isSelected && (
                                  <motion.div 
                                    // --- WIGGLE FIX ---
                                    // Changed width: 'auto' to maxWidth: 24
                                    initial={{ opacity: 0, maxWidth: 0 }}
                                    animate={{ opacity: 1, maxWidth: 24 }}
                                    exit={{ opacity: 0, maxWidth: 0 }}
                                    transition={{
                                      // Animate (on) - expand first, then fade in check
                                      maxWidth: { duration: 0.2, ease: "easeOut", delay: 0 },
                                      opacity: { duration: 0.15, delay: 0.15 },
                                      // Exit (off) - fade out check first, then shrink
                                      opacity: { duration: 0.15, delay: 0 },
                                      maxWidth: { duration: 0.2, ease: "easeOut", delay: 0.15 }
                                    }}
                                    className="box-border content-stretch flex gap-[10px] items-center pl-[4px] pr-0 py-0 relative shrink-0 overflow-hidden"
                                  >
                                    <div className="relative shrink-0 size-[16px]">
                                      <div className="absolute inset-0 overflow-clip">
                                        <div className="absolute inset-0">
                                          <div className="absolute inset-0">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                              <path d={svgPaths.p30769300} fill="white" />
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="absolute inset-[31.25%_21.7%_31.44%_27.16%]">
                                          <div className="absolute inset-0">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
                                              <path d={svgPaths.p6861e00} fill="#202735" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RTP */}
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[16px] shrink-0">
                  <motion.div 
                    aria-hidden="true" 
                    className="absolute border border-solid inset-0 pointer-events-none rounded-[16px]"
                    animate={{
                      borderColor: isSliderBursting 
                        ? [
                            `${activePresetData?.color || '#ffd700'}00`,
                            activePresetData?.color || '#ffd700',
                            `${activePresetData?.color || '#ffd700'}00`
                          ]
                        : 'rgba(172,176,185,0.15)',
                      borderWidth: isSliderBursting ? ['1px', '2px', '1px'] : '1px'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="size-full">
                    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-0 px-[16px] relative w-full">
                      {/* Title */}
                      <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex gap-[8px] grow h-[34px] items-center min-h-px min-w-px relative shrink-0">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#acb0b9] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                              RTP
                            </p>
                            <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[2px] pr-0 pt-[2px] relative shrink-0 w-[14px]">
                              <div className="relative shrink-0 size-[12px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                  <path clipRule="evenodd" d={svgPaths.p36140b00} fill="white" fillRule="evenodd" opacity="0.25" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* RTP Slider */}
                      <div className="w-full">
                        <RTPSlider 
                          minValue={rtpRange.min} 
                          maxValue={rtpRange.max} 
                          onChange={handleRTPChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
}