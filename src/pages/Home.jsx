import React from "react";
import Hero from "../components/Hero";
import HeroImg from "../assets/Hero.svg";

const Home = () => {
  return (
    <>
      <div className="container_type2">
        <Hero HeroImg={HeroImg} />
      </div>
    </>
  );
};

export default Home;
