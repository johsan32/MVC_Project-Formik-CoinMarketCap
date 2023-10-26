import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const DetailView = ({ model }) => {
  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-lg-5 g-5">
        {model.infoFields.map((info) => (
          <div className="col bg-white text-black rounded shadow">
            <div className="p-2 text-center">
              <span className="fs-3">{info.icon}</span>
              <h6 className="my-3">{info.label}</h6>
              <p>{info.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-5 w-100">
        <Line data={model.chartData} />
        <Bar data={model.chartData} />
      </div>
    </div>
  );
};

export default DetailView;
