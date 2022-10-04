import type { NextPage } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const user = await prisma.user.findMany();
  return {
    props: { idk: user },
  };
}

const Prisma: NextPage = (props) => {
  const id: number = props.idk[0];
  return (
    <div>
      <h1>{id.id}</h1>
      <h1>{id.username}</h1>
      <h1>{id.password}</h1>
    </div>
  );
};
export default Prisma;
