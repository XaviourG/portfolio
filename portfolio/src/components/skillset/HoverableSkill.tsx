import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { CodeSkill } from "./Skillset";
import CustomTooltip from "../common/CustomTooltip";

interface Props {
  content: CodeSkill,
}

const HoverableSkill = ({
  content,
}: Props): ReactElement => {

  return (
    <div className="flex flex-col w-full items-center">
    <CustomTooltip tooltip={<>TOOLTIP</>}>
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