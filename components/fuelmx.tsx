import * as React from "react";

interface FuelMxProps {
  maxfuel: number;
  fuel: number;
}

interface FuelMxState {}

class FuelMx extends React.Component<FuelMxProps, FuelMxState> {
  render() {
    return (
      <div className="bg-black text-white flex w-60 h-44 justify-center items-center gap-2">
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 p-1">
          <p className="text-xs">Fuel</p>
          <h2 className="text-center text-lg font-bold">{this.fuel()}</h2>
          <p className="text-xs">Liter</p>
        </div>
        <div className="rounded-lg h-40 w-28 flex flex-col justify-end bg-gray-800 item-center relative">
          <p className="text-xs text-center py-1 absolute top-0 w-full">
            Max {this.maxfuel()} KL
          </p>
          <div
            className="bg-blue-400 w-full rounded-lg"
            style={this.fuelbar()}
          ></div>
        </div>
      </div>
    );
  }
  fuelbar() {
    const percent = (this.props.fuel / this.props.maxfuel) * 100;
    console.log(percent);
    return {
      height: percent + "%",
    };
  }
  fuel() {
    return String(this.props.fuel / 1000);
  }
  maxfuel() {
    return String(this.props.maxfuel / 1000);
  }
}

export default FuelMx;
