// pages/totalUsers.tsx
"use client";
import { useEffect, useState } from "react";

const TotalUsersPage = () => {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/totalStudents");
        const data = await response.json();
        if (response.ok) {
          setCount(data.count);
        } else {
          setError(data.error || "Failed to fetch data");
        }
      } catch (error) {
        setError("An unexpected error occurred");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 p-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Total Number of Students : {count}
        </h1>
        {error ? (
          <p className="text-red-500 text-lg">{error}</p>
        ) : count !== null ? (
          <p className="text-lg text-gray-700">
            Total users: <span className="font-bold text-black">{count}</span>
          </p>
        ) : (
          <p className="text-lg text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TotalUsersPage;
