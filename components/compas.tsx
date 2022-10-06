import * as React from "react";

interface CompasProps {
  degree: any;
  speed: number;
}

interface CompasState {}

class Compas extends React.Component<CompasProps, CompasState> {
  render() {
    return (
      <div className="bg-black text-white flex w-60 h-44 justify-center items-center gap-2">
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 p-1">
          <p className="text-xs">Speed</p>
          <h2 className="text-center text-lg font-bold">{this.props.speed}</h2>
          <p className="text-xs">Knot</p>
        </div>
        <div className="rounded-lg h-40 w-28 flex flex-col justify-between bg-gray-800 item-center">
          <p className="text-lg text-center py-1 translate-y-1">U</p>
          <div className="flex border-white border mx-2 mb-2 h-32 justify-center items-center test">
            <img
              src="/arrow.svg"
              className="w-8 h-8 translate-y-1"
              style={this.getDegree()}
            ></img>
          </div>
        </div>
      </div>
    );
  }
  getDegree() {
    const degree = this.props.degree - 45;
    return {
      transform: "rotate(" + degree + "deg)",
    };
  }
}

export default Compas;
