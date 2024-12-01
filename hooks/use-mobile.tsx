import * as React from "react";

const MOBILE_BREAKPOINT = 1024;
const MD_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

export function useIsMd() {
  const [isMd, setIsMd] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MD_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMd(window.innerWidth < MD_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMd(window.innerWidth < MD_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMd;
}
