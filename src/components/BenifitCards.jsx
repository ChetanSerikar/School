import React from "react";
import CardOne from "./CardOne";
import { card1 } from "../data/cards";
import IMG from "../assets/benfits2.svg";

const BenifitCards = () => {
  console.log(card1);
  return (
    <>
      <div className="card-1__wrapper margin-bottom-150">
        {card1.map((card, index) => (
          <CardOne
            key={index}
            title={card.title}
            descrption={card.descrption}
            img={card.img}
          />
        ))}
      </div>
    </>
  );
};

export default BenifitCards;