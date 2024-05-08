import Hero from "../components/Hero";
import HeroImg from "../assets/Hero.svg";
import Benifits from "../components/Benifits";

const Home = () => {
  return (
    <>
      <div className="container_type2">
        <Hero HeroImg={HeroImg} />
        <Benifits />
      </div>
    </>
  );
};

export default Home;
