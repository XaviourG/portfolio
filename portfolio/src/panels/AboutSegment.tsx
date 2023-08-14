import NavMenu from "@/components/menu/NavMenu";
import { PageRefData } from "@/components/menu/PageRefData";
import SocialsMenu from "@/components/menu/SocialsMenu";
import { ReactElement } from "react";

interface props {
  RefData: PageRefData,
}

const AboutSegment = ({
  RefData
}: props): ReactElement => {
  return <div className='flex flex-col justify-center items-center
    static w-full h-full
    xl:fixed xl:w-1/2 xl:h-screen'>
    <div className='flex p-12 xl:h-3/4 flex-col justify-between'>
      <div className='flex flex-col pt-24 xl:pt-0'>
        <h1 className='text-center xl:text-left text-4xl xl:text-7xl'>
          <span className="font-bold">XAVIOUR</span><br/>GREENHALGH
        </h1>
        <h2 className='font-display text-center xl:text-left text-xl xl:text-4xl'>
          SOFTWARE ENGINEER
        </h2>
      </div>

      {/* MENU */}
      <div className='hidden xl:flex w-full'>
        <NavMenu RefData={RefData}/>
      </div>

      <div className='flex justify-center xl:justify-start'>
        <SocialsMenu/>
      </div>
    </div>
  </div>
}

export default AboutSegment;
