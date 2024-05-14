import HeroImg from "../assets/Hero.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__img">
        <img src={HeroImg} alt="" />
      </div>
      <>
        <div className="hero__descrption">
          <div className="hero__descrption__welcome ff-base fs-400 fw-medium clr-neutral-700">
            Welcome to Little Learners Academy
          </div>
          <div className="hero__descrption__title ff-accent fw-extra-bold clr-neutral-800">
            Where Young Minds Blossom and{" "}
            <span className=" clr-primary-800">Dreams Take Flight</span>.
          </div>
          <div className="hero__descrption__para fw-medium ff-base fs-4 fw-medium clr-neutral-600">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </div>
          <div className="hero__descrption__stats ff-base border-2 border-radius-10 box-shadow-1 bg-primary-300 clr-neutral-700">
            <div className="stat">
              <div className="fs-34 ff-base fw-extra-bold">+700</div>
              <div className=" fw-medium">Students Passed</div>
            </div>
            <div className="stat">
              <div className="fs-34 ff-base fw-extra-bold">+37</div>
              <div className=" fw-medium">Awards & Recognitions</div>
            </div>
            <div className="stat">
              <div className=" fs-34 ff-base fw-extra-bold">+15</div>
              <div className=" fw-medium">Experienced Educators</div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Hero;
