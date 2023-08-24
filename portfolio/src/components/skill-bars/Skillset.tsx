import { ReactElement, useCallback } from "react";
import SubSkills from "./SubSkills";
import SkillBar from "./SkillBar";

export interface MainSkill {
  name: string,
  commercial: number,
  personal: number,
}

interface Props {
  mainSkills: MainSkill[],
  subSkills: string[],
}

const Skillset = ({
  mainSkills,
  subSkills,
}: Props): ReactElement => {

  const maxYears = useCallback((mainSkills: MainSkill[]) => {
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

  return (
    <div className="flex flex-col w-full items-center m-16">
      {
        mainSkills.map((mainSkill, key) => (
          <SkillBar
            skill={mainSkill}
            max={5}
            key={key}
          />
        ))
      }
      <SubSkills
        skills={subSkills}
      />
    </div>
  );
}

export default Skillset;
