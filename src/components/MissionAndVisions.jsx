import React from "react";
import LayoutOne from "./LayoutOne";
import MissionAndVissionCard from "./MissionAndVissionCard";
import Mission from "../assets/Mission.svg";
import Vission from "../assets/Vission.svg";

const MissionAndVisions = () => {
  const Head = {
    tag: "Mission & Visions",
    title: "Our Mission & Visions",
    desc: "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.",
  };

  const missandviss = [
    {
      img: Mission,
      title: "Mission",
      desc: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
    },
    {
      img: Vission,
      title: "Vission",
      desc: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
    },
  ];
  return (
    <div className=" margin-bottom-150">
      <LayoutOne Head={Head} />
      <div className="missionandvission">
        {missandviss.map((item, i) => (
          <MissionAndVissionCard key={i} info={item} />
        ))}
      </div>
    </div>
  );
};

export default MissionAndVisions;
