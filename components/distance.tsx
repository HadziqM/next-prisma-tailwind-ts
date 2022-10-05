import * as React from "react";

interface DistanceProps {
  distance: number;
}

interface DistanceState {}

class Distance extends React.Component<DistanceProps, DistanceState> {
  render() {
    return (
      <div className="bg-black text-white flex w-60 h-44 justify-center items-center gap-2 m-2">
        <div className="rounded-lg h-40 w-56 flex flex-col justify-between bg-gray-800 p-1">
          <p className="text-xs">Distance</p>
          <h2 className="text-center text-lg font-bold">
            {this.props.distance}
          </h2>
          <p className="text-xs">Mil</p>
        </div>
      </div>
    );
  }
}

export default Distance;
