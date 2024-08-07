// "use client";
// import React from "react";

// const StudentManagement: React.FC = () => {
//   // Array of button configurations
//   const buttons = [
//     {
//       label: "Find Student by Roll Number",
//       action: () => {
//         console.log("Finding student by roll number:")

//     }
//     },
//     {
//       label: "Find Student by First Name",
//       action: () => console.log("Finding student by first name:"),
//     },
//     {
//       label: "Find Students Registered in Course",
//       action: () => console.log("Finding students registered in course:"),
//     },
//     {
//       label: "Count of Students",
//       action: () => console.log("Counting students:"),
//     },
//   ];

//   return (
//     <div className="h-screen bg-gray-950 text-white flex flex-col items-center justify-center space-y-4">
//       {buttons.map((button, index) => (
//         <button
//           key={index}
//           className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
//           onClick={button.action}
//         >
//           {button.label}
//         </button>
//       ))}
//     </div>
//   );
// };
// export default StudentManagement;

"use client";
import React from "react";
import Link from "next/link";

const StudentManagement: React.FC = () => {
  // Array of button configurations
  const buttons = [
    {
      label: "Register Student",
      href: "/components/main",
    },
    {
      label: "Find Student by Roll Number",
      href: "/components/find-student-roll-number",
    },
    {
      label: "Find Student by First Name",
      href: "/components/find-student-first-name",
    },
    {
      label: "Find Students Registered in Course",
      href: "/components/find-students-course",
    },
    {
      label: "Count of Students",
      href: "/components/count-students",
    },
    {
      label: "Delete Student",
      href: "/components/Delete",
    },
  ];

  return (
    <div className="h-screen bg-gray-950 text-white flex flex-col items-center justify-center space-y-4">
      {buttons.map((button, index) => (
        <Link
          key={index}
          href={button.href}
          className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          {button.label}
        </Link>
      ))}
    </div>
  );
};

export default StudentManagement;
