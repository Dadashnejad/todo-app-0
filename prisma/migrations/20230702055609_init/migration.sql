-- CreateTable
CREATE TABLE "tasktd" (
    "id" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" BOOLEAN NOT NULL,

    CONSTRAINT "tasktd_pkey" PRIMARY KEY ("id")
);
