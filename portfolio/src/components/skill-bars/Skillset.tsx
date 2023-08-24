import { ReactElement } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
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
  return (
    <div className="flex flex-col w-full items-center">
      {
        mainSkills.map((mainSkill, key) => (
          <SkillBar
            skill={mainSkill}
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
