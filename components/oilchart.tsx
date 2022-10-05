import * as React from "react";
import { Chart } from "react-google-charts";

interface GraphOilProps {}

interface GraphOilState {}

class GraphOil extends React.Component<GraphOilProps, GraphOilState> {
  data1: any;
  interval: any;
  render() {
    return (
      <div className="text-white flex w-96 h-44 justify-center items-center gap-2 m-2 bg-gray-800 flex-col pt-4">
        <h2>Frame Rate</h2>
        <Chart
          chartType="AreaChart"
          width="100%"
          height="100%"
          data={this.data()}
          options={this.anjir()}
        />
      </div>
    );
  }
  //   testing = () => {
  //     const data = this.data1;
  //     this.setState({
  //       id: data.id,
  //       username: data.username,
  //       password: data.password,
  //       sub: data.sub,
  //     });
  //   };
  //   async getData() {
  //     const res = await fetch("/api/hello");
  //     const user = await res.json();
  //     this.data1 = user;
  //     this.testing();
  //   }
  //   componentDidMount() {
  //     this.interval = setInterval(() => this.getData(), 1000);
  //   }
  //   componentWillUnmount(): void {
  //     clearInterval(this.interval);
  //   }
  data() {
    return [
      ["Seconds", "RPM"],
      ["0", 50],
      ["10", 51],
      ["20", 70],
      ["30", 30],
      ["40", 90],
      ["50", 90],
      ["60", 30],
    ];
  }
  anjir = () => {
    return {
      title: "Oil",
      titleTextStyle: { color: "#fff" },
      vAxis: { minValue: 0, textStyle: { color: "#fff" } },
      hAxis: {
        textStyle: { color: "#fff" },
      },
      chartArea: { width: "80%", height: "70%" },
      backgroundColor: "rgb(31,41,55)",
      colors: ["#ff0"],
    };
  };
}

export default GraphOil;
