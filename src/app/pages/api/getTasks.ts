// get tasks from taskdb and show on page.tsx
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse
){
    try{
        const data = await prisma.tasktd.findMany()
        return res.status(200).json(data)

    }catch(error){
        return res.status(500).json(error)
    }

}