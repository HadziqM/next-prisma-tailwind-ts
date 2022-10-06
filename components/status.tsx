import * as React from "react";

interface StatusProps {}

interface StatusState {}

class Status extends React.Component<StatusProps, StatusState> {
  state = {};
  render() {
    return <div className="flex w-60 h-s9 bg-gray-800 row-span-2"></div>;
  }
}

export default Status;
