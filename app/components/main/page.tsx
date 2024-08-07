"use client";
import React, { useState } from "react";
import axios from "axios";
// import { useRouter } from "next/router";

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    rollNumber: "",
    isRegistered: false,
  });

  const [loading, setLoading] = useState(false);
  // const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Convert rollNumber to an integer
    const submissionData = {
      ...formData,
      rollNumber: parseInt(formData.rollNumber, 10),
    };

    try {
      const { data } = await axios.post(
        "/api/userRegister",
        JSON.stringify(submissionData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Success:", data);
      alert("User registered successfully");
      // router.push("/dashboard");
      window.location.href = "/btn";
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register user");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen flex flex-col justify-center items-center bg-gray-950"
    >
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-teal-50 ">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="border p-2 rounded-md text-color"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-teal-50">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="border p-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rollNumber" className="block text-teal-50">
          Roll Number:
        </label>
        <input
          type="number"
          id="rollNumber"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          required
          className="border p-2 rounded-md"
        />
      </div>
      <div className="mb-4 flex gap-5">
        <label htmlFor="isRegistered" className="block text-teal-50">
          Is Registered:
        </label>
        <input
          type="checkbox"
          id="isRegistered"
          name="isRegistered"
          checked={formData.isRegistered}
          onChange={handleChange}
          className="mr-2"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`p-2 bg-gray-800  hover:bg-gray-600 rounded-md text-white w-60 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default UserForm;
