import * as React from "react";
import CustHead from "../components/header";
import FooterITS from "../components/Puuter";
import FuelMx from "../components/fuelmx";

interface LandingProps {}

interface LandingState {}

class Landing extends React.Component<LandingProps, LandingState> {
  state = {};
  render() {
    return (
      <div>
        <CustHead />
        <FuelMx fuel={this.fuel} maxfuel={this.maxfuel} />
        <FooterITS />
      </div>
    );
  }
  maxfuel: number = 3500;
  fuel: number = 2914;
}

export default Landing;
