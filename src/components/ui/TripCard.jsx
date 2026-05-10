import play from "../../assets/icons/play-broken.svg";
const cardBase =
  "group/card bg-cover bg-no-repeat bg-center w-full sm:w-[105px] h-full md:h-44 rounded overflow-hidden relative \
   transition-transform transition-opacity transition-shadow duration-300 ease-out \
   group-hover:opacity-40 hover:!opacity-100 \
   lg:hover:-translate-y-5 hover:scale-105 hover:shadow-xl \
   hover:border hover:border-oliveAccent hover:lg:border-0";
const titleStyle =
  "font-saira font-medium tracking-tight sm:tracking-normal md:text-lg px-2 pb-0.5 absolute left-0 bottom-0 text-white";
const imgStyle =
  "lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 will-change-transform\
    transition-all duration-300 ease-out \
   group-hover/card:scale-75 \
   group-hover/card:-rotate-90";
function TripCard({ title, image, onMouseEnter, onMouseLeave, isActive }) {
  return (
    <>
      <div
        className={cardBase}
        style={{ backgroundImage: `url(${image})` }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img
          src={play}
          alt="Play Icon"
          className={`${isActive ? "opacity-0" : "opacity-70"} ${imgStyle}`}
        />
        <h2 className={titleStyle}>{title}</h2>
      </div>
    </>
  );
}

export default TripCard;
