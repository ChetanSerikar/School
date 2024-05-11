import React from "react";
import Mission from "../assets/Mission.svg";

const MissionAndVissionCard = ({ info }) => {
  const { img, title, desc } = info;
  return (
    <div className="card-4 border-2 border-radius-10 box-shadow-2 bg-neutral-000">
      <div className="card-4__head ">
        <div className=" fw-bold">{title}</div>
        <img src={img} alt="" />
      </div>
      <div className="card-4__body">{desc}</div>
    </div>
  );
};

export default MissionAndVissionCard;