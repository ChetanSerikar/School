import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import { useState } from "react";
import Left from "../assets/left.svg";
import Right from "../assets/right.svg";

const Caresoul = ({ numberOfCards = 3 }) => {
  const [currentCard, setCurrentCard] = useState(numberOfCards);
  const testimonials = [
    {
      userImg: "",
      userName: "user1",
      stars: 5,
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      userImg: "",
      userName: "user2",
      stars: 5,
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      userImg: "",
      userName: "user3",
      stars: 5,
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      userImg: "",
      userName: "user4",
      stars: 5,
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      userImg: "",
      userName: "user5",
      stars: 5,
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      userImg: "",
      userName: "user6",
      stars: 5,
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      userImg: "",
      userName: "user7",
      stars: 5,
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      userImg: "",
      userName: "user8",
      stars: 5,
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      userImg: "",
      userName: "user9",
      stars: 5,
      comment:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
  ];
  const containerSize = 1024;
  const perSlide = numberOfCards;
  const gapSize = 20;
  const numberOfGap = perSlide - 1;
  const totalGapSize = gapSize * numberOfGap;

  const slideWidth = containerSize / perSlide - totalGapSize / perSlide;
  const handleLeft = () => {
    if (currentCard <= numberOfCards) {
      return;
    }
    setCurrentCard((prev) => prev - 1);
  };
  const handleRight = () => {
    if (currentCard >= testimonials.length) {
      return;
    }
    setCurrentCard((prev) => prev + 1);
  };
  const con = true;
  return (
    <div className="caresoul margin-bottom-150">
      <div
        className="caresoul__grid_wrapper"
        // style={{ gridAutoColumns: `${slideWidth}px`, gridGap: `${gapSize}px` }}
      >
        {testimonials.map((testimonial, index) =>
          index < currentCard && index >= currentCard - numberOfCards ? (
            <TestimonialsCard key={index} testimonial={testimonial} />
          ) : null
        )}
      </div>
      <div className="caresoul__buttons">
        <button
          className="caresoul__buttons__left border-2 border-radius-8 bg-neutral-000"
          onClick={() => handleLeft()}
        >
          <img src={Left} alt="" />
        </button>
        <button
          className="caresoul__buttons__rigth  border-2 border-radius-8 bg-neutral-000"
          onClick={() => handleRight()}
        >
          <img src={Right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Caresoul;
