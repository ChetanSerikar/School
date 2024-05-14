import React from "react";
import Cubes2 from "../assets/cubes2.svg";

const YearHistory = ({ info }) => {
  const { year, title, desc } = info;
  return (
    <div className="history">
      <div className="history__year border-2 border-radius-10 box-shadow-2 bg-neutral-000">
        <img src={Cubes2} alt="" />
        <div className="ff-accent fw-bold clr-neutral-800">{year}</div>
      </div>
      <div className="history__desc">
        <div className="history__desc__title ff-accent fw-bold clr-neutral-800">
          {title}
        </div>
        <div className="history__desc__body fw-medium clr-neutral-600">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default YearHistory;
