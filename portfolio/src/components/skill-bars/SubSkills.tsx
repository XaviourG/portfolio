import { ReactElement } from "react";
import TechTags from "../project/TechTags";

interface Props {
  skills: string[]
}

const SubSkills = ({
  skills,
}: Props): ReactElement => {
  return(
    <TechTags
      tags={skills}
    />
  );
}

export default SubSkills;
