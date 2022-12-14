import * as React from "react";
import { Chart } from "react-google-charts";

interface GraphFuelProps {}

interface GraphFuelState {}

class GraphFuel extends React.Component<GraphFuelProps, GraphFuelState> {
  data1: any;
  interval: any;
  render() {
    return (
      <div className="text-white flex w-s9 h-full justify-center items-center bg-gray-800 flex-col pt-4 row-span-2 col-span-4">
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
      ["Seconds", "Fuel", "STG", "STT", "SRV"],
      ["0", 50, 34, 12, 32],
      ["10", 51, 12, 34, 21],
      ["20", 70, 23, 45, 12],
      ["30", 30, 12, 3, 4],
      ["40", 90, 1, 2, 3],
      ["50", 90, 34, 21, 31],
      ["60", 30, 12, 34, 32],
    ];
  }
  anjir = () => {
    return {
      title: "Fuel",
      legend: { textStyle: { color: "#fff" } },
      titleTextStyle: { color: "#fff" },
      vAxis: { minValue: 0, textStyle: { color: "#fff" } },
      hAxis: {
        textStyle: { color: "#fff" },
      },
      chartArea: { width: "75%", height: "70%" },
      backgroundColor: "rgb(31,41,55)",
      colors: ["#aaf", "0aa", "a0a", "aa0"],
    };
  };
}

export default GraphFuel;
