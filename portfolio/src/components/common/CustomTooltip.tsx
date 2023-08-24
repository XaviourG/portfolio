import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

interface Props {
  tooltip: React.ReactNode,
  children: React.ReactNode,
  forceState?: boolean | null,
}

const CustomTooltip = ({
  tooltip,
  children,
  forceState = null,
}: Props): ReactElement => {
  const [weakFocus, setWeakFocus] = useState(false);
  const [strongFocus, setStrongFocus] = useState(false);
  const [isBelowMidpoint, setIsBelowMidpoint] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceState !== null) {
      setWeakFocus(forceState);
      setStrongFocus(forceState);
    }
  }, [forceState]);

  const mouseEnter = () => {
    setWeakFocus(true);
  }

  const mouseLeave = () => {
    setWeakFocus(false);
  }

  const click = () => {
    setStrongFocus(!strongFocus);
  }

  const showAbove = (): boolean => {
    return (isBelowMidpoint && (weakFocus || strongFocus));
  }

  const showBelow = (): boolean => {
    return (!isBelowMidpoint && (weakFocus || strongFocus));
  }

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
    <div className="flex flex-col w-full items-center">

    {showAbove() && tooltip}

    <div ref={ref}
      className="flex flex-col w-full items-center"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={click}
    >
      {children}
    </div>

    {showBelow() && tooltip}

    </div>
  );
}

export default CustomTooltip;