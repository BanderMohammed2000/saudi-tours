const cardBase =
  "bg-cover bg-no-repeat bg-center w-full sm:w-[105px] h-full md:h-44 rounded overflow-hidden relative";
const titleStyle =
  "font-saira font-medium tracking-tight sm:tracking-normal md:text-lg px-2 pb-0.5 absolute left-0 bottom-0 text-white";
function TripCard({ title, image }) {
  return (
    <>
      <div className={cardBase} style={{ backgroundImage: `url(${image})` }}>
        <h2 className={titleStyle}>{title}</h2>
      </div>
    </>
  );
}

export default TripCard;
