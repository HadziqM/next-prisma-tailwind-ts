import * as React from "react";

interface CustHeadProps {}

interface CustHeadState {}

class CustHead extends React.Component<CustHeadProps, CustHeadState> {
  state = {
    date: new Date().toDateString(),
    time: new Date().toTimeString().replace("(Indochina Time)", ""),
  };
  interval: any;
  getDate = () => {
    this.setState({
      date: new Date().toDateString(),
      time: new Date().toTimeString().replace("(Indochina Time)", ""),
    });
  };
  componentDidMount() {
    this.interval = setInterval(() => this.getDate(), 1000);
  }
  componentWillUnmount(): void {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex justify-between  items-center p-4">
          <img src="/logo.svg" className="max-h-12"></img>
          <div>
            <p className="text-xs">
              {this.state.date} | {this.state.time}
            </p>
            <h1 className="text-2xl">SHIP MONITORING</h1>
          </div>
        </div>
        <div className="bg-blue-800 flex justify-between items-center px-4 py-2 text-white">
          <div className="flex gap-4">
            <img src="/ship.svg" className="h-8 w-8 invert"></img>
            <h2>Beranda</h2>
            <h2>Setting</h2>
          </div>
          <div className="flex gap-2">
            <h2>Hi,Brother</h2>
            <img src="/user.svg" className="h-6 w-6 invert"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default CustHead;
