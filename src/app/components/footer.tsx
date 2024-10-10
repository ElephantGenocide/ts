import React from "react";
import { navLinks } from "../../public/stuff";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex-col md:flex p-10 justify-evenly bottom-0 w-screen bg-gray-900 text-gray-600">
      <div className="flex justify-center items-center ">
        <div className="flex border-gray-600 border-b-[1px] mb-5 w-4/6 justify-between px-5">
          <p className="mb-1">© 2024 Peppa the Pig™</p>
          <p>All Rights Reserved</p>
        </div>
      </div>

      <div className="flex gap-5 justify-center">
        {navLinks.map((item) => {
          return (
            <Link
              className="hover:text-gray-500"
              key={item.id}
              href={item.href}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
