import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function DELETE(request: NextRequest, { params }: any){

    console.log("###################################################################", params.id)
    const deleteTask = await prisma.tasktd.delete({
        where: {
            id: params.id,
          }
    })
    const res = NextResponse.json({message: "Task DELETED"}, {status: 201})
    return console.log(res.body)
  
}

// get tasks from taskdb and show on page.tsx
// import { NextResponse } from "next/server";
// import prisma from "../../../../prisma/client";

// export async function GET(props){
//     try{
//         const data = await prisma.tasktd.findUnique({
//             where:{
//                 id: id
//             }
//         })

//         return NextResponse.json(data)

//     }catch(error){
//         return new Response(JSON.stringify({ ok: "not okay" }));
//     }
// }
