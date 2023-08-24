import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { CodeSkill } from "./Skillset";
import CustomTooltip from "../common/CustomTooltip";
import SkillTooltip from "./SkillTooltip";

interface Props {
  content: CodeSkill,
  closeTooltipsTrigger: boolean,
  focusHook: (state: boolean) => void,
}

const HoverableSkill = ({
  content,
  closeTooltipsTrigger,
  focusHook,
}: Props): ReactElement => {

  return (
    <div className="flex flex-col items-center">
    <CustomTooltip
      tooltip={<SkillTooltip content={content}/>}
      forceState={closeTooltipsTrigger}
      focusHook={focusHook}
    >
      <div className="bg-SECONDARY rounded-full py-2 px-4">
        <p className="text-BACKGROUND_END">
          {content.name}
        </p>
      </div>
    </CustomTooltip>
    </div>
  );
}

export default HoverableSkill;
