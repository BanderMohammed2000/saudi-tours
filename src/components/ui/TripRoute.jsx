import { motion } from "framer-motion";
import TripTimeline from "./TripTimeline";

function TripRoute() {
  const aboutText = "about the tour".split("");
  const tripDescription = "font-medium leading-relaxed";
  return (
    <section id="about" className="bg-blackSoft relative">
      {/* <div className="block lg:hidden container sm:mx-auto py-4 sm:py-5 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="bg-whiteSoft h-0.5 flex-1 rounded-md"></div>
          <h2 className="font-monda text-2xl sm:text-3xl uppercase text-whiteSoft text-center">
            about the tour
          </h2>
          <div className="bg-whiteSoft h-0.5 flex-1 rounded-md"></div>
        </div>
      </div> */}
      <div className="block lg:hidden container sm:mx-auto py-4 sm:py-5 sm:px-6 overflow-hidden">
        <div className="flex items-center gap-2">
          {/* الخط الأول */}
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
            viewport={{ once: true, amount: 0.8, margin: "0px 0px -120px 0px" }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            style={{ originX: 0 }}
            className="bg-whiteSoft h-0.5 flex-1 rounded-md"
          />

          {/* النص */}
          <motion.h2
            className="font-monda text-2xl sm:text-3xl uppercase text-center whitespace-nowrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8, margin: "0px 0px -120px 0px" }}
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.9,
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {aboutText.map((char, i) => (
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

          {/* الخط الثاني */}
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
            viewport={{ once: true, amount: 0.8, margin: "0px 0px -120px 0px" }}
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
      <div className="container mx-auto px-6 lg:pt-6 pb-1 lg:pb-14">
        <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
          <div className="flex flex-col justify-between w-11/12 sm:w-3/4 lg:w-2/5">
            <div>
              <p className={`${tripDescription} text-graySoft font-sans`}>
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
        {/* <div className="flex items-center gap-2 mt-20">
          <h2 className="font-monda text-2xl sm:text-3xl xl:text-6xl uppercase text-whiteSoft text-center">
            what's included
          </h2>
          <div className="bg-whiteSoft h-0.5 flex-1 rounded-md"></div>
        </div> */}
      </div>
    </section>
  );
}

export default TripRoute;
