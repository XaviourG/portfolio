import Skillset from "@/components/skill-bars/Skillset";
import { MainSkillsContent, SubSkillsContent } from "@/content/SkillsetContent";
import { ReactElement } from "react";

const SkillsSegment = (): ReactElement => {
  return <div className='flex justify-center items-center w-full'>
    <Skillset
      mainSkills={MainSkillsContent}
      subSkills={SubSkillsContent}
    />
  </div>
}

export default SkillsSegment;
