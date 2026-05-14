import { motion, useAnimation, useInView } from "framer-motion";
import IncludeCard from "./IncludeCard";
// import flight from "../../assets/icons/flight.svg";
import hotel from "../../assets/icons/hotel.svg";
import hotelWhite from "../../assets/icons/hotel-white.svg";
import campervan from "../../assets/icons/campervan.svg";
import campervanWhite from "../../assets/icons/campervan-white.svg";
import guide from "../../assets/icons/map-line.svg";
import guideWhite from "../../assets/icons/map-line-white.svg";
import flight from "../../assets/icons/earth-airplane.svg";
import flightWhite from "../../assets/icons/earth-airplane-white.svg";
function TripIncludes() {
  const tripIncludes = [
    {
      title: "Guides",
      text: "2 awesome guides who know everything about tour!",
      image: guide,
      image2: guideWhite,
    },
    {
      title: "Flights",
      text: `Routes:
      Alula ___ Riyadh
      Jeddah ___ Jazan
      `,
      image: flight,
      image2: flightWhite,
    },
    {
      title: "Transfers",
      text: "From the airport to the hotels with reliable transport service.",
      image: campervan,
      image2: campervanWhite,
    },
    {
      title: "Hotels",
      text: "Comfortable accommodation 2 people per room (breakfasts included).",
      image: hotel,
      image2: hotelWhite,
    },
  ];

  const includedText = "what's included".split("");

  return (
    <>
      <section id="included" className="bg-blackSoft relative">
        <div className="container ml-auto pl-6 sm:mx-auto sm:px-6 pb-9 pt-8">
          {/* <div className="flex items-center gap-2">
            <h2 className="font-monda text-2xl sm:text-3xl lg:text-4xl xl:text-6xl uppercase text-whiteSoft text-center">
              what's included
            </h2>
            <div className="bg-whiteSoft h-0.5 flex-1 rounded-md"></div>
          </div> */}

          <div className="flex items-center gap-2">
            {/* النص */}
            <motion.h2
              className="font-monda text-2xl sm:text-3xl lg:text-4xl xl:text-6xl uppercase text-whiteSoft text-center whitespace-nowrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={{
                visible: {
                  transition: {
                    delayChildren: 0.9,
                    staggerChildren: 0.06,
                  },
                },
              }}
            >
              {includedText.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={{
                    hidden: {
                      opacity: 0,
                      color: "#9AA23D",
                    },
                    visible: {
                      opacity: 1,
                      color: ["#9AA23D", "#9AA23D", "#FFFFFFE6"],
                      transition: {
                        duration: 0.65,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>

            {/* الخط */}
            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
                backgroundColor: "#9AA23D",
              }}
              whileInView={{
                scaleX: 1,
                opacity: 1,
                backgroundColor: "#FFFFFFE6",
              }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                delay: 2.3,
                duration: 0.45,
                ease: "easeOut",
              }}
              style={{ originX: 0 }}
              className="bg-whiteSoft h-0.5 flex-1 rounded-md"
            />
          </div>
        </div>
        <div className="container mx-auto relative">
          {/* خلفية شفافة */}
          {/* <div className="absolute left-0 lg:-bottom-14 px-6 w-full h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent drop-shadow-lg z-10"></div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 gap-5 sm:gap-4 lg:absolute lg:top-2 z-20">
            {tripIncludes.map((include, index) => (
              <IncludeCard key={index} {...include} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default TripIncludes;
