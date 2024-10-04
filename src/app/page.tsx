"use client";
import React from "react";
import Image from "next/image";
import peppa from "../public/peppa.png";
import { useState } from "react";
import TextCards from "./components/TextCards";
import HeroText from "./components/HeroText";

export default function Home() {
  const [count, setCounter] = useState(0);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center m-3 h-screen">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src={peppa}
            width={450}
            height={32}
            alt="peppa"
            className=" rounded-xl"
          />
          <p className="text-sm mt-[-12px]">Pepa the fucking Pig</p>
        </div>
        <HeroText />
      </div>

      <TextCards />

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <button
            className="mt-8 button hover:hovered_button active:text-sm"
            onClick={() => {
              setCounter((a) => a + 1);
            }}
          >
            Fuck that piggy
          </button>
          <div>Fucks: {count}</div>
          <button
            className="button hover:hovered_button active:text-sm"
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
