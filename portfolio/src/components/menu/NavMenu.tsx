import { ReactElement } from "react";
import { PageRefData } from "./PageRefData";

interface props {
  RefData: PageRefData,
}

const NavMenu = ({
  RefData
}: props): ReactElement => {
  return <div className="flex flex-col">
    <div className="flex items-center duration-500 cursor-pointer pb-5
    text-NEUTRAL_DARK border-NEUTRAL_DARK gap-x-0
    hover:text-NEUTRAL_LIGHT hover:border-NEUTRAL_LIGHT hover:gap-x-6"
      onClick={() => RefData.aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="flex rounded-full border-solid border-2 border-inherit w-6 h-6"> </div>
      <p className="text-inherit text-2xl font-bold pl-2">
        About
      </p>
    </div>
    <div className="flex items-center duration-500 cursor-pointer pb-5
    text-NEUTRAL_DARK border-NEUTRAL_DARK gap-x-0
    hover:text-NEUTRAL_LIGHT hover:border-NEUTRAL_LIGHT hover:gap-x-6"
      onClick={() => RefData.projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="flex rounded-full border-solid border-2 border-inherit w-6 h-6"> </div>
      <p className="text-inherit text-2xl font-bold pl-2">
        Projects
      </p>
    </div>
    <div className="flex items-center duration-500 cursor-pointer pb-5
    text-NEUTRAL_DARK border-NEUTRAL_DARK gap-x-0
    hover:text-NEUTRAL_LIGHT hover:border-NEUTRAL_LIGHT hover:gap-x-6"
      onClick={() => RefData.contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="flex rounded-full border-solid border-2 border-inherit w-6 h-6"> </div>
      <p className="text-inherit text-2xl font-bold pl-2">
        Contact
      </p>
    </div>
  </div>
}

export default NavMenu;
