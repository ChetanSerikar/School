import React from "react";
import Cubes from "../assets/Hero2.svg";

const LayoutTwo = ({ hero }) => {
  const { tag, title, desc } = hero;
  return (
    <div className="layout-2 border-2 border-radius-10 margin-bottom-150 bg-neutral-000">
      <img className="layout-2__cubes" src={Cubes} alt="" />
      <div className="layout-2__left">
        <div className="layout-2__left__tag border-2 border-radius-6">
          {tag}
        </div>
        <div className="layout-2__left__title ff-accent fw-bold ">{title}</div>
      </div>
      <div className="layout-2__right fw-medium">{desc}</div>
    </div>
  );
};

export default LayoutTwo;
