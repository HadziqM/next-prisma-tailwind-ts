import * as React from "react";

interface HelloProps {}

interface HelloState {}

class Hello extends React.Component<HelloProps, HelloState> {
  state = {};
  render() {
    return <h1 className="text-center">Hello React</h1>;
  }
}

export default Hello;
