import cornicheBg from "../../assets/images/neom-bg.jpg";
import Footer from "../layout/Footer";
import Form from "./Form";

function Contact() {
  return (
    <>
      <section
        className="bg-cover bg-no-repeat bg-center pt-10 lg:pt-80 relative"
        style={{ backgroundImage: `url(${cornicheBg})` }}
      >
        {/* <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#040404] from-40% to-transparent to-100%"></div> */}
        <div className="absolute top-0 left-0 w-full h-40 bg-[linear-gradient(to_bottom,rgba(4,4,4,0.9)_0%,rgba(4,4,4,0.8)_40%,rgba(4,4,4,0.4)_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between items-end space-x-32 lg:space-x-0">
            <Form />
            <div className="hidden md:block lg:w-full">
              <ul className="flex space-x-4 justify-end">
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
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
