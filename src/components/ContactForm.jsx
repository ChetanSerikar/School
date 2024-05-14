import React from "react";
import LayoutOne from "./LayoutOne";
import Twitter from "../assets/Twitter.svg";
import Facebook from "../assets/facbook.svg";
import LinkedIn from "../assets/LinkedIn.svg";

const ContactForm = () => {
  const inputs = [
    {
      label: "Parent Name",
      placeholder: "Enter Parent Name",
    },
    {
      label: "Email Address",
      placeholder: "Enter Email Address",
    },
    {
      label: "Phone Number",
      placeholder: "Enter Phone Number",
    },
    {
      label: "Student Name",
      placeholder: "Enter Student Name",
    },
    {
      label: "Student Age",
      placeholder: "Enter Student Age",
    },
    {
      label: "Program of Intrest",
      placeholder: "Enter Program of Intrest",
    },
  ];
  const head = {
    tag: "Contact Form",
    title: "Student Information",
    desc: "If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs",
  };
  return (
    <div className=" margin-bottom-150">
      <LayoutOne Head={head} />
      <div className="contactform__wrapper  bg-neutral-000 border-2 border-radius-10 box-shadow-2">
        <div className="contactform__socials">
          <img
            className="contactform__socials__social bg-primary-400 border-2 border-radius-6"
            src={Twitter}
            alt=""
          />
          <img
            className="contactform__socials__social bg-primary-400 border-2 border-radius-6"
            src={Facebook}
            alt=""
          />
          <img
            className="contactform__socials__social bg-primary-400 border-2 border-radius-6"
            src={LinkedIn}
            alt=""
          />
        </div>
        <div className=" contactform">
          {inputs.map((input, index) => (
            <div key={index} className="contactform__feild">
              <div className="contactform__feild__label fw-semi-bold clr-neutral-500">
                {input.label}
              </div>
              <input
                className="contactform__feild__input border-2 border-radius-6 clr-neutral-900 bg-primary-100"
                type="text"
                placeholder={input.placeholder}
                name=""
                id=""
              />
            </div>
          ))}
        </div>
        <button className="contactform__submit fw-medium bg-primary-600 border-2 border-radius-10">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
