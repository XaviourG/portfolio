import { ReactElement } from "react";

import InstagramIcon from "@/assets/instagram_icon";
import LinkedinIcon from "@/assets/linkedin_icon";
import EmailIcon from "@/assets/email_icon";
import PhoneIcon from "@/assets/phone_icon";
import GithubIcon from "@/assets/github_icon";

export interface IconProps {
  icon: string;
  color?: string;
  size?: string;
}

/**
 * Adding an editable SVG to CustomIconV2:
  ---------------------------------------------------
  1. Add XXX-icon.svg to assets/icons/custom_svg

  2. rename to XXX-icon.tsx and inject basic component stuff (const XXXIcon = () =>), (export default XXXIcon;)

  3a. Inside XXX-icon.tsx replace all fill or stroke arguments with "currentColor"

  3b. Inside XXX-icon.tsx replace width and height with ratio'd width and height in percentage, where the larger is 100% (ex: width=15,  height=16    ==>    width=87%,  height=100%)

  3c. If present in XXX-icon.tsx, replace "clip-rule" with "clipRule" and "fill-rule" with "fillRule"

  4. Import XXXIcon into CustomIconV2
  -------------------------------------------------- 
 */
const Icon = ({
  icon,
  color = 'inherit',
  size = '100%',
}: IconProps): ReactElement => {
  const icons = {
    InstagramIcon,
    LinkedinIcon,
    EmailIcon,
    PhoneIcon,
    GithubIcon,
  };

  const Icon = icons[icon as keyof typeof icons]
    ? icons[icon as keyof typeof icons]
    : icons.InstagramIcon;

  return (
    <div style={{
      width: size,
      height: size,
      color: color,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Icon/>
    </div>
  );
};

export default Icon;
