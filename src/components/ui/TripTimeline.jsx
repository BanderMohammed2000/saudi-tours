import boulevard from "../../assets/images/trip-route/boulevard.jpg";
import boulevard2 from "../../assets/images/trip-route/boulevard-2.jpg";
import fifa from "../../assets/images/trip-route/fifa-mountains.jpg";
import farasan from "../../assets/images/trip-route/farasan-islands.jpg";
import farasan2 from "../../assets/images/trip-route/farasan-islands-2.webp";
import farasan3 from "../../assets/images/trip-route/farasan-islands-3.jpg";
import alula from "../../assets/images/trip-route/alula.jpg";
import corniche from "../../assets/images/trip-route/corniche.jpg";
import corniche2 from "../../assets/images/trip-route/corniche-2.jpg";

const tripMeta = "text-sm text-graySoft";
const tripTitle = "text-sm text-grayLight font-extrabold";

function TripTimeline() {
  return (
    <>
      <div className="flex justify-between mx-auto lg:mx-0 w-full md:w-3/4 lg:w-1/2 xl:w-2/5">
        <div className="flex flex-col justify-between">
          {/* Boulevard img */}
          <div className="relative top-12 sm:top-8 left-2">
            <img
              className="w-24 h-24 bg-center bg-cover bg-no-repeat rounded"
              src={boulevard2}
              alt="boulevard riyadh"
            />
            <img
              className="absolute top-1/2 left-1/2 w-20 h-20 bg-center bg-cover bg-no-repeat rounded drop-shadow-lg"
              src={boulevard}
              alt="boulevard riyadh"
            />
          </div>
          {/* Fifa Mountains img */}
          <img
            className="w-20 h-20 bg-center bg-cover bg-no-repeat rounded relative top-10 sm:left-6"
            src={fifa}
            alt="Fifa Mountains"
          />
          {/* Farasan Islands img*/}
          <div className="relative top-4 left-2">
            <img
              className="invisible sm:visible w-24 h-24 bg-center bg-cover bg-no-repeat rounded"
              src={farasan}
              alt="Farasan Islands"
            />
            <img
              className="absolute bottom-1/2 sm:top-1/2 left-1/4 sm:left-1/2 w-20 h-20 bg-center bg-cover bg-no-repeat rounded drop-shadow-lg"
              src={farasan2}
              alt="Farasan Islands"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-0.5">
          <div className="flex flex-col relative items-center space-y-0.5">
            <div className="absolute right-1 w-20 font-monda">
              <p className={tripMeta}>Days 1-3</p>
              <p className={tripTitle}>Alula</p>
            </div>
            <div className="bg-grayMuted w-4 h-4 rounded-[50%]"></div>
            <div className="bg-whiteSoft w-px h-24 rounded-md"></div>
          </div>
          <div className="flex flex-col relative items-center space-y-0.5">
            <div className="absolute left-6 w-20 font-monda">
              <p className={tripMeta}>Days 4-6</p>
              <p className={tripTitle}>Riyadh</p>
            </div>
            <div className="bg-grayMuted w-4 h-4 rounded-[50%]"></div>
            <div className="bg-whiteSoft w-px h-24 rounded-md"></div>
          </div>
          <div className="flex flex-col relative items-center space-y-0.5">
            <div className="absolute right-1 w-20 font-monda">
              <p className={tripMeta}>Days 7-8</p>
              <p className={tripTitle}>Jeddah</p>
            </div>
            <div className="bg-grayMuted w-4 h-4 rounded-[50%]"></div>
            <div className="bg-whiteSoft w-px h-24 rounded-md"></div>
          </div>
          <div className="flex flex-col relative items-center space-y-0.5">
            <div></div>
            <div className="absolute left-6 w-20 font-monda">
              <p className={tripMeta}>Days 9-10</p>
              <p className={tripTitle}>Jazan (Fifa Mountains)</p>
            </div>
            <div className="bg-grayMuted w-4 h-4 rounded-[50%]"></div>
            <div className="bg-whiteSoft w-px h-24 rounded-md"></div>
          </div>
          <div className="flex flex-col relative items-center space-y-0.5">
            <div className="absolute right-5 w-20 font-monda">
              <p className={tripMeta}>Days 11-12</p>
              <p className={tripTitle}>Farasan Islands</p>
            </div>
            <div className="bg-grayMuted w-4 h-4 rounded-[50%]"></div>
            {/* <div className="bg-whiteSoft w-0.5 h-24 rounded-md"></div> */}
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          {/* Alula img*/}
          <img
            className="w-20 h-20 bg-center bg-cover bg-no-repeat rounded relative right-14"
            src={alula}
            alt="Alula"
          />
          {/* Jeddah Corniche img*/}
          <div className="relative bottom-2">
            <img
              className="w-24 h-24 bg-center bg-cover bg-no-repeat rounded"
              src={corniche}
              alt="Jeddah Corniche"
            />
            <img
              className="absolute top-1/2 right-1/2 w-20 h-20 bg-center bg-cover bg-no-repeat rounded drop-shadow-lg"
              src={corniche2}
              alt="Jeddah Corniche"
            />
          </div>
          {/* Farasan Islands img */}
          <img
            className="w-20 h-20 bg-center bg-cover bg-no-repeat rounded relative right-14 top-5 sm:top-4"
            src={farasan3}
            alt="Farasan Islands"
          />
        </div>
      </div>
    </>
  );
}

export default TripTimeline;
