import * as React from "react";

interface NotifProps {}

interface NotifState {}

class Notif extends React.Component<NotifProps, NotifState> {
  state = {};
  render() {
    return <div className="flex w-full h-full bg-black row-span-2"></div>;
  }
}

export default Notif;
