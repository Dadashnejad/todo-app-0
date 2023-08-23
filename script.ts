import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const task = await prisma.tasktd.create({
    data: {
      task: "work 3h",
      description: "work 3 hours do projects and tasks",
      state: false,
    },
  });
  console.log(task);
}

main()
  .catch((e) => { 
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
