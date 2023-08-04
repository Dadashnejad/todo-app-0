// create/post a new task, state
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

type addtaskProps = {
  task: string;
  state: boolean;
};

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const addtask: addtaskProps = JSON.parse(req.body);
    if (req.method === "POST") {
      if (!addtask.task.length) {
        return res.status(500).json({ message: "its empty" });
      }
      try {
        const data = await prisma.tasktd.create({
          data: {
            task: addtask.task,
            state: addtask.state,
          },
        });
        res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ message: "Failed to create new task" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
