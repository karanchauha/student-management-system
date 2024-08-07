"use client";
// import React, { useState } from "react";
// import axios from "axios";

// const Page = () => {
//   const [rollNumber, setRollNumber] = useState("");
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState("");

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     try {
//       const result = await axios.post("/api/rollNumber", { rollNumber });
//       setResponse(result.data);
//       setError("");
//     } catch (err) {
//       setError("Error fetching user data.");
//       setResponse(null);
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-gray-950">
//       <h1 className="text-5xl mb-6 text-white">Enter Roll Number</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col items-center bg-white p-6 rounded shadow-md"
//       >
//         <input
//           type="number"
//           value={rollNumber}
//           onChange={(e) => setRollNumber(e.target.value)}
//           placeholder="Roll Number"
//           className="border border-gray-300 p-2 rounded mb-4 w-60"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
//         >
//           Submit
//         </button>
//       </form>
//       {response && (
//         <div className="mt-6 p-4 border border-green-300 bg-green-50 text-green-800 rounded">
//           {JSON.stringify(response)}
//         </div>
//       )}
//       {error && (
//         <div className="mt-6 p-4 border border-red-300 bg-red-50 text-red-800 rounded">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;

import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const result = await axios.post("/api/rollNumber", { rollNumber });
      setResponse(result.data);
      setError("");
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("Error fetching user data.");
      setResponse(null);
    }
  };

  const renderCard = (user: any) => (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
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
      <h1 className="text-5xl mb-6 text-white">Enter Roll Number</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-gray-100 p-6 rounded shadow-md"
      >
        <input
          type="number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          placeholder="Roll Number"
          className="border border-gray-300 p-2 rounded mb-4 w-60"
          required
        />
        <button
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Submit
        </button>
      </form>
      <br />
      {response && renderCard(response)}
      {error && (
        <div className="mt-6 p-4 border border-red-300 bg-red-50 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default Page;
