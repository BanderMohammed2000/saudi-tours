function IncludeCard({ title, text, image }) {
  return (
    // h-52
    <>
      <div className="h-52 w-3/4 sm:w-full mx-auto sm:max-w-none px-6 py-7 border-2 border-whiteSoft rounded-3xl">
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
