"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center gap-5 bg-gray-950">
        <h1 className="text-white text-4xl">WELCOME USER</h1>
        <Link
          href="/btn"
          className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          GET STARTED
        </Link>
      </div>
    </div>
  );
};

export default page;
