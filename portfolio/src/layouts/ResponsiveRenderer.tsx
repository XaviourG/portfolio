'use client'

import { ReactElement, useState } from "react";
import NavigationBar from "@/components/top_bar/NavigationBar";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

const ResponsiveRenderer = (): ReactElement => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  window.addEventListener('resize', handleResize);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {
        isMobile
        ?
        <MobileLayout/>
        :
        <DesktopLayout/>
      }
    </main>
  )
};

export default ResponsiveRenderer;
