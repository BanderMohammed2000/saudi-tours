function Button({ children, variant = "solid", className = "" }) {
  const base = "border transition";
  const variants = {
    solid:
      "text-black bg-white rounded h-8 sm:w-44 xl:w-52 text-lg font-medium",
    outline: "rounded-[50px] py-[2px] px-5",
  };
  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
