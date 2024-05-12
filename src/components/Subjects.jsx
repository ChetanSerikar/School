import React from "react";
import LayoutOne from "./LayoutOne";
import CardFive from "./CardFive";
import { subjects } from "../data/cards";

const Subjects = () => {
  const features = {
    tag: "Our Features",
    title: "What Students Learn",
    desc: "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include",
  };
  return (
    <div className=" margin-bottom-150">
      <LayoutOne Head={features} />
      <div className="card-5__wrapper">
        {subjects.map((sub, i) => (
          <CardFive key={i} info={sub} />
        ))}
      </div>
    </div>
  );
};

export default Subjects;
