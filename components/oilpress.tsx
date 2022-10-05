import * as React from "react";

interface OilProps {
  oil: number;
  maxoil: number;
}

interface OilState {}

class Oil extends React.Component<OilProps, OilState> {
  render() {
    return (
      <div className="bg-black text-white flex w-60 h-44 justify-center items-center gap-2 m-2">
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 p-1">
          <p className="text-xs">oil</p>
          <h2 className="text-center text-lg font-bold">{this.props.oil}</h2>
          <p className="text-xs">Psi</p>
        </div>
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 item-center">
          <p className="text-xs text-center py-1">Max {this.props.maxoil}</p>
          <h1 className="absolute translate-y-16 translate-x-10 font-bold text-xl">
            {this.percent()} %
          </h1>
          <svg className="translate-x-3 translate-y-3 fill-transparent stroke-black stroke-2 w-full h-full overflow-visible">
            <circle cx={45} cy={45} r={45}></circle>
            <circle
              cx={45}
              cy={45}
              r={45}
              className="stroke-yellow-400"
              style={this.style()}
            ></circle>
          </svg>
        </div>
      </div>
    );
  }
  style() {
    const stroke =
      ((this.props.maxoil - this.props.oil) / this.props.maxoil) * 290;
    return {
      "stroke-dasharray": 290,
      "stroke-dashoffset": stroke,
    };
  }
  percent() {
    return String(Math.round((this.props.oil / this.props.maxoil) * 100));
  }
}

export default Oil;
