// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// // import { useRouter } from "next/router";

// const UserForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     rollNumber: "",
//     isRegistered: false,
//   });

//   const [loading, setLoading] = useState(false);
//   // const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // Convert rollNumber to an integer
//     const submissionData = {
//       ...formData,
//       rollNumber: parseInt(formData.rollNumber, 10),
//     };

//     try {
//       const { data } = await axios.post(
//         "/api/userRegister",
//         JSON.stringify(submissionData),
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Success:", data);
//       alert("User registered successfully");
//       // router.push("/dashboard");
//       window.location.href = "/dashboard";
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to register user");
//     }

//     setLoading(false);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="h-screen flex flex-col justify-center items-center bg-slate-600"
//     >
//       <div className="mb-4">
//         <label htmlFor="firstName" className="block text-teal-50 ">
//           First Name:
//         </label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//           className="border p-2 rounded-md text-color"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="lastName" className="block text-teal-50">
//           Last Name:
//         </label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//           className="border p-2 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="rollNumber" className="block text-teal-50">
//           Roll Number:
//         </label>
//         <input
//           type="number"
//           id="rollNumber"
//           name="rollNumber"
//           value={formData.rollNumber}
//           onChange={handleChange}
//           required
//           className="border p-2 rounded-md"
//         />
//       </div>
//       <div className="mb-4 flex gap-5">
//         <label htmlFor="isRegistered" className="block text-teal-50">
//           Is Registered:
//         </label>
//         <input
//           type="checkbox"
//           id="isRegistered"
//           name="isRegistered"
//           checked={formData.isRegistered}
//           onChange={handleChange}
//           className="mr-2"
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={loading}
//         className={`p-2 bg-slate-800 rounded-md text-white w-60 ${
//           loading ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//       >
//         {loading ? "Registering..." : "Register"}
//       </button>
//     </form>
//   );
// };
// export default UserForm;

// "use client";
// import Link from "next/link";
// import React from "react";
// const page = () => {
//   return (
//     <div>
//       <div className="h-screen flex flex-col justify-center items-center gap-5 bg-gray-950">
//         <h1 className="text-white text-4xl">WELCOME USER</h1>
//         <Link
//           href="/btn"
//           className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
//         >
//           GET STARTED
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default page;
import React from "react";
import PageComponent from "./components/slash/page"; // Renaming the import

const Page = () => {
  return (
    <div>
      <PageComponent /> {/* Use the renamed component */}
    </div>
  );
};

export default Page;
