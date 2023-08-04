import { prisma } from "@/db";

export async function main() {
  const tasks = await prisma.tasktd.findMany()
  console.log(tasks)
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
