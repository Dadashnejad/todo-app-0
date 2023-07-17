// create/post a new task, state
import prisma from "../../../../prisma/client";
import { NextResponse, NextRequest } from "next/server";

type addtaskProps = {
  task: string;
  state: boolean;
};

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.json()
  return console.log(data)
  // console.log(req.body)
  // const addtask = await JSON.parse(req.body);
  // await prisma.tasktd.create({
  //   data: {
  //     task: addtask.task,
  //     state: false,
  //   },
  // });
  // return NextResponse.json({message: "Task added"}, {status: 201})
}




// export function POST(req: NextApiRequest, res: NextApiResponse){
//   const {method} = req;
//   console.log(method)
//   if(method === "POST"){
//     const { task } = req.body
//   }
//   res.status(200).json({messege: "post sent!"})
// }

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const addtask: addtaskProps = JSON.parse(req.body);
//     if (req.method === "POST") {
//       if (!addtask.task.length) {
//         return res.status(500).json({ message: "its empty" });
//       }
//       try {
//         const data = await prisma.tasktd.create({
//           data: {
//             task: addtask.task,
//             state: false,
//           },
//         });
//         return NextResponse.json(data)
//       } catch (error) {
//         return NextResponse.json({message: "POST Error"}, {status: 500})
//             }
//     }
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// }
