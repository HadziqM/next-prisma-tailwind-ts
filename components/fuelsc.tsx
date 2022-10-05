import * as React from "react";

interface FuelScProps {
  stg: number;
  stgmax: number;
  stt: number;
  sttmax: number;
  srv: number;
  srvmax: number;
}

interface FuelScState {}

class FuelSc extends React.Component<FuelScProps, FuelScState> {
  render() {
    return (
      <div className="bg-black text-white flex w-60 h-44 justify-center items-center gap-2 m-2">
        <div className="rounded-lg h-40 w-14 flex flex-col justify-between bg-gray-800 item-center">
          <p className="text-xs text-center py-1">STG</p>
          <p className="text-xs text-center py-1">{this.stg()}</p>
          <div
            className="bg-blue-400 w-full rounded-lg"
            style={this.stgbar()}
          ></div>
        </div>
        <div className="rounded-lg h-40 w-14 flex flex-col justify-between bg-gray-800 item-center">
          <p className="text-xs text-center py-1">STT</p>
          <p className="text-xs text-center py-1">{this.stt()}</p>
          <div
            className="bg-blue-400 w-full rounded-lg"
            style={this.sttbar()}
          ></div>
        </div>
        <div className="rounded-lg h-40 w-14 flex flex-col justify-between bg-gray-800 item-center">
          <p className="text-xs text-center py-1">SRV</p>
          <p className="text-xs text-center py-1">{this.srv()}</p>
          <div
            className="bg-blue-400 w-full rounded-lg"
            style={this.srvbar()}
          ></div>
        </div>
      </div>
    );
  }
  stgbar() {
    const percent = (this.props.stg / this.props.stgmax) * 100;
    return {
      height: percent + "%",
    };
  }
  stg() {
    return String(this.props.stgmax / 1000);
  }
  sttbar() {
    const percent = (this.props.stt / this.props.sttmax) * 100;
    return {
      height: percent + "%",
    };
  }
  stt() {
    return String(this.props.sttmax / 1000);
  }
  srvbar() {
    const percent = (this.props.srv / this.props.srvmax) * 100;
    return {
      height: percent + "%",
    };
  }
  srv() {
    return String(this.props.srvmax / 1000);
  }
}

export default FuelSc;
