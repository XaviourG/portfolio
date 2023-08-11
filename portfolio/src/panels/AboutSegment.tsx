import NavMenu from "@/components/menu/NavMenu";
import { ReactElement } from "react";

const AboutSegment = (): ReactElement => {
  return <div className='flex flex-col justify-center items-center
    xl:fixed xl:w-1/2 x: h-screen
    sm:static sm:w-full sm:h-full'>
    <div className='border-solid border-2 border-white p-16 pb-24'>
      <h1>Xaviour Greenhalgh</h1>
      <h2>Software Engineer</h2>

      {/* MENU */}
      <div className='sm:hidden xl:flex w-full'>
        <NavMenu/>
      </div>
    </div>
  </div>
}

export default AboutSegment;
