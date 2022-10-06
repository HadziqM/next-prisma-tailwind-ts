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

interface ShipLayerProps {}

interface ShipLayerState {}

class ShipLayer extends React.Component<ShipLayerProps, ShipLayerState> {
  state = {};
  render() {
    return (
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
        <Status />
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

export default ShipLayer;
