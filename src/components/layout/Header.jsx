import heroImg from "../../assets/images/saudi-bg.jpg";
// import instaIcon from "../../assets/icons/instagram.svg";
// import facebookIcon from "../../assets/icons/social-facebook.svg";
// import teleIcon from "../../assets/icons/telegram.svg";
// import xIcon from "../../assets/icons/x-outlined.svg";
import TripList from "../ui/TripList";
import Navbar from "./Navbar";

function Header() {
  return (
    <header
      id="hero"
      className="bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Navbar />
      <div className="container mx-auto px-6 pt-8 relative">
        <div className=" flex justify-between mb-20">
          <h1 className="font-saira font-light uppercase text-whiteSoft text-7xl sm:text-8xl md:text-9xl ml-10 sm:ml-20 lg:ml-36 xl:scale-125 ">
            Saudi
          </h1>
          <ul className="hidden md:flex flex-col space-y-4">
            <li>
              <a href="#">
                {/* <img src={instaIcon} alt="Instagram Icon" className="w-7 h-7" /> */}
                <i className="fa-brands fa-facebook-f fa-lg text-whiteSoft"></i>
              </a>
            </li>
            <li>
              <a href="#">
                {/* <img
                  src={facebookIcon}
                  alt="Facebook Icon"
                  className="w-7 h-7"
                /> */}
                <i className="fa-brands fa-instagram fa-lg text-whiteSoft"></i>
              </a>
            </li>
            <li>
              <a href="#">
                {/* <img src={xIcon} alt="X Icon" className="w-7 h-7" /> */}
                <i className="fa-brands fa-x-twitter fa-lg text-whiteSoft"></i>
              </a>
            </li>
          </ul>
        </div>
        <TripList />
      </div>
    </header>
  );
}

export default Header;
