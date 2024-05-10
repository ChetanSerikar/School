import Hero from "../components/Hero";
import HeroImg from "../assets/Hero.svg";
import Benifits from "../components/Benifits";
import Testimonials from "../components/Testimonials";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import ExploreMore from "../components/ExploreMore";

const Home = () => {
  return (
    <>
      <div className="container_type2">
        <Hero HeroImg={HeroImg} />
        <Benifits />
        <Testimonials />
        <FrequentlyAskedQuestions />
        <ExploreMore />
      </div>
    </>
  );
};

export default Home;
