import { useState } from "react";
import HoverableSkill from "./HoverableSkill";
import { CodeSkill } from "./Skillset";

interface Props {
  skills: CodeSkill[],
}

const SkillCloud = ({
  skills,
}: Props) => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const setActive = (focus: boolean, key: number) => {
    if (focus) {
      setActiveTooltip(key);
    }
    if (!focus && activeTooltip === key) {
      setActiveTooltip(null);
    }
  }

  return (
    <div className="flex flex-wrap w-full">
      {
        skills.map((skill, key) => (
          <div key={key} className="p-1">
            <HoverableSkill
              content={skill}
              closeTooltipsTrigger={activeTooltip === key}
              focusHook={(b: boolean) => setActive(b, key)}
              isFocused={activeTooltip === key}
            />
          </div>
        ))
      }
    </div>
  );
}

export default SkillCloud;
