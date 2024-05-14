import React from "react";

const CardSeven = ({ step }) => {
  const { id, title, desc } = step;
  return (
    <div className="card-7">
      <div className="card-7__sl border-2 border-radius-12 box-shadow-2 bg-neutral-000 fw-extra-bold ff-accent clr-neutral-800">
        {id}
      </div>
      <div className="card-7__line">
        <div className="line"></div>
      </div>
      <div className="card-7__body border-2 border-radius-10 box-shadow-2 bg-neutral-000">
        <div className="card-7__body__title fw-bold ff-accent clr-neutral-800">
          {title}
        </div>
        <div className="card-7__body__desc clr-neutral-500 ">{desc}</div>
      </div>
      {/* <div className="card-7__bottomline">
        <div className="line"></div>
      </div> */}
    </div>
  );
};

export default CardSeven;
