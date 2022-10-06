import * as React from "react";

interface RpmProps {
  rpm: number;
  maxrpm: number;
}

interface RpmState {}

class Rpm extends React.Component<RpmProps, RpmState> {
  render() {
    return (
      <div className="bg-black text-white flex w-60 h-44 justify-center gap-2 items-center m-0">
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 p-1">
          <p className="text-xs">Rpm</p>
          <h2 className="text-center text-lg font-bold">{this.props.rpm}</h2>
          <p className="text-xs">0</p>
        </div>
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 item-center">
          <p className="text-xs text-center py-1">Max {this.props.maxrpm}</p>
          <div
            className="radial-progress translate-x-4 -translate-y-4"
            style={this.style() as React.CSSProperties}
          >
            {this.percent()} %
          </div>
        </div>
      </div>
    );
  }
  style() {
    const stroke = Math.round((this.props.rpm / this.props.maxrpm) * 100);
    return {
      "--value": stroke,
    };
  }
  percent() {
    return String(Math.round((this.props.rpm / this.props.maxrpm) * 100));
  }
}

export default Rpm;
