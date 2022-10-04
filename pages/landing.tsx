import * as React from "react";
import CustHead from "../components/header";
import FooterITS from "../components/Puuter";

interface LandingProps {}

interface LandingState {}

class Landing extends React.Component<LandingProps, LandingState> {
  state = {};
  render() {
    return (
      <div>
        <CustHead />
        <FooterITS />
      </div>
    );
  }
}

export default Landing;
