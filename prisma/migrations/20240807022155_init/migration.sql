-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "rollNumber" INTEGER NOT NULL,
    "isRegisterd" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_rollNumber_key" ON "Post"("rollNumber");
