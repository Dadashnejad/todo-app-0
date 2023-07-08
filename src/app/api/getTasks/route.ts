// get tasks from taskdb and show on page.tsx
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req: Request, res: Response){
    try{
        const data = await prisma.tasktd.findMany()

        return NextResponse.json(data)

    }catch(error){
        return new Response(JSON.stringify({ ok: "not okay" }));
    }
}