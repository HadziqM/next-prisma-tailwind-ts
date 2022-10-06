import * as React from "react";

interface NotifProps {}

interface NotifState {}

class Notif extends React.Component<NotifProps, NotifState> {
  state = {};
  render() {
    return <div className="flex w-60 h-44 bg-black"></div>;
  }
}

export default Notif;
