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
      <div className="bg-black text-white flex w-60 h-44 justify-center items-center gap-2">
        <div className="rounded-lg h-40 w-16 flex flex-col justify-end bg-gray-800 item-center relative">
          <p className="text-xs text-center py-1 absolute w-full top-0">STG</p>
          <p className="text-xs text-center py-1 absolute top-4 w-full">
            {this.stg()} L
          </p>
          <div
            className="bg-blue-400 w-full rounded-lg"
            style={this.stgbar()}
          ></div>
        </div>
        <div className="rounded-lg h-40 w-16 flex flex-col justify-end relative bg-gray-800 item-center">
          <p className="text-xs text-center py-1 absolute top-0 w-full">STT</p>
          <p className="text-xs text-center py-1 absolute top-4 w-full">
            {this.stt()} L
          </p>
          <div
            className="bg-blue-400 w-full rounded-lg"
            style={this.sttbar()}
          ></div>
        </div>
        <div className="rounded-lg h-40 w-16 flex flex-col justify-end relative bg-gray-800 item-center">
          <p className="text-xs text-center py-1 absolute top-0 w-full">SRV</p>
          <p className="text-xs text-center py-1 absolute top-4 w-full">
            {this.srv()} L
          </p>
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
    return String(this.props.stgmax);
  }
  sttbar() {
    const percent = (this.props.stt / this.props.sttmax) * 100;
    return {
      height: percent + "%",
    };
  }
  stt() {
    return String(this.props.sttmax);
  }
  srvbar() {
    const percent = (this.props.srv / this.props.srvmax) * 100;
    return {
      height: percent + "%",
    };
  }
  srv() {
    return String(this.props.srvmax);
  }
}

export default FuelSc;
