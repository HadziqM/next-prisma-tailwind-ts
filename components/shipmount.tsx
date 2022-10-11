import * as React from "react";
import FuelMx from "../components/fuelmx";
import Rpm from "../components/rpmbox";
import GraphGps from "../components/framechart";
import Compas from "../components//compas";
import Gyro from "../components/gyro";
import Gps from "../components/gps";
import FuelSc from "./fuelsc";
import Distance from "./distance";
import GraphEngine from "./enginechart";
import Engine from "./enginevib";
import GraphOil from "./oilchart";
import Oil from "./oilpress";
import GraphTemp from "./tempchart";
import Temp from "./tempgas";
import GraphFuel from "./fuelchart";
import Status from "./status";
import Notif from "./notif";

interface ShipMountProps {}
interface ShipMountState {}
class ShipMount extends React.Component<ShipMountProps, ShipMountState> {
  state = { test: "x" };
  damn = async () => {
    return await (await fetch("/api/hello")).json();
  };
  render() {
    console.log(this.damn);
    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center item-center my-2 w-4/5">
          <select className="select select-bordered select-sm bg-red-600 text-xs overflow-visible text-white py-0 my-2">
            <option disabled selected>
              Select Your Ship to Monitor
            </option>
            <option>KM Sumatra</option>
            <option>KM Madura</option>
            <option>KM Kalimantan</option>
          </select>
          <div className="flex gap-4 items-center">
            <select
              name="oke"
              id="day"
              className="select select-bordered select-sm bg-red-600 text-xs overflow-visible text-white py-0 my-2"
            >
              <option disabled selected>
                Day to monitor
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <button className="btn btn-primary btn-xs">Search</button>
            <button className="btn btn-secondary btn-xs ml-auto">Now</button>
          </div>
          <input
            type="range"
            min="0"
            max="1440"
            className="range w-full range-xs range-primary"
            step="1"
          />
          <div className="w-full flex justify-between text-xs px-2 mb-2">
            <span>00:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
          <div className="w-4/5 grid grid-rows-6 grid-flow-col gap-2">
            <FuelMx fuel={this.fuel} maxfuel={this.maxfuel} />
            <FuelSc
              stg={this.stg}
              stt={this.stt}
              srv={this.srv}
              stgmax={this.stgmax}
              sttmax={this.sttmax}
              srvmax={this.srvmax}
            />
            <Rpm maxrpm={this.maxrpm} rpm={this.rpm} />
            <Temp Temp={this.temp} maxTemp={this.maxtemp} />
            <Oil oil={this.oil} maxoil={this.maxoil} />
            <Engine engine={this.engine} maxengine={this.maxengine} />
            <GraphFuel />
            <GraphGps />
            <GraphTemp />
            <GraphOil />
            <GraphEngine />
            <Compas speed={this.speed} degree={this.degree} />
            <Gyro slantX={this.slantx} slantY={this.slanty} />
            <Gps gpsn="10.4231231" gpsw="19.124331" />
            <Distance distance={this.distance} />
            <Notif />
            <Status oil={true} />
          </div>
        </div>
      </div>
    );
  }
  oil = 708;
  maxoil = 1000;
  temp = 70;
  maxtemp = 300;
  engine = 800;
  maxengine = 1000;
  distance = 1000;
  stg = 700;
  stgmax = 900;
  srv = 1200;
  srvmax = 1500;
  stt = 120;
  sttmax = 1100;
  rpm = 1900;
  maxrpm = 2000;
  maxfuel = 3500;
  fuel = 2224;
  speed = 6;
  degree = 100;
  slantx = 20;
  slanty = 5;
}

export default ShipMount;
