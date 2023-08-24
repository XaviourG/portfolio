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
        '#503991',
        '#36ebe8',
      ],
      hoverOffset: 4
    }]
  };

  const options = {
    responsive: true,
  }


  return (
    <div className="flex items-center p-3">
      <div className="flex flex-col" style={{minWidth: '12rem'}}>
        <p className="text-lg text-NEUTRAL_LIGHT pb-4">
          {`${content.name} Experience`}
        </p>
        <p className="text-md text-PERSONAL">
          {`Personal: ${content.personal} years`}
        </p>
        <p className="text-md text-COMMERCIAL">
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
