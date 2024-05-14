import React from "react";

const CardFive = ({ info }) => {
  const { img, title, content } = info;
  return (
    <div className="card-5 border-2 border-radius-10 box-shadow-2 text-center bg-neutral-000">
      <div className="col2 bg-primary-200"></div>
      <img className="card-5__img" src={img} alt="" />
      <div className="card-5__title ff-accent fw-bold clr-neutral-800">
        {title}
      </div>
      <div className="card-5__desc fw-medium clr-neutral-500">{content}</div>
    </div>
  );
};

export default CardFive;
