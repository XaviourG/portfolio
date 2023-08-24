import { ReactElement, useCallback } from "react";
import SkillCloud from "./SkillCloud";

export interface CodeSkill {
  name: string,
  commercial: number,
  personal: number,
}

interface Props {
  skills: CodeSkill[],
}

const Skillset = ({
  skills,
}: Props): ReactElement => {

  return (
    <div className="flex flex-col w-full items-center m-2 mt-16 mb-16 xl:m-20  rounded-2xl">
      <p className="text-2xl text-SECONDARY50 font-bold">Raw Technical Experience</p>
      <SkillCloud skills={skills}/>
      <p className="text-lg text-SECONDARY50">click/hover for details</p>
    </div>
  );
}

export default Skillset;
