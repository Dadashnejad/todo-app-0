import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function PUT(request: NextRequest, { params }: any) {
  const updateData = await request.json();
  if (updateData.state == false) {
    const updateTask = await prisma.tasktd.update({
      where: {
        id: params.id,
      },
      data: {
        state: true,
      },
    });
  } else {
    const updateTask = await prisma.tasktd.update({
      where: {
        id: params.id,
      },
      data: {
        state: false,
      },
    });
  }
  const res = NextResponse.json({ message: "UPDATE" }, { status: 201 });
  return console.log(res.ok);
}
