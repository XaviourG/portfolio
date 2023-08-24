import { ReactElement, useCallback } from "react";
import HoverableSkill from "./HoverableSkill";
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

  const maxYears = useCallback((mainSkills: CodeSkill[]) => {
    let maxCommercial = 0;
    let maxPersonal = 0;

    let i = 0;
    while (i < mainSkills.length) {
      if (mainSkills[i].commercial > maxCommercial) {
        maxCommercial = mainSkills[i].commercial;
      }
      if (mainSkills[i].personal > maxPersonal) {
        maxPersonal = mainSkills[i].personal;
      }
      i++;
    };

    return (maxCommercial + maxPersonal);
  }, []);

  //const max = maxYears(mainSkills);
  const testSkill: CodeSkill = {
    name: 'Typescript',
    commercial: 2,
    personal: 3,
  }

  return (
    <div className="flex flex-col w-full items-center m-2 xk:m-16 mt-16 mb-16 rounded-2xl">
      <p className="text-xl text-SECONDARY">Skillset</p>
      <SkillCloud skills={skills}/>
    </div>
  );
}

export default Skillset;
