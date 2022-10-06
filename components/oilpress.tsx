import * as React from "react";

interface OilProps {
  oil: number;
  maxoil: number;
}

interface OilState {}

class Oil extends React.Component<OilProps, OilState> {
  render() {
    return (
      <div className="bg-black text-white flex w-60 h-44 justify-center items-center gap-2">
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 p-1">
          <p className="text-xs">oil</p>
          <h2 className="text-center text-lg font-bold">{this.props.oil}</h2>
          <p className="text-xs">Psi</p>
        </div>
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 item-center">
          <p className="text-xs text-center py-1">Max {this.props.maxoil}</p>
          <div
            className="radial-progress translate-x-4 -translate-y-4 text-yellow-500"
            style={this.style() as React.CSSProperties}
          >
            {this.percent()} %
          </div>
        </div>
      </div>
    );
  }
  style() {
    const stroke = Math.round((this.props.oil / this.props.maxoil) * 100);
    return {
      "--value": stroke,
    };
  }
  percent() {
    return String(Math.round((this.props.oil / this.props.maxoil) * 100));
  }
}

export default Oil;
