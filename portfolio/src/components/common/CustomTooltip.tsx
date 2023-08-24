import { ReactElement, RefObject, useCallback, useEffect, useRef, useState } from "react";

interface Props {
  tooltip: React.ReactNode,
  children: React.ReactNode,
  forceState?: boolean | null,
  focusHook?: (focus: boolean) => void | null,
}

const CustomTooltip = ({
  tooltip,
  children,
  forceState = null,
  focusHook,
}: Props): ReactElement => {
  const [weakFocus, setWeakFocus] = useState(false);
  const [strongFocus, setStrongFocus] = useState(false);
  const [isBelowMidpoint, setIsBelowMidpoint] = useState(false);
  const [revealing, setRevealing] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceState !== null) {
      setWeakFocus(forceState);
      setStrongFocus(forceState);
    }
  }, [forceState]);

  const mouseEnter = () => {
    setWeakFocus(true);
    setRevealing(true);
    if (!strongFocus && focusHook) {
      focusHook(true);
    }
  }

  const mouseLeave = () => {
    setWeakFocus(false);
    setRevealing(false);
    if (!strongFocus && focusHook) {
      focusHook(true);
    }
  }

  const click = () => {
    const focus = !strongFocus;
    setStrongFocus(focus);
    if (focusHook) {
      focusHook(focus);
    }
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
  }, [isBelowMidpoint]);

  return (
    <div ref={ref}
      className="flex flex-col items-center duration-500"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={click}
    >

    { showAbove() &&
      <div className={"w-0 h-0 relative"}>
        <div className="rounded-2xl bg-NEUTRAL_LIGHT" style={{
          position: 'absolute',
          bottom: 0,
          left: '-11rem',
        }}>
          {tooltip}
        </div>
      </div>
    } 

    <div ref={ref} className={`flex flex-col items-center
    ${showAbove() ? 'bg-NEUTRAL_LIGHT rounded-b-2xl' : ''}
    ${showBelow() ? 'bg-NEUTRAL_LIGHT rounded-t-2xl' : ''}`}>
      {children}
    </div>

    {
    showBelow() &&
    <div className="w-0 h-0 relative z-50">
      <div className="rounded-2xl bg-NEUTRAL_LIGHT" style={{
        position: 'absolute',
        top: 0,
        left: '-11rem',
      }}>
        {tooltip}
      </div>
    </div>
    }

    </div>
  );
}

export default CustomTooltip;
