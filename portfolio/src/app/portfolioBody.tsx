'use client'

import AboutSegment from "@/panels/AboutSegment";
import ContactSegment from "@/panels/ContactSegment";
import ExperienceSegment from "@/panels/ExperienceSegment";
import ProjectsSegment from "@/panels/ProjectsSegment";
import { ReactElement } from "react"

const PortfolioBody = (): ReactElement => {
  return <div className='flex w-full'>
    <div className='flex w-full sm:flex-col xl:flex-row'>
      <div className='flex flex-col sm:w-full xl:w-1/2'>
        <AboutSegment/>
      </div>
      <div className='flex flex-col sm:w-full xl:w-1/2'>
        <ExperienceSegment/>
        <ProjectsSegment/>
        <ContactSegment/>
      </div>
    </div>
  </div>
}

export default PortfolioBody;