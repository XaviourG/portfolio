import { ReactElement, useCallback } from "react";
import { CodeSkill } from "./Skillset";

interface Props {
  content: CodeSkill,
}

const HoverableSkill = ({
  content,
}: Props): ReactElement => {

  return (
    <div className="flex flex-col w-full items-center m-16 rounded-2xl bg-NEUTRAL_DARK">
      
    </div>
  );
}

export default HoverableSkill;
