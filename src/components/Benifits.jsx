import BenifitCards from "./BenifitCards";
import LayoutOne from "./LayoutOne";

const Benifits = () => {
  const Head = {
    tag: "Children Deserve Bright Future",
    title: " Our Benefits",
    desc: " With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future",
  };
  return (
    <>
      <LayoutOne Head={Head} />
      <BenifitCards />
    </>
  );
};

export default Benifits;
