import TripTimeline from "./TripTimeline";

function TripRoute() {
  const tripDescription = "font-medium leading-relaxed";
  return (
    <section id="about" className="bg-[#040404] relative">
      <div className="block lg:hidden sm:container sm:mx-auto py-4 sm:py-5 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="bg-whiteSoft h-0.5 flex-1 rounded-md"></div>
          <h2 className="font-monda text-2xl sm:text-3xl xl:text-5xl uppercase text-whiteSoft text-center">
            about the tour
          </h2>
          <div className="bg-whiteSoft h-0.5 flex-1 rounded-md"></div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:pt-6 pb-14">
        <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
          <div className="flex flex-col justify-between w-11/12 sm:w-3/4 lg:w-2/5">
            <div>
              <p className={`${tripDescription} text-graySoft`}>
                This journey across Saudi Arabia blends culture, nature, and
                modern experiences. Begin in AlUla, then explore Riyadh,
                including the vibrant Boulevard. Continue to Jeddah along the
                Red Sea, where you can enjoy the scenic Jeddah Corniche.
                Discover the lush Faifa Mountains in Jazan, and end your trip in
                the serene Farasan Islands, where relaxation meets natural
                beauty.
              </p>
              <p className={`${tripDescription} text-oliveAccent`}>
                Enjoy every moment of the journey
              </p>
            </div>
            <div className="hidden lg:block">
              <p className={`${tripDescription} text-graySoft`}>
                You don’t have to worry about planning your itinerary,
                transportation, or meals. Everything is carefully arranged to
                ensure a smooth and enjoyable experience, allowing you to fully
                relax and focus on discovering the beauty of Saudi Arabia.
              </p>
              <p className={`${tripDescription} text-oliveAccent`}>
                Stress-free travel experience awaits you
              </p>
            </div>
          </div>
          <TripTimeline />
        </div>
        <div className="lg:hidden mt-20 w-11/12 sm:w-3/4 ml-auto text-right">
          <p className={`${tripDescription} text-graySoft`}>
            You don’t have to worry about planning your itinerary,
            transportation, or meals. Everything is carefully arranged to ensure
            a smooth and enjoyable experience, allowing you to fully relax and
            focus on discovering the beauty of Saudi Arabia.
          </p>
          <p className={`${tripDescription} text-oliveAccent`}>
            Stress-free travel experience awaits you
          </p>
        </div>
      </div>
    </section>
  );
}

export default TripRoute;
