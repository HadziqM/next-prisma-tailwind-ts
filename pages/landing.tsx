import * as React from "react";
import CustHead from "../components/header";
import FooterITS from "../components/Puuter";
import ShipLayer from "../components/shiplayer";

interface LandingProps {}

interface LandingState {}

class Landing extends React.Component<LandingProps, LandingState> {
  state = {};
  render() {
    return (
      <div className="flex flex-col item-center justify-center">
        <CustHead />
        <ShipLayer />
        <FooterITS />
      </div>
    );
  }
}

export default Landing;
