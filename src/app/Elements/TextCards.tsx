import React from "react";
import { textForCards } from "../assets/stuff";

const TextCards = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {textForCards.map((card) => {
        return (
          <div className="flex flex-col justify-center w-96 md:w-9/12">
            <h1 className="text-3xl text-center md:text-left mb-3 mt-16 md:indent-10">
              {card.Title}
            </h1>
            {card.Text.map((item) => {
              return <p className="text-justify indent-10 mb-2">{item}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TextCards;
