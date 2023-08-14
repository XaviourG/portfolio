'use client'


import NavigationBar from "@/components/menu/NavigationBar";
import AboutSegment from "@/panels/AboutSegment";
import ContactSegment from "@/panels/ContactSegment";
import ShowcaseSegment from "@/panels/ShowcaseSegment";
import ProjectsSegment from "@/panels/ProjectsSegment";
import { ReactElement, useRef } from "react"
import { PageRefData } from "@/components/menu/PageRefData";

const PortfolioBody = (): ReactElement => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const refData: PageRefData = {
    aboutRef, projectsRef, contactRef
  }

  return <div className='flex w-full flex-col'>
    <div className='flex xl:hidden w-full sticky top-0 z-50'>
      <NavigationBar RefData={refData}/>
    </div>
    <div className="w-full flex justify-end">
      <p className="text-HIGHLIGHT75 pr-3">v1.1</p>
    </div>
    <div className='flex w-full flex-col xl:flex-row ' ref={aboutRef}>
      <div className='flex flex-col w-full xl:w-1/2'>
        <AboutSegment RefData={refData}/>
      </div>
      <div className='flex flex-col w-full xl:w-1/2'>
        <ShowcaseSegment />
        <div className="flex w-full" ref={projectsRef}>
          <ProjectsSegment/>
        </div>
        <div className="flex w-full" ref={contactRef}>
          <ContactSegment/>
        </div>
      </div>
    </div>
  </div>
}

export default PortfolioBody;