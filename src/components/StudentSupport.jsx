import React from "react";
import LayoutOne from "../components/LayoutOne";
import { supports } from "../data/cards";
import CardOne from "./CardOne";

const StudentSupport = () => {
  const head = {
    tag: "Our Achievements",
    title: "Student Support",
    desc: "At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include",
  };
  return (
    <div>
      <LayoutOne Head={head} />
      <div className="card-1__wrapper margin-bottom-150">
        {supports.map((support, index) => (
          <CardOne
            key={index}
            title={support.title}
            descrption={support.descrption}
            img={support.img}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentSupport;
