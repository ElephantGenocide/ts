import React from "react";
import { textForCards } from "../assets/stuff";

const TextCards = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {textForCards.map((card, index) => {
        return (
          <div className="flex flex-col justify-center w-96 md:w-9/12">
            <h1
              key={index}
              className="text-3xl text-center md:text-left mb-3 mt-16 md:indent-10"
            >
              {card.Title}
            </h1>
            {card.Text.map((item, index) => {
              return (
                <p key={index} className="text-justify indent-10 mb-2">
                  {item}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TextCards;
