import * as React from "react";

interface StatusProps {}

interface StatusState {}

class Status extends React.Component<StatusProps, StatusState> {
  state = {};
  render() {
    return <div className="flex w-60 h-44 bg-gray-800"></div>;
  }
}

export default Status;
