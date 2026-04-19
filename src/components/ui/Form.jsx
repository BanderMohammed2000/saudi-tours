import Button from "./Button";
import Input from "./Input";

function Form() {
  const textStyle = "text-3xl md:text-4xl font-normal leading-normal";
  return (
    <>
      <form
        id="contacts"
        className="w-full lg:w-11/12 bg-white/15 backdrop-blur-sm text-white rounded-3xl"
        action=""
      >
        <div className="flex flex-col p-10 space-y-4">
          <div className="flex flex-col space-y-1">
            <p className={textStyle}>Want to join us,</p>
            <p className={textStyle}>but still have questions?</p>
          </div>
          <p className="text-xl ml-2 font-normal">Leave a request</p>
          <div className="flex flex-col space-y-0.5">
            <Input type="text" placeholder="Your name" />
            <Input type="tel" placeholder="Phone number" />
            <Input type="text" placeholder="Comment" />
          </div>
          <Button type="submit" className="py-1 text-lg">
            Send
          </Button>
        </div>
      </form>
    </>
  );
}

export default Form;
