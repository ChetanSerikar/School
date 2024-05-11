import React from "react";
import LayoutOne from "./LayoutOne";
import HistoryCard from "./HistoryCard";
import TeamMembers from "./TeamMembers";

const Histroy = () => {
  const Head = {
    tag: "Our Progressive Journey",
    title: "Our History",
    desc: "Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment",
  };
  return (
    <div className=" margin-bottom-150">
      <LayoutOne Head={Head} />
      <HistoryCard />
    </div>
  );
};

export default Histroy;
