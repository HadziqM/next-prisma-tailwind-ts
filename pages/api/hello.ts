// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  user:any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ships: any = await prisma.ships.findMany({
    where: {
      username: "hertz",
    },
  });
  const spec: any =await Promise.all(ships.map(
    async (e: any) =>
     await prisma.kapals.findUnique({
      where:{
        brand:e.brand
      }
    })
  ))
  res.status(200).json({user : spec})
}
