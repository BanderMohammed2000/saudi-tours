function Button({
  children,
  variant = "solid",
  type = "button",
  className = "",
}) {
  const base = "transition-all duration-300 ease-out";
  const variants = {
    solid:
      "text-black bg-white border-0 rounded py-0.5 text-lg font-medium hover:bg-oliveAccent hover:text-white active:bg-oliveAccentDark",
    outline:
      "border rounded-[50px] py-0.5 px-5 hover:text-oliveAccent hover:border-oliveAccent active:border-oliveAccentDark active:text-oliveAccentDark",
  };
  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
