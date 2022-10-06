import * as React from "react";
import CustHead from "../components/header";
import FooterITS from "../components/Puuter";
import ShipLayer from "../components/shiplayer";
import ShipMount from "../components/shipmount";

interface LandingProps {}

interface LandingState {}

class Landing extends React.Component<LandingProps, LandingState> {
  state = {};
  render() {
    return (
      <div className="flex flex-col item-center justify-center">
        <CustHead />
        <ShipMount />
        <FooterITS />
      </div>
    );
  }
}

export default Landing;
