import { ReactElement, useCallback } from "react";
import HoverableSkill from "./HoverableSkill";

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
    <div className="flex flex-col w-full items-center m-16 rounded-2xl">
      <HoverableSkill content={testSkill}/>
    </div>
  );
}

export default Skillset;
