import { ReactElement } from "react";

const AboutSegment = (): ReactElement => {
  return <div className='flex flex-col bg-blue-600 justify-center items-center
    xl:fixed xl:w-1/2 x: h-screen
    sm:static sm:w-full sm:h-full'>
    <div>
      <h1>Xaviour Greenhalgh</h1>
      <h2>Software Engineer</h2>

      {/* MENU */}
      <div className='sm:hidden xl:flex w-full'>
        HIDDEN MENU BABY
      </div>
    </div>
  </div>
}

export default AboutSegment;
