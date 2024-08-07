import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const user = await prisma.user.findMany({
      where: {
        isRegistered: true,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user); // Return user data as JSON
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
