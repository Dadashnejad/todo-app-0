import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function DELETE(request: NextRequest, { params }: any) {
  console.log(params.id);
  const deleteTask = await prisma.tasktd.delete({
    where: {
      id: params.id,
    },
  });
  const res = NextResponse.json({ message: "Task DELETED" }, { status: 201 });
  return console.log(res.ok);
}

export async function PUT(request: NextRequest, { params }: any) {
  const updateData = await request.json();
  const updateTask = await prisma.tasktd.update({
    where: {
      id: params.id,
    },
    data: {
      task: updateData.task,
    },
  });
  const res = NextResponse.json({ message: "UPDATE" }, { status: 201 });
  return console.log(res.ok);
}
