import * as React from "react";

interface RpmProps {
  rpm: number;
  maxrpm: number;
}

interface RpmState {}

class Rpm extends React.Component<RpmProps, RpmState> {
  render() {
    return (
      <div className="bg-black text-white flex w-60 h-44 justify-center items-center gap-2 m-2">
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 p-1">
          <p className="text-xs">Rpm</p>
          <h2 className="text-center text-lg font-bold">{this.props.rpm}</h2>
          <p className="text-xs">0</p>
        </div>
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 item-center">
          <p className="text-xs text-center py-1">Max {this.props.maxrpm}</p>
          <h1 className="absolute translate-y-16 translate-x-10 font-bold text-xl">
            {this.percent()} %
          </h1>
          <svg className="translate-x-3 translate-y-3 fill-transparent stroke-black stroke-2 w-full h-full overflow-visible">
            <circle cx={45} cy={45} r={45}></circle>
            <circle
              cx={45}
              cy={45}
              r={45}
              className="stroke-red-700"
              style={this.style()}
            ></circle>
          </svg>
        </div>
      </div>
    );
  }
  style() {
    const stroke =
      ((this.props.maxrpm - this.props.rpm) / this.props.maxrpm) * 290;
    return {
      "stroke-dasharray": 290,
      "stroke-dashoffset": stroke,
    };
  }
  percent() {
    return String(Math.round((this.props.rpm / this.props.maxrpm) * 100));
  }
}

export default Rpm;
