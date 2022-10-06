import * as React from "react";
import ShipLayer from "./shiplayer";

interface ShipMountProps {}

interface ShipMountState {}

class ShipMount extends React.Component<ShipMountProps, ShipMountState> {
  state = {};
  render() {
    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center item-center my-2 w-4/5">
          <select className="select select-bordered select-sm bg-red-600 text-xs overflow-visible text-white py-0 my-2">
            <option disabled selected>
              Ship
            </option>
            <option>KM Sumatra</option>
            <option>KM Madura</option>
            <option>KM Kalimantan</option>
          </select>
          <input
            type="range"
            min="0"
            max="100"
            className="range w-full range-xs range-primary"
            step="1"
          />
          <div className="w-full flex justify-between text-xs px-2 mb-2">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
          <ShipLayer />
        </div>
      </div>
    );
  }
}

export default ShipMount;
