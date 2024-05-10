import React from "react";
import Left from "../assets/right.svg";
import { Link } from "react-router-dom";

const ExploreCard = ({ card }) => {
  const { title, desc, link } = card;
  return (
    <div className="card-3 text-center border-2 border-radius-10 box-shadow-2 bg-neutral-000">
      <div className="card-3__title ff-accent fw-bold">{title}</div>
      <div className="card-3__desc ff-base fw-medium">{desc}</div>
      <Link
        to={`${link}`}
        className="card-3__button fw-medium border-2 border-radius-8 box-shadow-2 bg-primary-400 clr-neutral-900"
      >
        Learn More
        <span>
          <img src={Left} alt="" />
        </span>
      </Link>
    </div>
  );
};

export default ExploreCard;
