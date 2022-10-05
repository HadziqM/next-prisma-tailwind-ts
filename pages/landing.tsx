import * as React from "react";
import CustHead from "../components/header";
import FooterITS from "../components/Puuter";
import FuelMx from "../components/fuelmx";
import Rpm from "../components/rpmbox";

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
        <FooterITS />
      </div>
    );
  }
  rpm: number = 821;
  maxrpm: number = 2000;
  maxfuel: number = 3500;
  fuel: number = 2914;
}

export default Landing;
