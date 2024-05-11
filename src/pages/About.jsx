import React from "react";
import LayoutTwo from "../components/LayoutTwo";
import MissionAndVisions from "../components/MissionAndVisions";
import Histroy from "../components/Histroy";
import TeamMembers from "../components/TeamMembers";

const About = () => {
  return (
    <div className="container_type2">
      <LayoutTwo />
      <MissionAndVisions />
      {/*Todo Achievments */}
      <Histroy />
      <TeamMembers />
    </div>
  );
};

export default About;
