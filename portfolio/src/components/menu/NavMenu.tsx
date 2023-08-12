import { ReactElement } from "react";

const NavMenu = (): ReactElement => {
  return <div className="flex flex-col">
    <div className="flex items-center duration-500 cursor-pointer pb-5
    text-NEUTRAL_DARK border-NEUTRAL_DARK gap-x-0
    hover:text-NEUTRAL_LIGHT hover:border-NEUTRAL_LIGHT hover:gap-x-6"
      onClick={() => console.log('NAV!')}
    >
      <div className="flex rounded-full border-solid border-2 border-inherit w-6 h-6"> </div>
      <p className="text-inherit text-2xl font-bold pl-2">
        About
      </p>
    </div>
    <div className="flex items-center duration-500 cursor-pointer pb-5
    text-NEUTRAL_DARK border-NEUTRAL_DARK gap-x-0
    hover:text-NEUTRAL_LIGHT hover:border-NEUTRAL_LIGHT hover:gap-x-6"
      onClick={() => console.log('NAV!')}
    >
      <div className="flex rounded-full border-solid border-2 border-inherit w-6 h-6"> </div>
      <p className="text-inherit text-2xl font-bold pl-2">
        Projects
      </p>
    </div>
    <div className="flex items-center duration-500 cursor-pointer pb-5
    text-NEUTRAL_DARK border-NEUTRAL_DARK gap-x-0
    hover:text-NEUTRAL_LIGHT hover:border-NEUTRAL_LIGHT hover:gap-x-6"
      onClick={() => console.log('NAV!')}
    >
      <div className="flex rounded-full border-solid border-2 border-inherit w-6 h-6"> </div>
      <p className="text-inherit text-2xl font-bold pl-2">
        Contact
      </p>
    </div>
  </div>
}

export default NavMenu;
