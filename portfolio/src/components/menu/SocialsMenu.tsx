import { ReactElement } from "react";
import Icon from "../common/Icon";

const SocialsMenu = (): ReactElement => <div className="flex pt-5 items-center">
  <div className="text-NEUTRAL_DARK hover:text-NEUTRAL p-3">
    <a href="https://linkedin.com/in/xaviourg">
      <Icon icon="LinkedinIcon" color="inherit" size="2rem"/>
    </a>
  </div>
  <div className="text-NEUTRAL_DARK hover:text-NEUTRAL p-3">
    <a href="https://github.com/xaviourg">
      <Icon icon="GithubIcon" color="inherit" size="2rem"/>
    </a>
  </div>
  <div className="text-NEUTRAL_DARK hover:text-NEUTRAL p-3">
    <a href="https://instagram.com/xaviourg">
      <Icon icon="InstagramIcon" color="inherit" size="1.8rem"/>
    </a>
  </div>
  <div className="text-NEUTRAL_DARK hover:text-NEUTRAL p-3">
    <a href="mailto: xaviourgreenhalgh@gmail.com">
      <Icon icon="EmailIcon" color="inherit" size="2rem"/>
    </a>
  </div>
  <div className="text-NEUTRAL_DARK hover:text-NEUTRAL p-3">
    <a href="tel: 61416612608">
      <Icon icon="PhoneIcon" color="inherit" size="2rem"/>
    </a>
  </div>
</div>

export default SocialsMenu;
