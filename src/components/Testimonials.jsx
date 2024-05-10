import React from "react";
import LayoutOne from "./LayoutOne";
import Caresoul from "./Caresoul";

const Testimonials = () => {
  const Head = {
    tag: "Their Happy Words 🤗",
    title: "Our Testimonials",
    desc: "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.",
  };
  return (
    <div className="testimonials">
      <LayoutOne Head={Head} />
      <Caresoul />
    </div>
  );
};

export default Testimonials;
