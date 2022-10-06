import * as React from "react";

interface TempProps {
  Temp: number;
  maxTemp: number;
}

interface TempState {}

class Temp extends React.Component<TempProps, TempState> {
  render() {
    return (
      <div className="bg-black text-white flex w-60 h-44 justify-center items-center gap-2">
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 p-1">
          <p className="text-xs">Temp</p>
          <h2 className="text-center text-lg font-bold">{this.props.Temp}</h2>
          <p className="text-xs">C</p>
        </div>
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 item-center">
          <p className="text-xs text-center py-1">Max {this.props.maxTemp}</p>
          <div
            className="radial-progress translate-x-4 -translate-y-4 text-red-600"
            style={this.style() as React.CSSProperties}
          >
            {this.percent()} %
          </div>
        </div>
      </div>
    );
  }
  style() {
    const stroke = Math.round((this.props.Temp / this.props.maxTemp) * 100);
    return {
      "--value": stroke,
    };
  }
  percent() {
    return String(Math.round((this.props.Temp / this.props.maxTemp) * 100));
  }
}

export default Temp;
