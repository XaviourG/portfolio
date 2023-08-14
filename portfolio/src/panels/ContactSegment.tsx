import InstagramIcon from "@/assets/instagram_icon";
import Icon from "@/components/common/Icon";
import SocialsMenu from "@/components/menu/SocialsMenu";
import { ReactElement } from "react";

const ContactSegment = (): ReactElement => {
  return <div className='flex flex-col w-full justify-center items-center pb-20 xl:pb-48'>
    <p className="w-100 xl:w-2/3 text-NEUTRAL_DARK p-16 xl:p-8 text-center">{"Thanks for checking out my portfolio! Whether you want to grab a coffee or discuss an opportunity, feel free to reach out. My passions are programming, public-speaking, reading, and weightlifting."}<br/>👈(ﾟヮﾟ👈)</p>
    <div className='flex xl:hidden justify-center '>
        <SocialsMenu/>
      </div>
  </div>
}

export default ContactSegment;
