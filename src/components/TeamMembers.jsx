import React from "react";
import LayoutOne from "./LayoutOne";
import Member1 from "../assets/member1.png";
import Member2 from "../assets/member2.png";
import Member3 from "../assets/member3.png";
import Member4 from "../assets/member4.png";
import Member5 from "../assets/member5.png";
import Member6 from "../assets/member6.png";
import Messages from "../assets/Message.svg";
import MemberProfile from "./MemberProfile";
import MissionAndVissionCard from "./MissionAndVissionCard";

const TeamMembers = () => {
  const Head = {
    tag: "Our Teachers With Experties",
    title: "Our Team Members",
    desc: "At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.",
  };
  const info = [
    {
      profilePic: Member1,
      name: "Ms. Sarah Anderson",
      qualiHead: "Qualification:Bachelor's Degree in Early Childhood Education",
      qualiBody:
        "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
    {
      profilePic: Member2,
      name: "Mr. David Roberts",
      qualiHead: "Qualification: Master's Degree in Elementary Education",
      qualiBody:
        "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
    },
    {
      profilePic: Member3,
      name: "Ms. Emily Hernandez",
      qualiHead: "Qualification: Diploma in Child Psychology",
      qualiBody:
        "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
    },
    {
      profilePic: Member4,
      name: "Mr. Michael Turner",
      qualiHead: "Qualification: Bachelor's Degree in Physical Education",
      qualiBody:
        "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
    },
    {
      profilePic: Member5,
      name: "Ms. Jessica Lee",
      qualiHead: "Qualification: Master's Degree in Special Education",
      qualiBody:
        "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
    },
    {
      profilePic: Member6,
      name: "Mr. William Parker",
      qualiHead: "Qualification: Bachelor's Degree in Fine Arts",
      qualiBody:
        "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
    },
  ];
  const members = [
    ...info.map((item) => ({
      img: Messages,
      title: <MemberProfile img={item.profilePic} title={item.name} />,
      desc: <Qualification head={item.qualiHead} body={item.qualiBody} />,
    })),
  ];

  return (
    <div className=" margin-bottom-150">
      <LayoutOne Head={Head} />
      <div className="members">
        {members.map((item, i) => (
          <MissionAndVissionCard key={i} info={item} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;

const Qualification = ({ head, body }) => {
  return (
    <div className="message border-2 border-radius-10">
      <div className="message__head fw-semi-bold">{head}</div>
      <div className="message__body">{body}</div>
    </div>
  );
};
