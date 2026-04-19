function Input({ ...props }) {
  return (
    <>
      <input
        className="font-monda w-full bg-transparent border-b border-whiteSoft text-lg py-2 outline-none placeholder:text-graySoft"
        {...props}
      />
    </>
  );
}

export default Input;
