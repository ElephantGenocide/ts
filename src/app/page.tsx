"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TextCards from "./components/TextCards";
import Hero from "./components/Hero";
import HeroText from "./components/HeroText";
import peppa from "@/public/peppa.png";

export default function Home() {
  const [count, setCounter] = useState(0);

  return (
    <>
      <Hero />
      <div className="my-[10vw] flex flex-col md:flex-row items-center justify-center">
        <div className="grid place-items-center">
          <Image
            alt="peppa"
            src={peppa}
            className="rounded-3xl w-[80vw] md:w-[30vw]"
          />
          <p className="mt-1">Peppa the pig</p>
        </div>

        <HeroText />
      </div>

      <TextCards />

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <button
            className="mt-8 rounded-l min-h-10 p-2 hover:text-pink-500  active:text-pink-500 active:text-sm"
            onClick={() => {
              setCounter((a) => a + 1);
            }}
          >
            Fuck that piggy
          </button>
          <div>Fucks: {count}</div>
          <button
            className="rounded-l min-h-10 p-2 hover:text-pink-500 active:text-pink-500 active:text-sm"
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
