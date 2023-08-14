import { ReactElement } from "react";

interface props {
  tags: string[],
}

const TechTags = ({
  tags
}: props): ReactElement => <div className="flex flex-wrap">
  {tags.map((tag, key) => <div key={key} className="pl-3 pr-3 pt-1 pb-1 m-1 bg-SECONDARY50 rounded-full">
    <p className="text-BACKGROUND text-xs">{tag}</p>
  </div>)}
</div>

export default TechTags;
