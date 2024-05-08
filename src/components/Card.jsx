import React from "react";
import IMG from "../assets/benfits2.svg";

const Card = ({ title, descrption, img }) => {
  return (
    <div className="card-1 ff-base border-2 border-radius-10 box-shadow-2">
      <div className="card-1__img border-radius-8 border-2 ">
        <img src={img} alt="" />
      </div>
      <div className="card-1__title ff-accent fw-bold">{title}</div>
      <div className="card-1__desc ff-base fw-medium">{descrption}</div>
    </div>
  );
};

export default Card;