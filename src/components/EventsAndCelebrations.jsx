import React from "react";
import LayoutOne from "./LayoutOne";
import { Events } from "../data/cards";
import CardFive from "./CardFive";

const EventsAndCelebrations = () => {
  const Head = {
    tag: "Our Features",
    title: "Events & Celebrations",
    desc: "At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include",
  };
  return (
    <div className=" margin-bottom-150">
      <LayoutOne Head={Head} />
      <div className="card-5__wrapper">
        {Events.map((event, i) => (
          <CardFive key={i} info={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsAndCelebrations;
