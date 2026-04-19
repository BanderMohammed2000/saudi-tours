import saudiMan from "../../assets/images/saudi-man.png";
import boulevard from "../../assets/images/places/boulevard-riyadh.jpg";
import alula from "../../assets/images/places/alula.jpg";
import farasan from "../../assets/images/places/farasan-islands.jpg";
import corniche from "../../assets/images/places/jeddah-corniche.jpg";
import fifa from "../../assets/images/places/fifa-mountains.jpg";
import Button from "./Button";
import TripCard from "./TripCard";

function TripList() {
  const trips = [
    { title: "Boulevard Riyadh", image: boulevard },
    { title: "Alula", image: alula },
    { title: "Farasan Islands", image: farasan },
    { title: "Jeddah Corniche", image: corniche },
    { title: "Fifa Mountains", image: fifa },
  ];

  return (
    <>
      <div className="flex md:items-center justify-between gap-x-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-x-4 sm:gap-y-2 w-[85%] sm:w-auto">
          {trips.map((trip, index) => (
            <TripCard key={index} {...trip} />
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
