import React from "react";
import LayoutTwo from "../components/LayoutTwo";
import LayoutOne from "../components/LayoutOne";
import { specialFeatures } from "../data/cards";
import CardOne from "../components/CardOne";
import Subjects from "../components/Subjects";
import Gallery from "../components/Gallery";

const Academics = () => {
  const hero = {
    tag: "Academics",
    title: "Nurturing Young Minds for Success",
    desc: "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.",
  };
  const Head = {
    tag: "Our Features",
    title: "Our Special Features",
    desc: "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!",
  };

  return (
    <div className="container_type2">
      <LayoutTwo hero={hero} />
      <LayoutOne Head={Head} />
      <div className="card-1__wrapper margin-bottom-150">
        {specialFeatures.map((card, i) => (
          <CardOne
            key={i}
            title={card.title}
            descrption={card.descrption}
            img={card.img}
          />
        ))}
      </div>
      <Subjects />
      <Gallery />
    </div>
  );
};

export default Academics;
