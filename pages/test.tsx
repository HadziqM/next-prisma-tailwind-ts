import type { NextPage } from "next";
import Hello from "../components/hello";

const Test: NextPage = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center text-blue-700">
        Hello Test
      </h1>
      <Hello />
    </div>
  );
};
export default Test;
