'use client'

import NavigationBar from "@/components/top_bar/NavigationBar";
import AboutSegment from "@/panels/AboutSegment";
import ContactSegment from "@/panels/ContactSegment";
import ShowcaseSegment from "@/panels/ShowcaseSegment";
import ProjectsSegment from "@/panels/ProjectsSegment";
import { ReactElement } from "react"

const PortfolioBody = (): ReactElement => {
  return <div className='flex w-full flex-col'>
    <div className='sm:flex xl:hidden w-full sticky top-0'>
      <NavigationBar/>
    </div>
    <div className='flex w-full sm:flex-col xl:flex-row'>
      <div className='flex flex-col sm:w-full xl:w-1/2'>
        <AboutSegment/>
      </div>
      <div className='flex flex-col sm:w-full xl:w-1/2'>
        <ShowcaseSegment/>
        <ProjectsSegment/>
        <ContactSegment/>
      </div>
    </div>
  </div>
}

export default PortfolioBody;