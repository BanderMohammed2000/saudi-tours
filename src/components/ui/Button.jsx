function Button({
  children,
  variant = "solid",
  type = "button",
  className = "",
}) {
  const base = "border transition";
  const variants = {
    solid: "text-black bg-white rounded py-0.5 text-lg font-medium",
    outline: "rounded-[50px] py-0.5 px-5",
  };
  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
