import React from "react";

import LayoutTwo from "../components/LayoutTwo";
import ExtracurricularActivities from "../components/ExtracurricularActivities";
import EventsAndCelebrations from "../components/EventsAndCelebrations";
import StudentSupport from "../components/StudentSupport";

const StudentLife = () => {
  const hero = {
    tag: "Enriching Student Life",
    title: "Embracing Learning with Discovery and Joy",
    desc: "Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development.",
  };
  return (
    <div className=" container_type2">
      <LayoutTwo hero={hero} />
      <ExtracurricularActivities />
      <EventsAndCelebrations />
      <StudentSupport />
    </div>
  );
};

export default StudentLife;
