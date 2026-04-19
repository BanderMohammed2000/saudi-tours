import IncludeCard from "./IncludeCard";
// import flight from "../../assets/icons/flight.svg";
import hotel from "../../assets/icons/hotel.svg";
import campervan from "../../assets/icons/campervan.svg";
import guide from "../../assets/icons/map-line.svg";
import flight from "../../assets/icons/earth-airplane.svg";
function TripIncludes() {
  const tripIncludes = [
    {
      title: "Guides",
      text: "2 awesome guides who know everything about tour!",
      image: guide,
    },
    {
      title: "Flights",
      text: `Routes:
      Alula ___ Riyadh
      Jeddah ___ Jazan
      `,
      image: flight,
    },
    {
      title: "Transfers",
      text: "From the airport to the hotels with reliable transport service.",
      image: campervan,
    },
    {
      title: "Hotels",
      text: "Comfortable accommodation 2 people per room (breakfasts included).",
      image: hotel,
    },
  ];
  return (
    <>
      <section id="included" className="bg-blackSoft relative">
        <div className="container ml-auto pl-6 sm:mx-auto sm:px-6 pb-9 pt-8">
          <div className="flex items-center gap-2">
            <h2 className="font-monda text-2xl sm:text-3xl lg:text-4xl xl:text-6xl uppercase text-whiteSoft text-center">
              what's included
            </h2>
            <div className="bg-whiteSoft h-0.5 flex-1 rounded-md"></div>
          </div>
        </div>
        <div className="container mx-auto px-6 relative">
          {/* خلفية شفافة */}
          {/* <div className="absolute left-0 lg:-bottom-14 px-6 w-full h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent drop-shadow-lg z-10"></div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-4 lg:absolute lg:top-2 z-20">
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
