import * as React from "react";

interface NotifProps {}

interface NotifState {}

class Notif extends React.Component<NotifProps, NotifState> {
  state = {};
  render() {
    return (
      <div className="flex w-60 h-s9 bg-black row-span-2 flex-col text-black p-1 gap-1">
        <div className="w-full bg-gray-300 rounded-lg flex items-center text-left px-2">
          <h2>Notif</h2>
        </div>
        <div className="flex-col flex bg-gray-300 rounded-lg w-full h-full status">
          <div className="flex justify-between p-2 font-semibold">
            <p>idk just notif</p>
            <p>1:00</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Notif;
