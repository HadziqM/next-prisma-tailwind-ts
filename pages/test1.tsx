import * as React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const user = await prisma.user.findMany();
  return {
    props: { idk: user },
  };
}

interface Test1Props {}

interface Test1State {}

class Test1 extends React.Component<Test1Props, Test1State> {
  data: any;
  constructor(props: any) {
    super(props);
    this.data = props.idk[0];
  }
  state = {};
  render() {
    return (
      <div>
        <h1>{this.data.id}</h1>
        <h1>{this.data.username}</h1>
        <h1>{this.data.password}</h1>
        <h1>{this.data.sub}</h1>
      </div>
    );
  }
}
export default Test1;
