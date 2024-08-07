import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const count = await prisma.user.count();
    console.log(`Total number of users: ${count}`);
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error retrieving total number of users:", error);
    return NextResponse.json(
      {
        error: "An error occurred while retrieving the total number of users.",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
