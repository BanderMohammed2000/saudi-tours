import { useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/images/saudi-bg.jpg";
// import alulaVideo from "../../assets/videos/alula-video.mp4";
import TripList from "../ui/TripList";
import Navbar from "./Navbar";

function Header() {
  const text = "SAUDI".split("");
  const isMobile = window.innerWidth < 1024;

  const [activeVideo, setActiveVideo] = useState(null);
  const [isHover, setIsHover] = useState(false);

  const iconStyle =
    "text-whiteSoft transition-all duration-300 ease-out hover:text-oliveAccent active:text-oliveAccentDark";
  return (
    <header
      id="hero"
      className="bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {activeVideo && (
        // <video
        //   className="absolute inset-0 w-full h-full object-cover"
        //   key={activeVideo}
        //   autoPlay
        //   muted
        //   loop
        //   playsInline
        // >
        //   <source src={activeVideo} type="video/mp4" />
        // </video>

        <motion.video
          key={activeVideo}
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-110 saturate-125"
        >
          <source src={activeVideo} type="video/mp4" />
        </motion.video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>
      <Navbar activeOpacity={isHover} />
      <div className="container mx-auto px-6 pt-8 relative">
        <div className=" flex justify-between mb-20">
          {/* <h1 className="font-saira font-light uppercase text-whiteSoft text-7xl sm:text-8xl md:text-9xl ml-10 sm:ml-20 lg:ml-36 xl:scale-125 ">
            <span className="text-oliveAccent">sa</span>udi
          </h1> */}
          {/* <motion.h1
            className="font-saira font-light uppercase text-whiteSoft text-7xl sm:text-8xl md:text-9xl ml-10 sm:ml-20 lg:ml-36 xl:scale-125"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.13,
                },
              },
            }}
          >
            {text.map((char, i) => (
              <motion.span
                key={i}
                className={`inline-block ${i < 2 ? "text-oliveAccent" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1> */}

          {/* <motion.h1
            className="font-saira font-light uppercase text-whiteSoft text-7xl sm:text-8xl md:text-9xl ml-10 sm:ml-20 lg:ml-36 xl:scale-125"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {text.map((char, i) => (
              <motion.span
                key={i}
                className={`inline-block ${i < 2 ? "text-oliveAccent" : ""}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 80,
                    scale: 0.9,
                    filter: "blur(8px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1], // cubic-bezier احترافي
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1> */}

          <motion.h1
            className={`${isHover ? "opacity-40" : "opacity-100"} font-saira font-light uppercase text-whiteSoft text-7xl sm:text-8xl md:text-9xl ml-10 sm:ml-20 lg:ml-36 xl:scale-125 transition-opacity duration-300 ease-out`}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: isMobile ? 0.13 : 0.08,
                },
              },
            }}
          >
            {text.map((char, i) => (
              <motion.span
                key={i}
                className={`inline-block will-change-transform ${i < 2 ? "text-oliveAccent" : ""}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: isMobile ? 60 : 100,
                    scale: 0.95,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: isMobile ? 0.7 : 0.4,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <ul
            className={`${isHover ? "opacity-40" : "opacity-100"} hidden md:flex flex-col space-y-4 transition-opacity duration-300 ease-out`}
          >
            <li>
              <a href="#">
                <i className={`${iconStyle} fa-brands fa-facebook-f fa-lg`}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`${iconStyle} fa-brands fa-instagram fa-lg`}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`${iconStyle} fa-brands fa-x-twitter fa-lg`}></i>
              </a>
            </li>
          </ul>
        </div>
        <TripList
          setActiveVideo={setActiveVideo}
          setIsHover={setIsHover}
          isHover={isHover}
        />
      </div>
    </header>
  );
}

export default Header;
