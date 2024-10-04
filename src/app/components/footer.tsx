import React from "react";
import { navLinks } from "../../public/stuff";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-evenly bottom-0 w-screen bg-gray-800 text-gray-500">
      <div>© 2024 Peppa the Pig™. All Rights Reserved.</div>
      <div className="flex justify-between items-center">
        <div className="hidden md:flex">
          {navLinks.map((item) => {
            return <Link href={item.href}>{item.title}</Link>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
