import React from "react";
import LayoutOne from "./LayoutOne";
import CardSix from "./CardSix";

import {
  ClassRoomsImg,
  LibraryImg,
  ScienceLabImg,
  ComputerLabImg,
  NatureImg,
} from "../data/Rooms";
import { useState } from "react";

const Gallery = () => {
  const [currentRoom, setCurrentRoom] = useState("All");
  const Head = {
    tag: "Our Gallery",
    title: "Our Rooms Gallery",
    desc: "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.",
  };
  const rooms = [
    "All",
    "Classroom",
    "Library",
    "Science Lab",
    "Computer Lab",
    "Garden and Nature Area",
  ];

  const roomsCard = [
    {
      images: [...ClassRoomsImg],
      title: "Classroom",
      desc: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    },
    {
      images: [...LibraryImg],
      title: "Library",
      desc: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    },
    {
      images: [...ScienceLabImg],
      title: "Science Lab",
      desc: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    },
    {
      images: [...ComputerLabImg],
      title: "Computer Lab",
      desc: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
    },
    {
      images: [...NatureImg],
      title: "Garden and Nature Area",
      desc: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    },
  ];
  const handleClick = (str) => {
    if (str == currentRoom || str == "All") {
      setCurrentRoom("All");
      return;
    }
    setCurrentRoom(str);
  };

  return (
    <div className=" margin-bottom-150">
      <LayoutOne Head={Head} />
      {/* Rooms */}
      <div className="rooms">
        <div className="rooms__filters">
          {rooms.map((room, index) => (
            <div
              className={` rooms__filters__filter border-2 border-radius-6 ${
                currentRoom == room
                  ? "rooms__filters__active"
                  : "rooms__filters__inactive"
              } `}
              key={index}
              onClick={() => handleClick(room)}
            >
              {room}
            </div>
          ))}
        </div>
        {roomsCard.map((room, index) =>
          room.title == currentRoom || currentRoom == "All" ? (
            <CardSix key={index} info={room} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Gallery;
