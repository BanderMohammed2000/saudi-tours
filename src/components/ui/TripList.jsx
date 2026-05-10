import { useState, useRef } from "react";

import saudiMan from "../../assets/images/saudi-man.png";
import boulevard from "../../assets/images/places/boulevard-riyadh.jpg";
import alula from "../../assets/images/places/alula.jpg";
import farasan from "../../assets/images/places/farasan-islands.jpg";
import corniche from "../../assets/images/places/jeddah-corniche.jpg";
import fifa from "../../assets/images/places/fifa-mountains.jpg";
import alulaVideo from "../../assets/videos/alula-video.mp4";
import boulevardVideo from "../../assets/videos/boulevard-riyadh-video.mp4";
import farasanVideo from "../../assets/videos/farasan-islands-video.mp4";
import cornicheVideo from "../../assets/videos/jeddah-corniche-video.mp4";
import fifaVideo from "../../assets/videos/fifa-mountains-video.mp4";

import Button from "./Button";
import TripCard from "./TripCard";

function TripList({ setActiveVideo, setIsHover }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const trips = [
    { title: "Boulevard Riyadh", image: boulevard, video: boulevardVideo },
    { title: "Alula", image: alula, video: alulaVideo },
    { title: "Farasan Islands", image: farasan, video: farasanVideo },
    { title: "Jeddah Corniche", image: corniche, video: cornicheVideo },
    { title: "Fifa Mountains", image: fifa, video: fifaVideo },
  ];

  const hoverTimeout = useRef(null);

  const handleMouseEnter = (video) => {
    clearTimeout(hoverTimeout.current);

    hoverTimeout.current = setTimeout(() => {
      setActiveVideo(video);
      setIsHover(true);
    }, 600);
  };

  // const handleMouseLeave = () => {
  //   clearTimeout(hoverTimeout.current);
  //   setActiveVideo(null);
  // };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);

    hoverTimeout.current = setTimeout(() => {
      setActiveVideo(null);
      setIsHover(false);
    }, 200);
  };

  return (
    <>
      <div className="flex md:items-center justify-between gap-x-4">
        {/* w-[85%] */}
        {/* w-[75%] */}
        <div className="group grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-x-4 sm:gap-y-2 w-[70%] sm:w-auto">
          {trips.map((trip, index) => (
            <TripCard
              key={index}
              {...trip}
              onMouseEnter={() => {
                handleMouseEnter(trip.video);
                setHoveredCard(index);
              }}
              onMouseLeave={() => {
                handleMouseLeave();
                setHoveredCard(null);
              }}
              isActive={hoveredCard === index}
            />
          ))}
        </div>
        <div className="flex items-end md:items-center justify-between relative">
          <img
            className="h-[400px] sm:h-[600px] md:h-[400px] lg:h-[500px]  md:left-5 relative z-10"
            src={saudiMan}
            alt="saudi man"
          />
          <Button className="absolute right-3 sm:w-44 xl:w-52 w-40 md:static z-20 md:z-0">
            Book
          </Button>
        </div>
      </div>
      {/* خلفية شفافة */}
      <div className="flex items-center gap-4 absolute left-0 -bottom-2 lg:bottom-0 px-6 w-full h-4 lg:h-14 bg-gradient-to-t from-black/70 via-black/30 to-transparent drop-shadow-lg z-10">
        <div className="hidden lg:block bg-whiteSoft  h-0.5 flex-1 rounded-md"></div>
        <h2 className="hidden lg:block font-monda text-4xl xl:text-6xl uppercase text-whiteSoft text-center">
          about the tour
        </h2>
        <div className="hidden lg:block bg-whiteSoft h-0.5 flex-1 rounded-md"></div>
      </div>
    </>
  );
}

export default TripList;
