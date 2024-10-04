"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { logo, navLinks } from "../../public/stuff";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`flex w-screen justify-between p-5 overflow-hidden`}>
        {logo}
        <ol className="gap-7 hidden md:flex">
          {navLinks.map((item) => {
            return (
              <Link href={item.href}>
                <li className="cursor-pointer p-3 border-b-2 border-black transition hover:border-green-700 hover:text-green-700">
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ol>

        <div className="gap-x-3 font-bold hidden md:flex">
          <Link
            href={``}
            className="p-3 rounded-lg transition hover:text-green-700 hover:bg-gray-900"
          >
            Log In
          </Link>
          <Link
            href={``}
            className="p-3 rounded-lg transition hover:text-green-700 hover:bg-gray-900"
          >
            Sign Up
          </Link>
        </div>

        <div className="flex m-2 md:hidden">
          <button onClick={() => setOpen(open ? false : true)}>
            <MenuIcon />
          </button>
        </div>
      </div>

      <div
        className={`fixed w-full right-0 top-0 h-full ${
          open ? "flex flex-col" : "hidden"
        }`}
      >
        <div className=" bg-background p-5 justify-between flex">
          {logo}
          <div className="flex m-2 md:hidden">
            <button onClick={() => setOpen(open ? false : true)}>
              <MenuIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-col  items-center h-screen  bg-black bg-opacity-95">
          <div className="flex flex-col gap-y-1 justify-center items-center my-20">
            {navLinks.map((item) => {
              return (
                <Link
                  href={item.href}
                  className="text-3xl  w-full h-20 flex justify-center items-center transition focus:text-4xl focus:text-green-700"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="flex  font-bold my-5 text-4xl items-end">
            <Link
              href={``}
              className="p-3 mr-2 rounded-lg transition focus:text-green-700"
            >
              Log In
            </Link>
            <Link
              href={``}
              className="p-3 ml-2 rounded-lg transition focus:text-green-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
