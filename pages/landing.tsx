import * as React from "react";
import CustHead from "../components/header";
import FooterITS from "../components/Puuter";
import FuelMx from "../components/fuelmx";
import Rpm from "../components/rpmbox";
import Graph from "../components/framechart";
import Compas from "../components//compas";
import Gyro from "../components/gyro";

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
        <Graph />
        <FooterITS />
      </div>
    );
  }
  rpm: number = 821;
  maxrpm: number = 2000;
  maxfuel: number = 3500;
  fuel: number = 2914;
  speed: number = 10;
  degree = 200;
  slantx = 20;
  slanty = 10;
}

export default Landing;
