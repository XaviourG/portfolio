import { ReactElement } from "react";
import { PageRefData } from "./PageRefData";

interface props {
  RefData: PageRefData,
}

const NavigationBar = ({ RefData }: props): ReactElement => {
  return <div className='flex w-full justify-around pt-2 pb-2 bg-BACKGROUND border-solid border-NEUTRAL50 border-b'>
    <p onClick={() => RefData.aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}>About</p>
    <p onClick={() => RefData.projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}>Projects</p>
    <p onClick={() => RefData.contactRef.current?.scrollIntoView({ behavior: 'smooth' })}>Contact</p>
  </div>
}

export default NavigationBar;
