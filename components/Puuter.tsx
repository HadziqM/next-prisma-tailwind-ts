import * as React from "react";

interface FooterITSProps {}

interface FooterITSState {}

class FooterITS extends React.Component<FooterITSProps, FooterITSState> {
  render() {
    return (
      <div className="flex justify-end bg-blue-800 w-screen px-4 py-2 text-white items-center gap-2">
        <h2 className="text-sm">
          Developed By: Institute Teknologi Sepuluh Nopember
        </h2>
        <img src="/its.png" className="h-6 w-6"></img>
      </div>
    );
  }
}

export default FooterITS;
