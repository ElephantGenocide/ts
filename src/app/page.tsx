"use client";
import React, { useEffect, useState } from "react";

import TextCards from "./components/TextCards";
import Hero from "./components/Hero";

export default function Home() {
  const [count, setCounter] = useState(0);

  return (
    <>
      <Hero />
      <div className="h-[50vh]"> tet</div>
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
