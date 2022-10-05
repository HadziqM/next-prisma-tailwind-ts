import * as React from "react";
import CustHead from "../components/header";
import FooterITS from "../components/Puuter";
import FuelMx from "../components/fuelmx";
import Rpm from "../components/rpmbox";
import GraphGps from "../components/framechart";
import Compas from "../components//compas";
import Gyro from "../components/gyro";
import Gps from "../components/gps";

interface LandingProps {}

interface LandingState {}

class Landing extends React.Component<LandingProps, LandingState> {
  state = {};
  render() {
    return (
      <div>
        <CustHead />
        <FuelMx fuel={this.fuel} maxfuel={this.maxfuel} />
        <Rpm maxrpm={this.maxrpm} rpm={this.rpm} />
        <Compas speed={this.speed} degree={this.degree} />
        <Gyro slantX={this.slantx} slantY={this.slanty} />
        <Gps gpsn="6.4231231" gpsw="119.124331" />
        <GraphGps />
        <FooterITS />
      </div>
    );
  }
  rpm: number = 1900;
  maxrpm: number = 2000;
  maxfuel: number = 3500;
  fuel: number = 1294;
  speed: number = 6;
  degree = 100;
  slantx = -10;
  slanty = 5;
}

export default Landing;
