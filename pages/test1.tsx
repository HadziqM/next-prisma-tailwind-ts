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
  interval: any;
  constructor(props: any) {
    super(props);
    this.data = props.idk[0];
  }
  state = { id: 0, username: "idk", password: "idk", sub: 0 };

  testing = () => {
    const data = this.data;
    this.setState({
      id: data.id,
      username: data.username,
      password: data.password,
      sub: data.sub,
    });
  };
  async getData() {
    const res = await fetch("http://localhost:3000/api/hello");
    const user = await res.json();
    console.log(user);
  }
  componentDidMount() {
    this.interval = setInterval(() => this.getData(), 1000);
  }
  componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <button onClick={this.testing}>Test</button>
        <h1>{this.state.id}</h1>
        <h1>{this.state.username}</h1>
        <h1>{this.state.password}</h1>
        <h1>{this.state.sub}</h1>
      </div>
    );
  }
}
export default Test1;