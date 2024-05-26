import React from "react";
import Profile1 from "../assets/Profile1.svg";
import Star from "../assets/Star.svg";

const TestimonialsCard = ({ testimonial, currentCard, gapSize }) => {
  const { userImg, userName, stars, comment } = testimonial;

  return (
    <div
      className={`card-2 border-2 border-radius-10 flex bg-neutral-000 box-shadow-2 clr-neutral-600  `}
      style={{
        translate: `calc(${-100 * currentCard}% - ${currentCard * gapSize}px )`,
      }}
    >
      <div className="profile_wrapper">
        <img src={Profile1} alt="" />
        <div className=" ff-base fw-semi-bold fs-20">{userName}</div>
      </div>
      <div className="stars">
        {new Array(stars).fill("").map((_, index) => (
          <span key={index}>
            <img src={Star} alt="" />
          </span>
        ))}
      </div>
      <div className=" ff-base fw-medium">{comment}</div>
    </div>
  );
};

export default TestimonialsCard;
