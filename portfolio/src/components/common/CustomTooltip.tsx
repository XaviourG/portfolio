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
    if (forceState !== null && forceState === false) {
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

  const leftShift = (): string => {
    if (ref.current) {
      if (ref.current.offsetLeft < 100) {
        return '-4.5rem';
      } else if ((window.innerWidth - ref.current.offsetLeft) < 150) {
        return '-18rem';
      }
      if ((window.innerWidth/2) < ref.current.offsetLeft) {
        return '-13rem';
      }
      if ((window.innerWidth/2) > ref.current.offsetLeft) {
        return '-9rem';
      }
    }
    return '-11rem';
  }

  return (
    <div ref={ref}
      className="flex flex-col items-center duration-500"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={click}
    >

    { showAbove() &&
      <div className={"w-0 h-0 relative z-40"}>
        <div className="rounded-2xl bg-SECONDARY" style={{
          position: 'absolute',
          bottom: -10,
          left: leftShift(),
        }}>
          {tooltip}
        </div>
      </div>
    } 

    <div ref={ref} className={`flex flex-col items-center cursor-pointer
    ${showAbove() ? 'bg-SECONDARY rounded-b-2xl z-50' : ''}
    ${showBelow() ? 'bg-SECONDARY rounded-t-2xl z-50' : ''}`}>
      {children}
    </div>

    {
    showBelow() &&
    <div className="w-0 h-0 relative z-40">
      <div className="rounded-2xl bg-SECONDARY" style={{
        position: 'absolute',
        top: -10,
        left: leftShift(),
      }}>
        {tooltip}
      </div>
    </div>
    }

    </div>
  );
}

export default CustomTooltip;
