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
        '#7C5CD650',
        '#36ebe850',
      ],
      hoverOffset: 4
    }]
  };

  const options = {
    responsive: true,
  }


  return (
    <div className="flex items-center p-3">
      <div className="flex flex-col p-4">
        <p className="text-xl text-BACKGROUND">
          {`${content.name} Experience`}
        </p>
        <p className="text-lg text-PERSONAL">
          {`Personal: ${content.personal} years`}
        </p>
        <p className="text-lg text-COMMERCIAL">
          {`Commercial: ${content.commercial} years`}
        </p>
      </div>
      <div className="flex content-center items-center">
        <div className="block w-32">
          <Pie
            data={data}
            options={options}
            //plugins={}
          />
        </div>
      </div>
    </div>
  );
}

export default SkillTooltip;
