import { ReactElement } from "react";

export interface MainSkill {
  name: string,
  commercial: number,
  personal: number,
}

interface Props {
  mainSkills: MainSkill[],
  subSkills: string[].
}

const Skillset = ({}: Props): ReactElement => {

}

export default Skillset;
