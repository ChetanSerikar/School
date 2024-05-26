import LayoutTwo from "../components/LayoutTwo";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const hero = {
    tag: "Contact Us",
    title: "Feel Free To Connect With Us",
    desc: <ContactInfo />,
  };
  return (
    <div className=" container_type2">
      <LayoutTwo hero={hero} />
      <ContactForm />
    </div>
  );
};

export default Contact;
