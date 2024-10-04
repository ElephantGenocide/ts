import React from "react";

const HeroText = () => {
  return (
    <div className="text-pretty m-10 w-96 text-lg">
      <div className="mb-3">
        <span className="font-bold text-pink-500">Peppa Pig</span> is a British
        preschool animated television series created by{" "}
        <span className="text-blue-500 hover:text-blue-800">
          <a href="https://en.wikipedia.org/wiki/Astley_Baker_Davies">
            Neville Astley
          </a>
        </span>{" "}
        and{" "}
        <span className="text-blue-500 hover:text-blue-800">
          <a href="https://en.wikipedia.org/wiki/Mark_Baker_(animator)">
            Mark Baker
          </a>
        </span>
        .
      </div>
      Produced by Hasbro Entertainment and Karrot Animation and formerly
      produced by Astley Baker Davies, the show follows{" "}
      <span className="text-pink-500">Peppa</span>, an anthropomorphic female
      piglet, and her family, as well as her peers portrayed as other animals.
      The show first aired on <span className="font-bold">31 May 2004</span>.
      <div className="mt-3">
        The eighth season began broadcasting on{" "}
        <span className="font-bold">4th September 2023</span>. Peppa Pig has
        been broadcast in over <span className="font-extrabold">180</span>{" "}
        countries.
      </div>
    </div>
  );
};

export default HeroText;
