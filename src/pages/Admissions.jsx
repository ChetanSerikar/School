import React from "react";
// import LayoutOne from "../components/LayoutOne";
import LayoutTwo from "../components/LayoutTwo";
import AdmissionProcess from "../components/AdmissionProcess";
import FeeStructure from "../components/FeeStructure";

const Admissions = () => {
  const hero = {
    tag: "Admission",
    title: "Join Our Family of Young Learners",
    desc: "At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school",
  };
  return (
    <div className=" container_type2">
      <LayoutTwo hero={hero} />
      <AdmissionProcess />
      {/* <FeeStructure /> */}
    </div>
  );
};

export default Admissions;
