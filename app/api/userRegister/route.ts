import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Define the interface to match the expected request body structure
interface User {
  firstName: string;
  lastName: string;
  rollNumber: number;
  isRegistered: boolean;
}

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, rollNumber, isRegistered }: User = body;

    // Add input validation if necessary
    if (!firstName || !lastName || !rollNumber) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log(firstName, lastName, rollNumber, isRegistered);

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        rollNumber,
        isRegistered,
      },
    });

    return NextResponse.json(
      { message: "Student registered successfully", data: newUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while saving user data:", error);
    return NextResponse.json(
      { error: "Failed to save user data" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
