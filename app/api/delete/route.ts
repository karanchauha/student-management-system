// pages/api/deleteStudent.ts
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

interface Student {
  rollNumber: number;
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json(); // Extract roll number from request body
    const { rollNumber }: Student = body;

    console.log("rollNumber", rollNumber);
    if (!rollNumber) {
      return NextResponse.json(
        { error: "Roll number is required" },
        { status: 400 }
      );
    }

    const deletedStudent = await prisma.user.delete({
      where: { rollNumber: rollNumber },
    });

    return NextResponse.json({
      message: "Student deleted successfully",
      deletedStudent,
    });
  } catch (error) {
    console.error("Error deleting student:", error);

    return NextResponse.json(
      { error: "An error occurred while deleting the student" },
      { status: 500 }
    );
  }
}
