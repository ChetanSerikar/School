import React from "react";
import { useState } from "react";
import Plus from "../assets/Plus.svg";
import Minus from "../assets/Minus.svg";
import { useRef } from "react";

const Accordian = () => {
  const [currentOpen, setCurrentOpen] = useState(null);
  const content = useRef(null);
  let accordian = [
    {
      head: "What extracurricular activities are available for students?",
      body: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      head: "Is there a uniform policy for students?",
      body: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      head: "How do I apply for admission to Little Learners Academy?",
      body: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      head: "How do you handle discipline and behavior management?",
      body: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      head: "What is the teacher-to-student ratio at Little Learners Academy?",
      body: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      head: "How do you handle food allergies and dietary restrictions?",
      body: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      head: "What are the school hours at Little Learners Academy?",
      body: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      head: "What are the school hours at Little Learners Academy?",
      body: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
  ];
  const handleClick = (i) => {
    if (currentOpen == i) {
      setCurrentOpen(null);
      return;
    }
    setCurrentOpen(i);
  };

  // console.log("cc", content.current.clientHeight);
  return (
    <div ref={content} className="accordian">
      {accordian.map((item, index) => (
        <div
          key={index}
          className={`accord border-2 border-radius-10 ${
            currentOpen == index ? "bg-neutral-000" : "bg-primary-300"
          }`}
        >
          <div
            className={`accord__head fw-semi-bold  clr-neutral-700 ${
              currentOpen == index ? "underline" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {item.head}
            <span className="plusminus border-2 border-radius-4 bg-primary-100 ">
              <img src={currentOpen == index ? Minus : Plus} alt="" />
            </span>
          </div>
          {
            <div
              className={`accord__body ff-base clr-neutral-600 fw-medium fw
              ${currentOpen == index ? "accord__body__show" : ""}
               `}
            >
              {item.body}
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default Accordian;
