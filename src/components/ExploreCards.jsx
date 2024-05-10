import React from "react";
import ExploreCard from "./ExploreCard";

const ExploreCards = () => {
  const explorecards = [
    {
      title: "About Us",
      desc: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
      link: "about",
    },
    {
      title: "Academics",
      desc: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
      link: "academics",
    },
    {
      title: "Student Life",
      desc: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
      link: "studentlife",
    },
    {
      title: "Admissions",
      desc: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
      link: "admissions",
    },
  ];
  return (
    <>
      <div className="explorecards">
        {explorecards.map((card, index) => (
          <ExploreCard key={index} card={card} />
        ))}
      </div>
    </>
  );
};

export default ExploreCards;
