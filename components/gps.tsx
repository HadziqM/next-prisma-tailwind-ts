import * as React from "react";

interface GpsProps {
  gpsn: string;
  gpsw: string;
}

interface GpsState {}

class Gps extends React.Component<GpsProps, GpsState> {
  render() {
    return (
      <div className="bg-black text-white flex w-60 h-44 justify-center items-center gap-2 m-2">
        <div className="rounded-lg h-40 w-56 flex flex-col justify-between bg-gray-800 p-1">
          <p className="text-xs">Gps</p>
          <h2 className="text-center text-lg font-bold">{this.props.gpsn} N</h2>
          <h2 className="text-center text-lg font-bold">{this.props.gpsw} W</h2>
          <a
            className="text-xs cursor-pointer text-red-600"
            href={this.gmaps()}
          >
            Gmaps
          </a>
        </div>
      </div>
    );
  }
  gmaps() {
    return (
      "https://www.google.com/maps/@?api=1&map_action=map&center=" +
      this.props.gpsn +
      "%2C" +
      this.props.gpsw +
      "&zoom=12&basemap=terrain"
    );
  }
}

export default Gps;
