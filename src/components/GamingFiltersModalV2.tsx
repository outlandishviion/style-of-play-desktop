import image_5f0790967a2840f2ba79562fe5aad2ec7d74d8a5 from 'figma:asset/5f0790967a2840f2ba79562fe5aad2ec7d74d8a5.png';
import image_b6149431a0cb0c04406f6732c6f893f0e325adbf from 'figma:asset/b6149431a0cb0c04406f6732c6f893f0e325adbf.png';
import image_ddf16409683ea9335750d1304ee126d33442b045 from 'figma:asset/ddf16409683ea9335750d1304ee126d33442b045.png';
import image_417b07de3f3ec610397f17a3415f65046416825b from 'figma:asset/417b07de3f3ec610397f17a3415f65046416825b.png';
import image_ab43399dfdbaf83d7b37f3c72ea07924d19faf4c from 'figma:asset/ab43399dfdbaf83d7b37f3c72ea07924d19faf4c.png';
import image_53d64683cbb955c4be3e27c840be8fc7a76d7408 from 'figma:asset/53d64683cbb955c4be3e27c840be8fc7a76d7408.png';
import image_custom_icon from 'figma:asset/b0ce1e5c70fc49f882e8d5ad4cfe1e97a6df5ccb.png';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import RTPSlider from './RTPSlider';
import { GaugeDisplay } from './GaugeDisplay';
import svgPaths from '../imports/svg-m9sgnjrf5e';

type PresetId = 'quick-wins' | 'casual-fun' | 'long-run' | 'big-thrills' | 'high-stakes' | null;

interface Preset {
  id: PresetId;
  name: string;
  color: string;
  shadowColor: string;
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
    id: 'quick-wins',
    name: 'Quick Wins',
    color: '#4caf50',
    shadowColor: '#4caf50',
    bgGradient: 'linear-gradient(90deg, rgba(76, 175, 80, 0.15) 0%, rgba(76, 175, 80, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(76, 175, 80, 1)',
    textColor: '#a5d7a7',
    iconUrl: image_5f0790967a2840f2ba79562fe5aad2ec7d74d8a5,
    description: 'For players who enjoy fast rounds and frequent small payouts. Ideal for steady, low-risk play.',
    volatility: ['Low'],
    rtpRange: { min: 96, max: 97 }
  },
  {
    id: 'casual-fun',
    name: 'Casual Fun',
    color: '#2196f3',
    shadowColor: '#2196f3',
    bgGradient: 'linear-gradient(90deg, rgba(33, 150, 243, 0.15) 0%, rgba(33, 150, 243, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(33, 150, 243, 1)',
    textColor: '#90caf9',
    iconUrl: image_ddf16409683ea9335750d1304ee126d33442b045,
    description: 'For players who like easy, colorful games with balanced wins and relaxed play sessions.',
    volatility: ['Low-Medium'],
    rtpRange: { min: 94, max: 95 }
  },
  {
    id: 'long-run',
    name: 'Long Run',
    color: '#9c27b0',
    shadowColor: '#9c27b0',
    bgGradient: 'linear-gradient(90deg, rgba(156, 39, 176, 0.15) 0%, rgba(156, 39, 176, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(156, 39, 176, 1)',
    textColor: '#ce93d8',
    iconUrl: image_417b07de3f3ec610397f17a3415f65046416825b,
    description: 'For players seeking lasting gameplay with steady progress and the occasional big win.',
    volatility: ['Medium'],
    rtpRange: { min: 96, max: 97 }
  },
  {
    id: 'big-thrills',
    name: 'Big Thrills',
    color: '#ff9800',
    shadowColor: '#ff9800',
    bgGradient: 'linear-gradient(90deg, rgba(255, 152, 0, 0.15) 0%, rgba(255, 152, 0, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(255, 152, 0, 1)',
    textColor: '#ffb74d',
    iconUrl: image_ab43399dfdbaf83d7b37f3c72ea07924d19faf4c,
    description: 'For players who enjoy unpredictable rounds packed with excitement and bigger payouts.',
    volatility: ['High'],
    rtpRange: { min: 93, max: 94.5 }
  },
  {
    id: 'high-stakes',
    name: 'High Stakes',
    color: '#b12e5f',
    shadowColor: '#b12e5f',
    bgGradient: 'linear-gradient(90deg, rgba(163, 38, 56, 0.15) 0%, rgba(163, 38, 56, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)',
    borderColor: 'rgba(163, 38, 56, 1)',
    textColor: '#f48fb1',
    iconUrl: image_53d64683cbb955c4be3e27c840be8fc7a76d7408,
    description: 'For players confident in higher bets, where fewer wins can lead to major rewards.',
    volatility: ['High'],
    rtpRange: { min: 94, max: 95.5 }
  }
];

const volatilityOptions = ['Low', 'Low-Medium', 'Medium', 'Med-High', 'High', 'Very High'];
const volatilitySecondaryOptions = ['Not Applicable', 'Adjusted'];

export function GamingFiltersModalV2() {
  const [activePreset, setActivePreset] = useState<PresetId>('quick-wins');
  const [previousPreset, setPreviousPreset] = useState<PresetId>(null);
  const [selectedVolatility, setSelectedVolatility] = useState<string[]>(['Low']);
  const [rtpRange, setRtpRange] = useState<{ min: number; max: number }>({ min: 96, max: 97 });
  
  // Store custom selections separately
  const [customVolatility, setCustomVolatility] = useState<string[]>([]);
  const [customRtpRange, setCustomRtpRange] = useState<{ min: number; max: number }>({ min: 91, max: 95 });
  
  // Hover states
  const [hoveredPreset, setHoveredPreset] = useState<PresetId>(null);
  const [isCustomHovered, setIsCustomHovered] = useState(false);
  const [hoveredSecondaryPill, setHoveredSecondaryPill] = useState<string | null>(null);

  const activePresetData = presets.find(p => p.id === activePreset);
  const isCustomMode = activePreset === null;

  // Determine gauge state based on selected volatility
  const getGaugeState = (): 'low' | 'lowMedium' | 'medium' | 'mediumHigh' | 'high' | 'veryHigh' | 'notApplicable' | 'adjusted' => {
    // If Adjusted chip is selected, show adjusted
    if (selectedVolatility.includes('Adjusted')) return 'adjusted';
    
    // Filter out secondary options to count primary volatility selections
    const primarySelections = selectedVolatility.filter(v => 
      !['Not Applicable', 'Adjusted'].includes(v)
    );
    
    // If more than one primary volatility is selected, show adjusted
    if (primarySelections.length > 1) return 'adjusted';
    
    // Show single selected volatility
    if (selectedVolatility.includes('Very High')) return 'veryHigh';
    if (selectedVolatility.includes('High')) return 'high';
    if (selectedVolatility.includes('Med-High')) return 'mediumHigh';
    if (selectedVolatility.includes('Medium')) return 'medium';
    if (selectedVolatility.includes('Low-Medium')) return 'lowMedium';
    if (selectedVolatility.includes('Low')) return 'low';
    if (selectedVolatility.includes('Not Applicable')) return 'notApplicable';
    
    return 'notApplicable';
  };

  const handlePresetClick = (presetId: PresetId) => {
    if (activePreset === presetId) {
      // Deselect: go to custom mode and restore custom selections
      setPreviousPreset(presetId);
      setActivePreset(null);
      setSelectedVolatility(customVolatility);
      setRtpRange(customRtpRange);
    } else {
      // Save current selections to custom before switching
      if (isCustomMode) {
        setCustomVolatility(selectedVolatility);
        setCustomRtpRange(rtpRange);
      }
      
      // Select preset
      const preset = presets.find(p => p.id === presetId);
      if (preset) {
        setActivePreset(presetId);
        setSelectedVolatility(preset.volatility);
        setRtpRange(preset.rtpRange);
      }
    }
  };

  const handleCustomClick = () => {
    if (isCustomMode && previousPreset) {
      // If in Custom mode and there's a previous preset, restore it
      const preset = presets.find(p => p.id === previousPreset);
      if (preset) {
        // Save current custom selections before switching
        setCustomVolatility(selectedVolatility);
        setCustomRtpRange(rtpRange);
        
        setActivePreset(previousPreset);
        setSelectedVolatility(preset.volatility);
        setRtpRange(preset.rtpRange);
      }
    } else {
      // Otherwise, go to custom mode and restore custom selections
      if (activePreset) {
        setPreviousPreset(activePreset);
      }
      setActivePreset(null);
      setSelectedVolatility(customVolatility);
      setRtpRange(customRtpRange);
    }
  };

  const handleVolatilityToggle = (option: string) => {
    // If any preset is active, break it and go to custom mode
    if (activePreset) {
      setPreviousPreset(activePreset);
      setActivePreset(null);
    }
    
    const newVolatility = selectedVolatility.includes(option) 
      ? selectedVolatility.filter(v => v !== option)
      : [...selectedVolatility, option];
    
    setSelectedVolatility(newVolatility);
    
    // Update custom storage if in custom mode
    if (!activePreset) {
      setCustomVolatility(newVolatility);
    }
  };

  // Wrap in useCallback to prevent recreating the function on every render
  // This prevents the RTPSlider's useEffect from re-running and interrupting drag
  const handleRTPChange = useCallback((min: number, max: number) => {
    setActivePreset(prev => {
      if (prev) {
        setPreviousPreset(prev);
        return null;
      }
      return prev;
    });
    
    const newRange = { min, max };
    setRtpRange(newRange);
    setCustomRtpRange(newRange);
  }, []);

  return (
    <motion.div 
      className="backdrop-blur-[6px] backdrop-filter relative rounded-[24px] w-full"
      animate={{
        backgroundImage: isCustomMode ? 'none' : (activePresetData ? activePresetData.bgGradient : 'none')
      }}
      transition={{ duration: 0 }}
      style={{
        backgroundColor: isCustomMode ? 'rgba(255, 255, 255, 0.04)' : undefined
      }}
    >
      <div className="box-border flex flex-col items-center p-[12px] w-full">
        
        {/* Title */}
        <div className="box-border flex flex-col items-start pb-[12px] px-[16px] w-full">
          <div className="flex gap-[4px] h-[32px] items-center w-full">
            <p className="font-['Open_Sans:Bold',sans-serif] font-bold text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              Style of Play
            </p>
            <div className="w-[14px] pl-[2px] pt-[2px]">
              <div className="size-[12px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path clipRule="evenodd" d={svgPaths.p36140b00} fill="white" fillRule="evenodd" opacity="0.25" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[rgba(255,255,255,0.5)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Select a preset or build your own filter below.
          </p>
        </div>

        {/* Preset Pills */}
        <div className="flex gap-[24px] h-[46px] items-center p-[7px] w-full mb-[12px]">
          
          {/* Preset buttons */}
          <div className="flex grow items-center">
            {presets.map((preset) => {
              const isActive = activePreset === preset.id;
              
              // Hover colors (100% opacity for non-active states)
              const hoverColors = {
                'quick-wins': '#4CAF50',
                'casual-fun': '#42A5F5',
                'long-run': '#7E57C2',
                'big-thrills': '#FF9800',
                'high-stakes': '#B12E5F'
              };
              
              const isHovered = hoveredPreset === preset.id;
              const textColor = isActive ? '#ffffff' : (isHovered ? hoverColors[preset.id as keyof typeof hoverColors] : '#ffffff');
              
              return (
                <button 
                  key={preset.id}
                  onClick={() => handlePresetClick(preset.id)}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredPreset(preset.id)}
                  onMouseLeave={() => setHoveredPreset(null)}
                >
                  <div className="flex h-[32px] items-center px-[12px] py-[8px] rounded-[18px] relative z-10">
                    <p 
                      className="capitalize font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] transition-colors duration-200" 
                      style={{ 
                        fontVariationSettings: "'wdth' 100",
                        color: textColor
                      }}
                    >
                      {preset.name}
                    </p>
                  </div>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activePresetBg"
                      className="absolute inset-0 rounded-[999px]"
                      style={{ 
                        backgroundColor: preset.color,
                        boxShadow: `0px 0px 20px 6px ${preset.shadowColor}`
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Custom button */}
          <button 
            onClick={handleCustomClick}
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsCustomHovered(true)}
            onMouseLeave={() => setIsCustomHovered(false)}
          >
            <div 
              className="flex h-[32px] items-center gap-[4px] px-[12px] py-[8px] rounded-[18px] transition-all"
              style={{
                opacity: isCustomMode ? 1 : 0.5
              }}
            >
              <div className="size-[12px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.p2f7a000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                </svg>
              </div>
              <p 
                className="capitalize font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] transition-colors duration-200" 
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: '#ffffff'
                }}
              >
                Custom
              </p>
            </div>
            
            {/* Border - shows in both active and inactive states */}
            <div 
              className="absolute inset-0 border border-solid rounded-[999px] pointer-events-none transition-colors duration-200"
              style={{
                borderColor: isCustomMode
                  ? (isCustomHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)')
                  : (isCustomHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)')
              }}
            />
          </button>
        </div>

        {/* Callout Box */}
        <div className="w-full mb-[12px]">
          {(isCustomMode || activePresetData) && (
            <div 
              className="rounded-[16px]"
              style={{
                backgroundColor: isCustomMode 
                  ? 'rgba(255, 255, 255, 0.05)' 
                  : activePresetData 
                    ? (() => {
                        const colorMap = {
                          'quick-wins': 'rgba(76, 175, 80, 0.1)',
                          'casual-fun': 'rgba(66, 165, 245, 0.1)',
                          'long-run': 'rgba(126, 87, 194, 0.1)',
                          'big-thrills': 'rgba(255, 152, 0, 0.1)',
                          'high-stakes': 'rgba(229, 57, 53, 0.1)'
                        };
                        return colorMap[activePresetData.id as keyof typeof colorMap];
                      })()
                    : 'rgba(255, 255, 255, 0.05)',
                transition: 'none'
              }}
            >
              {/* Preset Description */}
              <div className="flex gap-[16px] items-center px-[16px] py-[12px] h-[72px]">
                {isCustomMode ? (
                  <>
                    <div className="shrink-0 size-[48px]">
                      <ImageWithFallback 
                        src={image_b6149431a0cb0c04406f6732c6f893f0e325adbf} 
                        alt="Custom Mode"
                        className="size-full object-cover rounded-[8px]"
                      />
                    </div>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-white text-[12px] flex-1" style={{ fontVariationSettings: "'wdth' 100", opacity: 0.7 }}>
                      You have full control. Mix volatility and RTP as you like, or choose from our play style presets.
                    </p>
                  </>
                ) : activePresetData ? (
                  <>
                    <div className="shrink-0 size-[48px]">
                      <ImageWithFallback 
                        src={activePresetData.iconUrl} 
                        alt={activePresetData.name}
                        className="size-full object-cover rounded-[8px]"
                      />
                    </div>
                    <p 
                      className="font-['Open_Sans:Regular',sans-serif] text-[12px] flex-1" 
                      style={{ fontVariationSettings: "'wdth' 100", color: activePresetData.textColor }}
                    >
                      {activePresetData.description}
                    </p>
                  </>
                ) : null}
              </div>

              {/* Filters Grid - Volatility and RTP */}
              <div className="flex gap-[8px] px-[12px] pb-[12px]">
                {/* Volatility - With static white border at 15% opacity */}
                <div className="flex-1 relative rounded-[16px]">
                  {/* Static White Border */}
                  <div 
                    aria-hidden="true" 
                    className="absolute border border-solid inset-0 pointer-events-none rounded-[16px]"
                    style={{ 
                      borderColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  />
                  
                  <div className="flex flex-col gap-[8px] pb-[16px] px-[16px]">
                    
                    {/* Title */}
                    <div className="flex gap-[8px] h-[36px] items-center">
                      <div className="h-[24px] w-[41.143px]">
                        <GaugeDisplay state={getGaugeState()} />
                      </div>
                      <div className="flex gap-[5px] items-center">
                        <p className="font-['Open_Sans:Bold',sans-serif] font-bold text-[#acb0b9] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Volatility
                        </p>
                        <div className="w-[14px] pl-[2px] pt-[2px]">
                          <div className="size-[12px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                              <path clipRule="evenodd" d={svgPaths.p36140b00} fill="white" fillRule="evenodd" opacity="0.25" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Volatility Options */}
                    <div className="flex flex-col gap-[8px]">
                      {/* Primary volatility options - 3 per row, hug content */}
                      <div className="flex gap-[8px]">
                        {volatilityOptions.slice(0, 3).map((option) => {
                          const isSelected = selectedVolatility.includes(option);
                          const borderColor = isSelected && activePresetData ? activePresetData.borderColor : 'rgba(255,255,255,0.1)';
                          
                          return (
                            <button
                              key={option}
                              onClick={() => handleVolatilityToggle(option)}
                              className="h-[36px] relative rounded-[18px] cursor-pointer"
                            >
                              <div 
                                className="flex gap-[8px] h-[36px] items-center px-[14px] py-[8px] rounded-[inherit]"
                                style={{
                                  backgroundColor: isSelected ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'
                                }}
                              >
                                <p className="capitalize font-['Open_Sans:Regular',sans-serif] text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {option}
                                </p>
                                <AnimatePresence initial={false}>
                                  {isSelected && (
                                    <motion.div 
                                      initial={{ opacity: 0, maxWidth: 0 }}
                                      animate={{ opacity: 1, maxWidth: 24 }}
                                      exit={{ opacity: 0, maxWidth: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="size-[16px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                          <path d={svgPaths.p30769300} fill="white" />
                                          <path d={svgPaths.p681bf80} fill="#202735" />
                                        </svg>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                              <div 
                                aria-hidden="true" 
                                className="absolute border border-solid inset-0 pointer-events-none rounded-[18px]"
                                style={{ borderColor }}
                              />
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex gap-[8px]">
                        {volatilityOptions.slice(3, 6).map((option) => {
                          const isSelected = selectedVolatility.includes(option);
                          const borderColor = isSelected && activePresetData ? activePresetData.borderColor : 'rgba(255,255,255,0.1)';
                          
                          return (
                            <button
                              key={option}
                              onClick={() => handleVolatilityToggle(option)}
                              className="h-[36px] relative rounded-[18px] cursor-pointer"
                            >
                              <div 
                                className="flex gap-[8px] h-[36px] items-center px-[14px] py-[8px] rounded-[inherit]"
                                style={{
                                  backgroundColor: isSelected ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'
                                }}
                              >
                                <p className="capitalize font-['Open_Sans:Regular',sans-serif] text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {option}
                                </p>
                                <AnimatePresence initial={false}>
                                  {isSelected && (
                                    <motion.div 
                                      initial={{ opacity: 0, maxWidth: 0 }}
                                      animate={{ opacity: 1, maxWidth: 24 }}
                                      exit={{ opacity: 0, maxWidth: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="size-[16px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                          <path d={svgPaths.p30769300} fill="white" />
                                          <path d={svgPaths.p681bf80} fill="#202735" />
                                        </svg>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                              <div 
                                aria-hidden="true" 
                                className="absolute border border-solid inset-0 pointer-events-none rounded-[18px]"
                                style={{ borderColor }}
                              />
                            </button>
                          );
                        })}
                      </div>

                      {/* Secondary volatility options - with hover states */}
                      <div className="flex flex-wrap gap-[8px]">
                        {volatilitySecondaryOptions.map((option) => {
                          const isSelected = selectedVolatility.includes(option);
                          const isHovered = hoveredSecondaryPill === option;
                          
                          // Get border color based on selected/hover state
                          const getBorderColor = () => {
                            if (isHovered) {
                              // On hover: 100% opacity
                              if (isSelected && activePresetData) {
                                // Extract RGB values and set to 100% opacity for themed color
                                const match = activePresetData.borderColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                                if (match) {
                                  return `rgba(${match[1]}, ${match[2]}, ${match[3]}, 1)`;
                                }
                              }
                              // For non-selected or no preset, white at 100%
                              return 'rgba(255, 255, 255, 1)';
                            } else {
                              // Not hovered
                              if (isSelected) {
                                return activePresetData ? activePresetData.borderColor : 'rgba(255,255,255,0.5)';
                              }
                              return 'rgba(255,255,255,0.1)';
                            }
                          };
                          
                          const borderColor = getBorderColor();
                          
                          return (
                            <button
                              key={option}
                              onClick={() => handleVolatilityToggle(option)}
                              onMouseEnter={() => setHoveredSecondaryPill(option)}
                              onMouseLeave={() => setHoveredSecondaryPill(null)}
                              className="h-[36px] relative rounded-[18px] cursor-pointer"
                            >
                              <div 
                                className="flex gap-[8px] h-[36px] items-center px-[14px] py-[8px] rounded-[inherit]"
                                style={{
                                  backgroundColor: 'transparent'
                                }}
                              >
                                <p className="capitalize font-['Open_Sans:Regular',sans-serif] text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {option}
                                </p>
                                <AnimatePresence initial={false}>
                                  {isSelected && (
                                    <motion.div 
                                      initial={{ opacity: 0, maxWidth: 0 }}
                                      animate={{ opacity: 1, maxWidth: 24 }}
                                      exit={{ opacity: 0, maxWidth: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="size-[16px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                          <path d={svgPaths.p30769300} fill="white" />
                                          <path d={svgPaths.p681bf80} fill="#202735" />
                                        </svg>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                              <div 
                                aria-hidden="true" 
                                className="absolute border border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-200"
                                style={{ borderColor }}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RTP - With static white border at 15% opacity */}
                <div className="flex-1 relative rounded-[16px]">
                  {/* Static White Border */}
                  <div 
                    aria-hidden="true" 
                    className="absolute border border-solid inset-0 pointer-events-none rounded-[16px]"
                    style={{ 
                      borderColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  />
                  
                  <div className="flex flex-col gap-[8px] pb-[16px] px-[16px]">
                    
                    {/* Title */}
                    <div className="flex gap-[8px] h-[36px] items-center">
                      <div className="flex gap-[4px] items-center">
                        <p className="font-['Open_Sans:Bold',sans-serif] font-bold text-[#acb0b9] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          RTP
                        </p>
                        <div className="w-[14px] pl-[2px] pt-[2px]">
                          <div className="size-[12px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                              <path clipRule="evenodd" d={svgPaths.p36140b00} fill="white" fillRule="evenodd" opacity="0.25" />
                            </svg>
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
                        activePreset={activePreset}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Themed Border */}
      {activePresetData && (
        <div 
          aria-hidden="true" 
          className="absolute border border-solid inset-0 pointer-events-none rounded-[24px]"
          style={{ borderColor: activePresetData.borderColor }}
        />
      )}
    </motion.div>
  );
}