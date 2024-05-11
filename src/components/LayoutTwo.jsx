import React from "react";
import Cubes from "../assets/Hero2.svg";

const LayoutTwo = () => {
  return (
    <div className="layout-2 border-2 border-radius-10 margin-bottom-150 bg-neutral-000">
      <img className="layout-2__cubes" src={Cubes} alt="" />
      <div className="layout-2__left">
        <div className="layout-2__left__tag border-2 border-radius-6">
          Overview
        </div>
        <div className="layout-2__left__title ff-accent fw-bold ">
          Welcome to Little Learners Academy
        </div>
      </div>
      <div className="layout-2__right fw-medium">
        A leading kinder garden school dedicated to providing a nurturing and
        stimulating environment for young learners. With a commitment to
        excellence in early education, we believe in shaping curious minds and
        building a strong foundation for a lifelong love of learning. Our
        holistic approach fosters intellectual, social, emotional, and physical
        development, ensuring that each child reaches their full potential.
      </div>
    </div>
  );
};

export default LayoutTwo;
