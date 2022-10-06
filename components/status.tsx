import * as React from "react";

interface StatusProps {}

interface StatusState {}

class Status extends React.Component<StatusProps, StatusState> {
  state = {};
  render() {
    return <div className="flex w-60 h-full bg-gray-800 row-span-2"></div>;
  }
}

export default Status;
