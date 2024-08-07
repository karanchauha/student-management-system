// import { PrismaClient } from "@prisma/client";
// import { NextResponse, NextRequest } from "next/server";

// const prisma = new PrismaClient();

// export async function GET(request: NextRequest) {
//   try {
//     const rollNumber = parseInt(
//       request.nextUrl.searchParams.get("rollNumber") || "0"
//     ); // Retrieve rollNumber from query parameters
//     const user = await prisma.user.findUnique({
//       where: {
//         rollNumber: rollNumber, // Replace with the actual field
//       },
//     });

//     if (user) {
//       return NextResponse.json(user); // Return user data as JSON
//     } else {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }
//   } catch (error) {
//     console.error("Error finding user by roll number:", error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body = await request.json();
    const rollNumber = parseInt(body.rollNumber || 0);

    if (isNaN(rollNumber)) {
      return NextResponse.json(
        { message: "Invalid rollNumber" },
        { status: 400 }
      );
    }

    // Query the user by rollNumber
    const user = await prisma.user.findUnique({
      where: {
        rollNumber: rollNumber,
      },
    });

    if (user) {
      return NextResponse.json(user); // Return user data as JSON
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error while finding user by roll number:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
