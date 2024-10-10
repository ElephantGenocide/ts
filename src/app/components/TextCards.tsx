import React from "react";
import { textForCards } from "../../public/stuff";

const TextCards = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {textForCards.map((card) => {
        return (
          <div
            key={card.id}
            className="flex flex-col justify-center w-96 md:w-9/12"
          >
            <h1 className="text-3xl text-center md:text-left mb-3 mt-16 md:indent-10">
              {card.title}
            </h1>
            {card.text.map((text) => {
              return <p className="text-justify indent-10 mb-2">{text}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TextCards;
