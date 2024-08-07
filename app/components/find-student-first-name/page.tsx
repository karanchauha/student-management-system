"use client";
import React, { useState } from "react";
import axios from "axios";

const Page: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [response, setResponse] = useState<any[]>([]); // Specify the type as an array
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const result = await axios.post(
        "/api/firstName",
        { firstName },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response received:", result.data);
      setResponse(result.data); // Set response as an array
      setError("");
    } catch (err: any) {
      console.error("Error fetching user data:", err); // Log the error for debugging
      setError("Error fetching user data.");
      setResponse([]);
    }
  };

  const renderCard = (user: any) => (
    <div
      key={user.id}
      className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-500">Roll Number: {user.rollNumber}</p>
        <p className="text-gray-500">
          Registered: {user.isRegistered ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 bg-gray-950">
      <h1 className="text-white text-4xl">ENTER FIRST NAME</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-gray-100 p-6 rounded shadow-md"
      >
        <input
          type="text"
          value={firstName}
          placeholder="FIRST NAME"
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded mb-4 w-60"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Submit
        </button>
      </form>
      <div className="flex flex-wrap gap-4">
        {response.length > 0 ? (
          response.map(renderCard)
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
      {error && (
        <div className="mt-6 p-4 border border-red-300 bg-red-50 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default Page;
