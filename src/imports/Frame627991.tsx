import svgPaths from "./svg-m9sgnjrf5e";
import imgImage1 from "figma:asset/2efbd7e1afc4dc4565c9296494e798e6497ee1e6.png";

function Info() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[2px] pr-0 pt-[2px] relative shrink-0 w-[14px]" data-name="info">
      <div className="relative shrink-0 size-[12px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path clipRule="evenodd" d={svgPaths.p36140b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" opacity="0.25" />
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center relative shrink-0">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Style of Play
      </p>
      <Info />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame6 />
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text/Icon">
      <Frame2 />
    </div>
  );
}

function SupportingConent() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Supporting conent">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Select a preset or build your own filter below.
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center pb-[12px] pt-0 px-[16px] relative shrink-0 w-[788px]" data-name="title">
      <TextIcon />
      <SupportingConent />
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quick Wins
      </p>
    </div>
  );
}

function Perset() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-center overflow-clip p-[8px] relative rounded-[18px] shrink-0" data-name="Perset">
      <TextWrapper />
    </div>
  );
}

function LocalPresetBtn() {
  return (
    <div className="content-stretch flex items-start opacity-0 relative shrink-0" data-name="[Local] preset-btn">
      <Perset />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#4caf50] bottom-[7px] box-border content-stretch flex items-center left-[7px] overflow-clip rounded-[999px] shadow-[0px_0px_20px_6px_#4caf50] top-[7px]" data-name="background">
      <LocalPresetBtn />
    </div>
  );
}

function TextWrapper1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quick Wins
      </p>
    </div>
  );
}

function Perset1() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-center overflow-clip p-[8px] relative rounded-[18px] shrink-0" data-name="Perset">
      <TextWrapper1 />
    </div>
  );
}

function LocalPresetBtn1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="[Local] preset-btn">
      <Perset1 />
    </div>
  );
}

function TextWrapper2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casual Fun
      </p>
    </div>
  );
}

function Perset2() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-center overflow-clip p-[8px] relative rounded-[18px] shrink-0" data-name="Perset">
      <TextWrapper2 />
    </div>
  );
}

function LocalPresetBtn2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="[Local] preset-btn">
      <Perset2 />
    </div>
  );
}

function TextWrapper3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Long Run
      </p>
    </div>
  );
}

function Perset3() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-center overflow-clip p-[8px] relative rounded-[18px] shrink-0" data-name="Perset">
      <TextWrapper3 />
    </div>
  );
}

function LocalPresetBtn3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="[Local] preset-btn">
      <Perset3 />
    </div>
  );
}

function TextWrapper4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Big Thrills
      </p>
    </div>
  );
}

function Perset4() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-center overflow-clip p-[8px] relative rounded-[18px] shrink-0" data-name="Perset">
      <TextWrapper4 />
    </div>
  );
}

function LocalPresetBtn4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="[Local] preset-btn">
      <Perset4 />
    </div>
  );
}

function TextWrapper5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High Stakes
      </p>
    </div>
  );
}

function Perset5() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-center overflow-clip p-[8px] relative rounded-[18px] shrink-0" data-name="Perset">
      <TextWrapper5 />
    </div>
  );
}

function LocalPresetBtn5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="[Local] preset-btn">
      <Perset5 />
    </div>
  );
}

function LocalPersetsGroup() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="[Local[ Persets group">
      <LocalPresetBtn1 />
      <LocalPresetBtn2 />
      <LocalPresetBtn3 />
      <LocalPresetBtn4 />
      <LocalPresetBtn5 />
    </div>
  );
}

function HugeIconCopied() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="huge icon copied 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="huge icon copied 3">
          <path d={svgPaths.p2f7a000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function IconLeft() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-name="Icon left">
      <HugeIconCopied />
    </div>
  );
}

function TextWrapper6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Custom
      </p>
    </div>
  );
}

function Perset6() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-center opacity-50 overflow-clip p-[8px] relative rounded-[18px] shrink-0" data-name="Perset">
      <IconLeft />
      <TextWrapper6 />
    </div>
  );
}

function LocalPresetBtn6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="[Local] preset-btn">
      <Perset6 />
    </div>
  );
}

function LocalPersetsGroup1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="[Local[ Persets group">
      <LocalPresetBtn6 />
    </div>
  );
}

function LocalStyleOfPlayPresets() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter h-[46px] relative rounded-[999px] shrink-0 w-full" data-name="[Local] Style of play presets">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[46px] items-center p-[7px] relative w-full">
          <Background />
          <LocalPersetsGroup />
          <LocalPersetsGroup1 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[16px] pt-0 px-0 relative shrink-0">
      <Title />
      <LocalStyleOfPlayPresets />
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="image 2">
      <div className="absolute aspect-[1024/1024] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[748px]">
      <Image />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#a5d7a7] text-[12px] w-[660px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        For players who enjoy fast rounds and frequent small payouts. Ideal for steady, low-risk play.
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bottom-[27.26%] left-1/2 top-[-124.15%] translate-x-[-50%] w-[2.619px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 8">
          <path d={svgPaths.p396abc80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[0.01%] right-[0.01%] top-[0.02%]" data-name="Oval 13">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="1.81364" cy="1.81364" fill="var(--fill-0, white)" id="Oval 13" r="1.35292" stroke="var(--stroke-0, #29A8AC)" strokeWidth="0.921427" />
        </svg>
      </div>
    </div>
  );
}

function VolatilityDialArcSmall() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.143px]" data-name="Volatility dial arc / small">
      <div className="absolute bottom-[-54.94%] left-1/2 top-[26.31%] translate-x-[-50%] w-[30.872px]" data-name="Line">
        <div className="absolute bottom-1/2 left-0 right-1/2 top-[47.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
            <g id="Line" opacity="0.3">
              <mask fill="white" id="path-1-inside-1_2049_7054">
                <path d={svgPaths.p328dd680} />
              </mask>
              <path d={svgPaths.p328dd680} fill="url(#paint0_linear_2049_7054)" mask="url(#path-1-inside-1_2049_7054)" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2049_7054" x1="31.5718" x2="-0.612408" y1="0.616287" y2="0.911554">
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
      <div className="absolute bottom-[12.52%] left-1/2 top-[7.65%] translate-x-[-50%] w-[38.319px]" data-name="Background Line">
        <div className="absolute inset-[-2.61%_-1.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 21">
            <path d={svgPaths.p3a924a20} id="Background Line" opacity="0.8" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="bevel" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.52%] left-1/2 top-[7.65%] translate-x-[-50%] w-[38.319px]" data-name="Background">
        <div className="absolute inset-[-5.22%_-2.61%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 22">
            <path d={svgPaths.p2a491400} id="Background" stroke="var(--stroke-0, #828282)" strokeDasharray="0.04 5.17" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-67.31%] left-1/2 top-[7.65%] translate-x-[-50%] w-[38.319px]" data-name="Line">
        <div className="absolute inset-[46.91%_97.22%_47.22%_-2.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.peb81340} id="Line" stroke="url(#paint0_linear_2049_7056)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12884" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2049_7056" x1="40.2521" x2="0.304285" y1="0.987095" y2="1.35359">
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
      <div className="absolute bottom-[1.68%] flex items-center justify-center left-[calc(50%-0.21px)] top-[83.21%] translate-x-[-50%] w-[3.628px]">
        <div className="flex-none rotate-[270deg] size-[3.628px]">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[2px] pr-0 pt-[2px] relative shrink-0 w-[14px]" data-name="info">
      <div className="relative shrink-0 size-[12px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path clipRule="evenodd" d={svgPaths.p36140b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" opacity="0.25" />
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#acb0b9] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Volatility
      </p>
      <Info1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[34px] items-center min-h-px min-w-px relative shrink-0">
      <VolatilityDialArcSmall />
      <Frame7 />
    </div>
  );
}

function TextIcon1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text/Icon">
      <Frame3 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0 w-[342px]" data-name="title">
      <TextIcon1 />
    </div>
  );
}

function TextWrapper7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Low
      </p>
    </div>
  );
}

function ChipsIconIdicator() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chips / Icon idicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2049_7030)" id="Error handling">
          <path d={svgPaths.p30769300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p681bf80} fill="var(--fill-0, #202735)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2049_7030">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-[4px] pr-0 py-0 relative shrink-0" data-name="Icon wrapper">
      <ChipsIconIdicator />
    </div>
  );
}

function Chips() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] h-[36px] relative rounded-[18px] shrink-0" data-name="Chips">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit]">
        <TextWrapper7 />
        <IconWrapper />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4caf50] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function TextWrapper8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Low-Medium
      </p>
    </div>
  );
}

function Chips1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[18px] shrink-0" data-name="Chips">
      <TextWrapper8 />
    </div>
  );
}

function TextWrapper9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Medium `}</p>
    </div>
  );
}

function Chips2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[18px] shrink-0" data-name="Chips">
      <TextWrapper9 />
    </div>
  );
}

function TextWrapper10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Med-High
      </p>
    </div>
  );
}

function Chips3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[18px] shrink-0" data-name="Chips">
      <TextWrapper10 />
    </div>
  );
}

function TextWrapper11() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
    </div>
  );
}

function Chips4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[18px] shrink-0" data-name="Chips">
      <TextWrapper11 />
    </div>
  );
}

function TextWrapper12() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Very High
      </p>
    </div>
  );
}

function Chips5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[18px] shrink-0" data-name="Chips">
      <TextWrapper12 />
    </div>
  );
}

function TextWrapper13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Not Applicable
      </p>
    </div>
  );
}

function Chips6() {
  return (
    <div className="h-[36px] relative rounded-[18px] shrink-0" data-name="Chips">
      <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit]">
        <TextWrapper13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function TextWrapper14() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text wrapper">
      <p className="capitalize font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Adjusted
      </p>
    </div>
  );
}

function Chips7() {
  return (
    <div className="h-[36px] relative rounded-[18px] shrink-0" data-name="Chips">
      <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit]">
        <TextWrapper14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Chips6 />
      <Chips7 />
    </div>
  );
}

function Volatility() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Volatility">
      <Chips />
      <Chips1 />
      <Chips2 />
      <Chips3 />
      <Chips4 />
      <Chips5 />
      <Frame5 />
    </div>
  );
}

function Volatility1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Volatility">
      <div aria-hidden="true" className="absolute border border-[rgba(172,176,185,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[16px] pl-[16px] pr-[34px] pt-0 relative w-full">
          <Title1 />
          <Volatility />
        </div>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[2px] pr-0 pt-[2px] relative shrink-0 w-[14px]" data-name="info">
      <div className="relative shrink-0 size-[12px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path clipRule="evenodd" d={svgPaths.p36140b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" opacity="0.25" />
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#acb0b9] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        RTP
      </p>
      <Info2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[34px] items-center min-h-px min-w-px relative shrink-0">
      <Frame8 />
    </div>
  );
}

function TextIcon2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text/Icon">
      <Frame4 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0 w-full" data-name="title">
      <TextIcon2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start relative shrink-0 text-white w-[33px]">
      <div className="flex flex-col justify-center leading-[0] min-w-full opacity-50 relative shrink-0 text-[10px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Min:</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        96%
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-end relative shrink-0 text-nowrap text-white">
      <div className="flex flex-col justify-center leading-[0] opacity-50 relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] text-nowrap whitespace-pre">Max:</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[14px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`>97%`}</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[35.915px]">
      <div className="absolute bottom-[-163.23%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 95">
          <g id="Frame 1597883050">
            <path d={svgPaths.p29761c80} fill="var(--fill-0, white)" id="Ellipse 2" opacity="0" />
            <g id="Ellipse 1" opacity="0.5">
              <mask fill="white" id="path-2-inside-1_2049_7034">
                <path d={svgPaths.p364df180} />
              </mask>
              <path d={svgPaths.p364df180} fill="var(--fill-0, white)" mask="url(#path-2-inside-1_2049_7034)" stroke="var(--stroke-0, white)" strokeWidth="2" />
            </g>
            <path d="M17.9578 3V94.541" id="Vector 54" stroke="var(--stroke-0, #FF0000)" strokeWidth="0.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] content-stretch flex grow h-[36px] items-center justify-between min-h-px min-w-[70px] relative rounded-[50.704px] shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Frame13 key={i} />
      ))}
    </div>
  );
}

function Slider() {
  return (
    <div className="h-[36px] relative rounded-[30.423px] shrink-0 w-full" data-name="Slider">
      <div aria-hidden="true" className="absolute border border-[#4caf50] border-solid inset-[-1px] pointer-events-none rounded-[31.423px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[5.07px] h-[36px] items-center justify-end pl-[263px] pr-0 py-[5.07px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Unit() {
  return (
    <div className="bg-white h-[4px] relative rounded-[1px] shrink-0 w-px" data-name="_unit">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[10px] text-center text-nowrap text-white top-[calc(50%+9px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">{`<90%`}</p>
      </div>
    </div>
  );
}

function Unit1() {
  return <div className="bg-white h-[4px] opacity-50 rounded-[1px] shrink-0 w-px" data-name="_unit" />;
}

function Unit2() {
  return (
    <div className="bg-white h-[4px] relative rounded-[1px] shrink-0 w-px" data-name="_unit">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[10px] text-center text-nowrap text-white top-[calc(50%+9px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">91%</p>
      </div>
    </div>
  );
}

function Unit3() {
  return (
    <div className="bg-white h-[4px] relative rounded-[1px] shrink-0 w-px" data-name="_unit">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[10px] text-center text-nowrap text-white top-[calc(50%+9px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">92%</p>
      </div>
    </div>
  );
}

function Unit4() {
  return (
    <div className="bg-white h-[4px] relative rounded-[1px] shrink-0 w-px" data-name="_unit">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[10px] text-center text-nowrap text-white top-[calc(50%+9px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">93%</p>
      </div>
    </div>
  );
}

function Unit5() {
  return (
    <div className="bg-white h-[4px] relative rounded-[1px] shrink-0 w-px" data-name="_unit">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[10px] text-center text-nowrap text-white top-[calc(50%+9px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">94%</p>
      </div>
    </div>
  );
}

function Unit6() {
  return (
    <div className="bg-white h-[4px] relative rounded-[1px] shrink-0 w-px" data-name="_unit">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[10px] text-center text-nowrap text-white top-[calc(50%+9px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">95%</p>
      </div>
    </div>
  );
}

function Unit7() {
  return (
    <div className="bg-white h-[4px] relative rounded-[1px] shrink-0 w-px" data-name="_unit">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[10px] text-center text-nowrap text-white top-[calc(50%+9px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">96%</p>
      </div>
    </div>
  );
}

function Unit8() {
  return (
    <div className="bg-white h-[4px] relative rounded-[1px] shrink-0 w-px" data-name="_unit">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[10px] text-center text-nowrap text-white top-[calc(50%+9px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">{`>97%`}</p>
      </div>
    </div>
  );
}

function StepsScaled() {
  return (
    <div className="h-[15px] opacity-50 relative shrink-0 w-full" data-name="Steps Scaled">
      <div className="size-full">
        <div className="box-border content-stretch flex h-[15px] items-start justify-between px-[17px] py-0 relative w-full">
          <Unit />
          <Unit1 />
          <Unit2 />
          <Unit1 />
          <Unit3 />
          <Unit1 />
          <Unit4 />
          <Unit1 />
          <Unit5 />
          <Unit1 />
          <Unit6 />
          <Unit1 />
          <Unit7 />
          <Unit1 />
          <Unit8 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Slider />
      <StepsScaled />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame10 />
    </div>
  );
}

function Rtp() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[16px] self-stretch shrink-0" data-name="RTP">
      <div aria-hidden="true" className="absolute border border-[rgba(172,176,185,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[16px] pt-0 px-[16px] relative size-full">
          <Title2 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function SelectionWrapper() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Selection wrapper">
      <Volatility1 />
      <Rtp />
    </div>
  );
}

function Description() {
  return (
    <div className="bg-[rgba(76,175,80,0.1)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center pb-[16px] pt-[8px] px-[16px] relative rounded-[16px] shrink-0 w-[788px]" data-name="Description">
      <div aria-hidden="true" className="absolute border border-[rgba(76,175,80,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame1 />
      <SelectionWrapper />
    </div>
  );
}

export default function Frame12() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter relative rounded-[24px] size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(76, 175, 80, 0.15) 0%, rgba(76, 175, 80, 0.15) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%)" }}>
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center overflow-clip p-[12px] relative size-full">
          <Frame9 />
          <Description />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(76,175,80,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}