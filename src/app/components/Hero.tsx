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
    <div className="flex h-screen w-screen overflow-y-hidden perspective-200">
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
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        className="absolute top-[2vw] "
      />

      <Image
        alt="peppaHouse"
        src={peppaHouse}
        className="absolute top-[68%] lg:top-0 object-contain lg:h-screen"
      />

      <Image
        alt="peppaLogo"
        src={peppaLogo}
        style={{ transform: `translateY(${offsetY * 0.55}px)` }}
        className={`absolute left-[13%] lg:left-[35vw] bg-center top-[65vw] lg:top-[10vw] w-96 lg:w-[30vw]`}
      />
    </div>
  );
};

export default Hero;
