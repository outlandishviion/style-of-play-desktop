import svgPaths from "./svg-wjgitcgmnm";

function Frame1() {
  return (
    <div className="relative shrink-0 size-[35.915px]">
      <div className="absolute bottom-[-163.23%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 95">
          <g id="Frame 1597883050">
            <path d={svgPaths.p29761c80} fill="var(--fill-0, white)" id="Ellipse 2" opacity="0" />
            <g id="Ellipse 1" opacity="0.5">
              <mask fill="white" id="path-2-inside-1_2050_78">
                <path d={svgPaths.p364df180} />
              </mask>
              <path d={svgPaths.p364df180} fill="var(--fill-0, white)" mask="url(#path-2-inside-1_2050_78)" stroke="var(--stroke-0, white)" strokeWidth="2" />
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
        <Frame1 key={i} />
      ))}
    </div>
  );
}

export default function SliderHighStakes() {
  return (
    <div className="relative rounded-[30.423px] size-full" data-name="Slider: High Stakes">
      <div aria-hidden="true" className="absolute border border-[#b12e5f] border-solid inset-[-1px] pointer-events-none rounded-[31.423px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[5.07px] items-center justify-end pl-[131px] pr-[43px] py-[5.07px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}