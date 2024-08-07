"use client";
import { useState } from "react";
import axios from "axios";

const DeleteUserPage = () => {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setMessage(null);
    setError(null);

    try {
      const response = await axios.delete("/api/delete", {
        data: { rollNumber: parseInt(userId, 10) },
        // data: { id: userId },
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.error || "Failed to delete user");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Delete Student
        </h1>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user RollNumber"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={handleDelete}
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          Delete Student
        </button>
        {message && <p className="text-green-500 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default DeleteUserPage;
