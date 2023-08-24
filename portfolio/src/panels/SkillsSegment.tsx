import Skillset from "@/components/skillset/Skillset";
import { MainSkillsContent, SubSkillsContent } from "@/content/SkillsetContent";
import { ReactElement } from "react";

const SkillsSegment = (): ReactElement => {
  return <div className='flex justify-center items-center w-full'>
    <Skillset
      skills={MainSkillsContent}
    />
  </div>
}

export default SkillsSegment;
