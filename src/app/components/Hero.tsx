"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import peppaBg from "@/public/hero-paralax/peppa-bg-pc.png";
import peppaHouse from "@/public/hero-paralax/peppa-house.png";
import peppaClouds from "@/public/hero-paralax/peppa-clouds.png";
import peppaSun from "@/public/hero-paralax/peppa-sun.png";
import peppaLogo from "@/public/hero-paralax/peppa-logo.png";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-y-hidden perspective-200">
      <Image alt="peppaBg" src={peppaBg} className="absolute top-0 h-screen" />

      <Image
        alt="peppaSun"
        src={peppaSun}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        className="absolute top-0 w-[15vw] left-[20vw]"
      />

      <Image
        alt="peppaClouds"
        src={peppaClouds}
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        className="absolute top-[2vw] "
      />

      <Image
        alt="peppaHouse"
        src={peppaHouse}
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        className="absolute bottom-0 lg:top-0 object-contain lg:h-screen"
      />
      <div className="flex items-center justify-center ">
        <Image
          alt="peppaLogo"
          src={peppaLogo}
          style={{ transform: `translateY(${offsetY * 0.65}px)` }}
          className={`absolute w-[30vh] lg:w-[30vw] drop-shadow-2xl`}
        />
      </div>
    </div>
  );
};

export default Hero;
