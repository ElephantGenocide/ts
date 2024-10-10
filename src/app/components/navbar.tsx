"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { logo, navLinks } from "../../public/stuff";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navStyle, setNavStyle] = useState("h-0");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 1
        ? setNavStyle(
            " dark:bg-[rgba(10,10,10,0.5)]  scale-[52] duration-[300ms] "
          )
        : setNavStyle(" dark:bg-[rgba(10,10,10,0)] h-0  duration-500");
      if (window.scrollY > 800)
        setNavStyle(" dark:bg-[rgba(10,10,10,1)] scale-[52] duration-300");
    });
  });

  return (
    <>
      <div
        className={`fixed w-screen h-1 z-10 top-0 bg-background ${navStyle}`}
      ></div>
      <div
        className={`flex fixed z-10  top-0 w-screen justify-between p-7 overflow-hidden`}
      >
        {logo}
        <ol className="gap-32 hidden md:flex">
          {navLinks.map((item) => {
            return (
              <Link key={item.id} href={item.href}>
                <li className="cursor-pointer p-3 text-xl hover:text-pink-500 duration-200">
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ol>

        <div className="gap-x-3 font-bold hidden md:flex">
          <Link
            href={``}
            className="p-3 duration-200 rounded-lg transition hover:text-pink-500  hover:bg-background"
          >
            Log In
          </Link>
          <Link
            href={``}
            className="p-3 duration-200 rounded-lg transition hover:text-pink-500 hover:bg-background"
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
        className={`fixed w-full z-10 right-0 top-0 h-full ${
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

        <div className="flex flex-col items-center h-screen bg-black bg-opacity-95">
          <div className="flex flex-col gap-y-1 justify-center items-center my-20">
            {navLinks.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-3xl w-full h-20 flex justify-center items-center transition focus:text-4xl"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="flex font-bold my-5 text-4xl items-end">
            <Link
              href={``}
              className="p-3 mr-2 rounded-lg transition focus:text-pink-500"
            >
              Log In
            </Link>
            <Link
              href={``}
              className="p-3 ml-2 rounded-lg transition focus:text-pink-500"
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
