import InstagramIcon from "@/assets/instagram_icon";
import Icon from "@/components/common/Icon";
import { ReactElement } from "react";

const ContactSegment = (): ReactElement => {
  return <div className='flex flex-col w-full p-32 justify-center items-center'>

  <div className="h-24 w-full rounded-s-full flex items-center p-0 m-0
    border-solid border-s-2 border-b-2 border-e-0 border-t-0 border-SECONDARY">
    <div className='w-24 h-24 rounded-full p-0 m-0'>
      <img
        className='rounded-full p-0 m-0'
        src="https://drive.google.com/uc?export=view&id=1T_Qase6tdBwsq1sysHfNrGp3RAt-0w2P"
        alt="pfp"
      />
    </div>
    <div className='flex w-full justify-around text-PRIMARY p-0 m-0'>
      <Icon icon='LinkedinIcon' color='inherit' size='40px'></Icon>
      <Icon icon='InstagramIcon' color='inherit' size='40px'></Icon>
      <Icon icon='EmailIcon' color='inherit' size='40px'></Icon>
      <Icon icon='PhoneIcon' color='inherit' size='40px'></Icon>
    </div>
  </div>

    <p>https://linkedin.com/in/xaviourg</p>
    <p>https://github.com/xaviourg</p>
    <p>https://instagram.com/xaviourg</p>
  </div>
}

export default ContactSegment;
