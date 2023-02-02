import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Your Company
        </p>
        <div className="flex">
          <a
            href="#"
            className="px-4 py-2 hover:bg-gray-700 rounded-lg"
          >
            About
          </a>
          <a
            href="#"
            className="px-4 py-2 hover:bg-gray-700 rounded-lg"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
