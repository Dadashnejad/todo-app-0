// create/post a new task, state
import prisma from "../../../../prisma/client";
import { NextResponse, NextRequest } from "next/server";

type addtaskProps = {
  task: string;
  state: boolean;
};

export async function POST(request: NextRequest, response: NextResponse) {
  const newdata = await request.json();
  await prisma.tasktd.create({
    data: {
      task: newdata.task,
      state: false,
    },
  });
  const res = NextResponse.json({ message: "Task added" }, { status: 201 });
  return console.log(res.body);
}
