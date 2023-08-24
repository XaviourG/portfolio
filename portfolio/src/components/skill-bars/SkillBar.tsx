import { ReactElement } from "react";
import { MainSkill } from "./Skillset";

interface Props {
  skill: MainSkill,
  max: number,
}

const SkillBar = ({
  skill,
  max,
}: Props): ReactElement => {
  console.log(`skill bar ${skill.personal}-${skill.commercial}-${max} ${Math.ceil((skill.personal / max) * 100)}`)
  return (
    <div className="flex content-center w-full pb-4 pl-4 pr-4 lg:pl-8 lg:pr-8">
      <div className="flex w-1/4">
       <p>{skill.name}</p>
      </div>

      <div className="flex w-3/4">
        <div className="flex w-full rounded-full border-solid border border-PERSONAL">
          <div className="bg-PERSONAL" style={{
            borderRadius: '9999px 0 0 9999px',
            height: '100%',
            width: `${Math.ceil((skill.personal / max) * 100)}%`,
          }}></div>
          <div className="bg-COMMERCIAL" style={{
            borderRadius: '0 9999px 9999px 0',
            height: '100%',
            width: `${Math.ceil((skill.commercial / max) * 100)}%`,
          }}></div>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
