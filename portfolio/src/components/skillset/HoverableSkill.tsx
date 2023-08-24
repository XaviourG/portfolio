import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { CodeSkill } from "./Skillset";

interface Props {
  content: CodeSkill,
}

const HoverableSkill = ({
  content,
}: Props): ReactElement => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isBelowMidpoint, setIsBelowMidpoint] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsBelowMidpoint((window.innerHeight/2) < ref.current.offsetTop - window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBelowMidpoint])

  return (
    <div className="flex flex-col w-full items-center m-16 rounded-2xl bg-NEUTRAL_DARK">

    {isBelowMidpoint && <>TOOLTIP</>}

    <div ref={ref}
      className="bg-SECONDARY rounded-full py-2 px-4"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(!showTooltip)}
    >
      <p className="text-BACKGROUND_END">
        {content.name}
      </p>
    </div>

    {!isBelowMidpoint && <>TOOLTIP</>}

    </div>
  );
}

export default HoverableSkill;
