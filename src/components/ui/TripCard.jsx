import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import play from "../../assets/icons/play-broken.svg";
const cardBase =
  "group/card bg-cover bg-no-repeat bg-center w-full sm:w-[105px] h-full md:h-44 rounded overflow-hidden relative \
   transition-transform transition-opacity transition-shadow duration-300 ease-out \
   group-has-[.group\\/card:hover]:opacity-40 hover:!opacity-100 \
   lg:hover:-translate-y-5 lg:hover:scale-105 hover:shadow-xl \
   hover:border-2 hover:border-oliveAccent hover:lg:border-0";
const titleStyle =
  "font-saira font-medium tracking-tight sm:tracking-normal md:text-lg px-2 pb-0.5 absolute left-0 bottom-0 text-white select-none";
const imgStyle =
  "lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 will-change-transform \
   transition-all duration-300 ease-out \
   group-hover/card:scale-75 \
   group-hover/card:-rotate-90";
function TripCard({
  title,
  image,
  onMouseEnter,
  onMouseLeave,
  isActive,
  index,
}) {
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setShowIcon(true);
      },
      2000 + index * 250,
    );

    return () => clearTimeout(timeout);
  }, [index]);

  const words = title.split(" ");
  return (
    <>
      <div
        className={cardBase}
        style={{ backgroundImage: `url(${image})` }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* <img
          src={play}
          alt="Play Icon"
          className={`${isActive ? "opacity-0" : "opacity-70"} ${imgStyle}`}
        /> */}

        {/* <motion.img
          src={play}
          alt="Play Icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 0 : 0.7 }}
          transition={{
            delay: 2 + index * 0.25,
            duration: 0.8,
            ease: "easeOut",
          }}
          className={`${imgStyle} lg:hidden`}
        /> */}

        <motion.img
          src={play}
          alt="Play Icon"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isActive ? 0 : showIcon ? 0.7 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={imgStyle}
        />

        {/* <h2 className={titleStyle}>{title}</h2> */}
        <motion.h2
          className={titleStyle}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.8,
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {/* Mobile Animation */}
          <span className="lg:hidden">
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block whitespace-nowrap mr-1"
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    className="inline-block"
                    variants={{
                      hidden: {
                        opacity: 0,
                      },
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 0.35,
                          ease: "easeOut",
                        },
                      },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>

          {/* Desktop */}
          <span className="hidden lg:inline">{title}</span>
        </motion.h2>
      </div>
    </>
  );
}

export default TripCard;
