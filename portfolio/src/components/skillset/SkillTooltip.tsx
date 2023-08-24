import { ReactElement } from "react";
import { CodeSkill } from "./Skillset";
import { Chart, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(ArcElement);

interface Props {
  content: CodeSkill
}

const SkillTooltip = ({
  content
}: Props): ReactElement => {
  const data = {
    labels: [
      'Personal',
      'Commercial',
    ],
    datasets: [{
      label: 'Technical Experience Distribution',
      data: [content.personal, content.commercial],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4
    }]
  
  };


  return (
    <div>
      <Pie
        data={data}
      />
    </div>
  );
}

export default SkillTooltip;
