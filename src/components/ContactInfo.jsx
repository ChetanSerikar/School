import React from "react";
import Email from "../assets/Email.svg";
import Phone from "../assets/Phone.svg";
import Loaction from "../assets/Location.svg";
import Time from "../assets/time.svg";

const ContactInfo = () => {
  const con = [
    {
      img: Email,
      title: "hello@littlelearners.com",
    },
    {
      img: Phone,
      title: "+91 91813 23 2309",
    },
    {
      img: Loaction,
      title: "Somewhere in the World",
    },
    {
      img: Time,
      title: "Office Hours - 9am - 6 pm",
    },
  ];
  return (
    <>
      <div className="contactinfo__para fw-medium clr-neutral-600">
        We value open communication and are eager to assist you with any
        inquiries. Feel free to reach out to us through any of the following
        contact methods
      </div>
      <div className="contactinfo__items">
        {con.map((conn, index) => (
          <div
            className="contactinfo__items__item border-2 border-radius-10"
            key={index}
          >
            <img
              className="img border-2 border-radius-6 bg-primary-200"
              src={conn.img}
              alt=""
            />
            <div className="title clr-neutral-700 fw-medium">{conn.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactInfo;
