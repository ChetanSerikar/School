import React from "react";
import Cards from "./Cards";

const Benifits = () => {
  return (
    <div className="benifits">
      <div className="benifits__tag ff-base fw-medium text-center border-2 border-radius-6">
        Children Deserve Bright Future
      </div>
      <div className="benifits__title ff-accent fw-extra-bold text-center">
        Our Benefits
      </div>
      <div className="benifits__para ff-base fw-medium text-center">
        With a dedicated team of experienced educators, state-of-the-art
        facilities, and a comprehensive curriculum, we aim to lay a strong
        foundation for your child's future.
      </div>
      <Cards />
    </div>
  );
};

export default Benifits;
