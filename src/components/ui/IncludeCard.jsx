function IncludeCard({ title, text, image, image2 }) {
  return (
    <>
      <div className="h-52 w-3/4 sm:w-full mx-auto sm:max-w-none px-6 py-7 border-2 border-whiteSoft rounded-3xl relative overflow-hidden transition-colors duration-300 ease-out hover:bg-white/15 hover:backdrop-blur-sm">
        <img
          className="opacity-30 lg:opacity-0 absolute -right-16 -top-2/4 translate-y-1/2 w-1/2 h-full"
          src={image2}
          alt="title"
        />
        <div className="flex items-center pb-3 space-x-2">
          <img className="w-9 h-9" src={image} alt={title} />
          <h3 className="font-saira text-grayLight font-semibold text-lg">
            {title}
          </h3>
        </div>
        <p className="font-monda text-graySoft text-graySoft font-normal leading-relaxed whitespace-pre-line">
          {text}
        </p>
      </div>
    </>
  );
}

export default IncludeCard;
