import { ReactElement } from "react";

const NavigationBar = (): ReactElement => {
  return <div className='flex w-full justify-around pt-2 pb-2 bg-BACKGROUND border-solid border-NEUTRAL50 border-b'>
    <p>About</p>
    <p>Projects</p>
    <p>Contact</p>
  </div>
}

export default NavigationBar;
