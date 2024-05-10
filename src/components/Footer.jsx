import React from "react";
import FooterLogo from "../assets/FooterLogo.svg";
import Email from "../assets/Email.svg";
import Phone from "../assets/Phone.svg";
import Location from "../assets/Location.svg";
import Facebook from "../assets/facbook.svg";
import Twitter from "../assets/Twitter.svg";
import LinkedIn from "../assets/LinkedIn.svg";
const Footer = () => {
  const contacts = [
    {
      img: Email,
      social: "xyz@email.com",
    },
    {
      img: Phone,
      social: "+91 9983456678",
    },
    {
      img: Location,
      social: "Somewere In World",
    },
  ];

  const pages = [
    {
      title: "Home",
      sections: ["Featues", "Our Testimonials", "FAQ's"],
    },
    {
      title: "About Us",
      sections: ["Featues", "Our Testimonials", "FAQ's"],
    },
    {
      title: "Academics",
      sections: ["Featues", "Our Testimonials", "FAQ's"],
    },
    {
      title: "Contact Us",
      sections: ["Featues", "Our Testimonials", "FAQ's"],
    },
  ];
  return (
    <div className="footer border-2 box-shadow-2 border-radius-10 bg-neutral-000">
      <div className="footer__first">
        <div className="footer__first__left">
          <img className="left_logo" src={FooterLogo} alt="" />
          <div className="desc">
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </div>
          {contacts.map((item, index) => (
            <div className="contacts fw-medium  ff-base" key={index}>
              <span>
                <img
                  className="contact border-2 border-radius-6 bg-primary-100"
                  src={item.img}
                  alt=""
                />
              </span>
              {item.social}
            </div>
          ))}
        </div>
        <div className="footer__first__right">
          {pages.map((item, i) => (
            <div key={i}>
              <div className=" fw-semi-bold right__page">{item.title}</div>
              {item.sections.map((soc, index) => (
                <div className="right__sections" key={index}>
                  {soc}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__second">
        <div className="policies">
          <div className="policy">Privacy Policy</div>
          <div className="policy">Cookie Policy</div>
          <div className="policy">Terms of Service</div>
        </div>
        <div className="socials">
          <img
            className="social bg-primary-400 border-2 border-radius-6"
            src={Facebook}
            alt=""
          />
          <img
            className="social bg-primary-400 border-2 border-radius-6"
            src={Twitter}
            alt=""
          />
          <img
            className="social bg-primary-400 border-2 border-radius-6"
            src={LinkedIn}
            alt=""
          />
        </div>
      </div>
      <div className=" copyright text-center fw-medium ff-base">
        Copyright © [2024] Little Learners Academy. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
