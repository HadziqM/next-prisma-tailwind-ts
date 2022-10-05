import * as React from "react";

interface GyroProps {
  slantX: number;
  slantY: number;
}

interface GyroState {}

class Gyro extends React.Component<GyroProps, GyroState> {
  state = {};
  render() {
    return (
      <div className="bg-black text-white flex w-60 h-44 justify-center items-center gap-2 m-2">
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 item-center">
          <p className="text-xs text-center py-1">Slant Y</p>
          <div className="flex border-white border mx-2 mb-2 h-32 justify-center items-center test">
            <img
              src="/sideship.svg"
              className="w-16 h-8 translate-y-1"
              style={this.getSlantY()}
            ></img>
          </div>
        </div>
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 item-center">
          <p className="text-xs text-center py-1">Slant X</p>
          <div className="flex border-white border mx-2 mb-2 h-32 justify-center items-center test">
            <img
              src="/frontship.svg"
              className="w-10 h-10 translate-y-1"
              style={this.getSlantX()}
            ></img>
          </div>
        </div>
      </div>
    );
  }
  getSlantX() {
    return {
      translate: "rotate(" + this.props.slantX + "deg)",
    };
  }
  getSlantY() {
    return {
      translate: "rotate(" + this.props.slantY + "deg)",
    };
  }
}

export default Gyro;
