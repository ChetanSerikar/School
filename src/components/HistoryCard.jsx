import React from "react";
import YearHistory from "./YearHistory";

const HistoryCard = () => {
  const history = [
    {
      year: "2023",
      title: " Resilience and Future Horizons",
      desc: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
    },
    {
      year: "2017",
      title: "Innovation and Technology",
      desc: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
    },
    {
      year: "2012",
      title: "Expansion and Recognition",
      desc: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
    },
    {
      year: "2005",
      title: "Inception and Growth",
      desc: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
    },
  ];
  return (
    <div className="historycard border-2 border-radius-10 box-shadow-2 bg-neutral-000">
      {history.map((item, i) => (
        <YearHistory key={i} info={item} />
      ))}
    </div>
  );
};

export default HistoryCard;
