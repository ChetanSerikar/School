import React from "react";
import LayoutOne from "./LayoutOne";
import Accordian from "./Accordian";

const FrequentlyAskedQuestions = () => {
  const Head = {
    tag: "Solutions For The Doubts",
    title: "Frequently Asked Questions",
    desc: "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.",
  };
  return (
    <div className=" margin-bottom-150">
      <LayoutOne Head={Head} />
      <Accordian />
    </div>
  );
};

export default FrequentlyAskedQuestions;
