"use client";
import React, { useState } from "react";
import axios from "axios";

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  rollNumber: number;
  isRegistered: boolean;
}

const Page: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Student[]>("/api/register");
      setStudents(response.data);
    } catch (error) {
      setError("Error fetching students");
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center text-5xl bg-gray-950">
      <div>
        <h1 className="text-white text-5xl mb-4">Registered in course</h1>
      </div>
      <button
        onClick={fetchStudents}
        className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600 text-2xl transition duration-300"
      >
        GET REGISTERED STUDENTS
      </button>
      <div className="mt-4 text-white text-lg w-full max-w-4xl">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {students.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {students.map((student) => (
              <div
                key={student.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {student.firstName} {student.lastName}
                </h2>
                <p className="text-gray-300">
                  Roll Number: {student.rollNumber}
                </p>
                <p
                  className={`text-${
                    student.isRegistered ? "green" : "red"
                  }-500`}
                >
                  {student.isRegistered ? "Registered" : "Not Registered"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p className="text-center">No students registered</p>
        )}
      </div>
    </div>
  );
};

export default Page;
