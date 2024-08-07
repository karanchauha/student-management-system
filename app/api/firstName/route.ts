import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Name {
  firstName: string;
}

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName }: Name = body;

    if (!firstName) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findMany({
      where: {
        firstName: {
          equals: firstName,
        },
      },
    });

    console.log(user);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user); // Return user data as JSON
  } catch (error) {
    console.error("Error while finding user by firstName:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
