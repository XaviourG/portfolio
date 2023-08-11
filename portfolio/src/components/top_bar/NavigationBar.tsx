import { ReactElement } from "react";

const NavigationBar = (): ReactElement => {
  return <div className='flex w-full justify-around'>
    <p>Projects</p>
    <p>Experience</p>
    <p>Contact</p>
  </div>
}

export default NavigationBar;
