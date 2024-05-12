import React from "react";
import LayoutTwo from "../components/LayoutTwo";
import MissionAndVisions from "../components/MissionAndVisions";
import Histroy from "../components/Histroy";
import TeamMembers from "../components/TeamMembers";

const About = () => {
  const hero = {
    tag: " Overview",
    title: " Welcome to Little Learners Academy",
    desc: " A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.",
  };
  return (
    <div className="container_type2">
      <LayoutTwo hero={hero} />
      <MissionAndVisions />
      {/*Todo Achievments */}
      <Histroy />
      <TeamMembers />
    </div>
  );
};

export default About;
