import React from "react";
import LayoutOne from "./LayoutOne";
import ExploreCards from "./ExploreCards";

const ExploreMore = () => {
  const Head = {
    tag: "Explore More",
    title: "Navigate through our Pages",
    desc: "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school",
  };
  return (
    <div className="margin-bottom-150">
      <LayoutOne Head={Head} />
      <ExploreCards />
    </div>
  );
};

export default ExploreMore;
