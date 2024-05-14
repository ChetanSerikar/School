import React from "react";
import LayoutOne from "./LayoutOne";
import { ExtraInfo } from "../data/cards";
import CardOne from "./CardOne";

const ExtracurricularActivities = () => {
  const head = {
    tag: "Our Features",
    title: "Extracurricular Activities",
    desc: "At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including",
  };
  console.log(ExtraInfo);
  return (
    <div className=" margin-bottom-150">
      <LayoutOne Head={head} />
      <div className="card-1__wrapper margin-bottom-150">
        {ExtraInfo.map((card, index) => (
          <CardOne
            key={index}
            title={card.title}
            descrption={card.descrption}
            img={card.img}
          />
        ))}
      </div>
    </div>
  );
};

export default ExtracurricularActivities;
