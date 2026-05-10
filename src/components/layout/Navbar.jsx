import { useState, useEffect } from "react";

import logo from "../../assets/globe.svg";
// import logo2 from "../../assets/globe-olive.svg";
import Button from "../ui/Button";

function Navbar({ activeOpacity }) {
  const iconStyle =
    "text-whiteSoft transition-all duration-300 ease-out hover:text-oliveAccent active:text-oliveAccentDark";

  const navStyle =
    "transition-all duration-300 ease-out hover:text-oliveAccent active:text-oliveAccentDark";

  const [isOpen, setIsOpen] = useState(false);

  const handleNavToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      <nav
        className={`${activeOpacity ? "opacity-40" : "opacity-100"} container mx-auto p-6 transition-opacity duration-300 ease-out`}
      >
        <div
          className={`${!isOpen ? "backdrop-blur-sm bg-white/15" : ""} flex justify-between items-center p-3 text-white rounded-[50px] relative z-40`}
        >
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

          {/* <!-- Hamburger Menu --> */}
          <div className="md:hidden">
            <button
              onClick={handleNavToggle}
              type="button"
              className={`${isOpen ? "open" : ""} hamburger z-40 block md:hidden focus:outline-none`}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          <div className="hidden md:block">
            <Button variant="outline">Book</Button>
          </div>
        </div>
      </nav>

      {/* <!-- Mobile Menu --> */}
      <div
        className={`${isOpen ? "flex" : "hidden"} mobile-menu flex-col self-end items-center fixed z-30 top-0 w-full min-h-screen py-1 pt-40 space-y-10 text-2xl text-white bg-white/15 backdrop-blur-lg`}
      >
        {/* <img
          className="absolute top-0 right-0 w-full h-full opacity-10 -z-10"
          src={logo2}
          alt="logo"
        /> */}
        <a
          onClick={handleNavToggle}
          href="#about"
          className={`${navStyle} relative`}
        >
          About
        </a>
        <a
          onClick={handleNavToggle}
          href="#included"
          className={`${navStyle} relative`}
        >
          Included
        </a>
        <a
          onClick={handleNavToggle}
          href="#contacts"
          className={`${navStyle} relative`}
        >
          Contacts
        </a>
        <Button
          onClick={handleNavToggle}
          className="w-40 py-1.5 bg-oliveAccent text-white mt-20"
          variant="outline"
        >
          Book
        </Button>
        <ul className="flex space-x-4 justify-end">
          <li>
            <a href="#">
              <i className={`${iconStyle} fa-brands fa-facebook-f`}></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={`${iconStyle} fa-brands fa-instagram`}></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={`${iconStyle} fa-brands fa-x-twitter`}></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
