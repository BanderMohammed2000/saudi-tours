import logo from "../../assets/globe.svg";
import Button from "../ui/Button";

function Footer() {
  const navStyle =
    "transition-all duration-300 ease-out hover:text-oliveAccent active:text-oliveAccentDark";
  return (
    <footer>
      <nav className="container mx-auto px-6 pt-7 pb-6">
        <div className="flex justify-between items-center p-3 bg-white/15 backdrop-blur-sm text-white  rounded-[50px]">
          <div className="flex space-x-2 items-center">
            <img src={logo} alt="logo" className="w-[34px] h-[34px]" />
            <p className="font-medium text-lg uppercase font-monda">
              Saudi Tours
            </p>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a className={navStyle} href="#about">
                About
              </a>
            </li>
            <li>
              <a className={navStyle} href="#included">
                Included
              </a>
            </li>
            <li>
              <a className={navStyle} href="#contacts">
                Contacts
              </a>
            </li>
          </ul>
          <div>
            <Button variant="outline">Book</Button>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
