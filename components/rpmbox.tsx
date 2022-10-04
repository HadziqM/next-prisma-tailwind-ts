import * as React from "react";

interface RpmProps {
  rpm: number;
  maxrpm: number;
}

interface RpmState {}

class Rpm extends React.Component<RpmProps, RpmState> {
  state = {};
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
          <div
            className="bg-blue-400 w-full rounded-lg"
            style={this.fuelbar()}
          ></div>
        </div>
      </div>
    );
  }
}

export default Rpm;
