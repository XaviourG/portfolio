import NavMenu from "@/components/menu/NavMenu";
import { ReactElement } from "react";

const AboutSegment = (): ReactElement => {
  return <div className='flex flex-col justify-center items-center
    xl:fixed xl:w-1/2 x: h-screen
    sm:static sm:w-full sm:h-full'>
    <div className='p-16 pb-24'>
      <h1 className='sm:text-center xl:text-left'>
        <span className="font-bold">XAVIOUR</span><br/>GREENHALGH
      </h1>
      <h2 className='sm:text-center xl:text-left'>
        SOFTWARE ENGINEER
      </h2>

      {/* MENU */}
      <div className='sm:hidden xl:flex w-full'>
        <NavMenu/>
      </div>
    </div>
  </div>
}

export default AboutSegment;
