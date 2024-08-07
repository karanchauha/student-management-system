/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "rollNumber" INTEGER NOT NULL,
    "isRegistered" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_rollNumber_key" ON "user"("rollNumber");
