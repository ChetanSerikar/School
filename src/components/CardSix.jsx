import React from "react";
import classroom from "../assets/classroom.png";
import classroom2 from "../assets/classroom2.png";
import classroom3 from "../assets/classroom3.png";
import classroom4 from "../assets/classroom4.png";
import Left from "../assets/left.svg";
import Right from "../assets/right.svg";
import { useState } from "react";

const CardSix = ({ info }) => {
  const [visible, setVisible] = useState(0);
  const { images, title, desc } = info;
  //   const images = [classroom, classroom2, classroom3, classroom4];
  const handleRight = () => {
    if (visible == images.length - 1) return;
    setVisible((prev) => prev + 1);
  };
  const handleLeft = () => {
    if (visible == 0) return;
    setVisible((prev) => prev - 1);
  };
  return (
    <div className="card-6 border-2 border-radius-10 box-shadow-2 bg-neutral-000">
      <div className="card-6__images">
        {images.map((image, index) => (
          <img
            className={`card-6__images__img ${
              visible == index ? "visible" : "invisible"
            } `}
            key={index}
            src={image}
            alt=""
          />
        ))}
      </div>
      <div className="card-6__title ff-accent fw-bold">
        <div>{title}</div>
        <div className="card__buttons">
          <button
            onClick={() => handleLeft()}
            className="card__button border-2 border-radius-6 bg-neutral-000 "
          >
            <img src={Left} alt="" />
          </button>
          <button
            onClick={() => handleRight()}
            className="card__button border-2 border-radius-6 bg-neutral-000 "
          >
            <img src={Right} alt="" />
          </button>
        </div>
      </div>
      <div className="card-6__desc clr-neutral-500">{desc}</div>
    </div>
  );
};

export default CardSix;
