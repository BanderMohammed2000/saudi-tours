import Header from "../components/layout/Header";
import Contact from "../components/ui/Contact";
import TripIncludes from "../components/ui/TripIncludes";
import TripRoute from "../components/ui/TripRoute";

function Home() {
  return (
    <>
      <Header />
      <TripRoute />
      <TripIncludes />
      <Contact />
    </>
  );
}

export default Home;
