import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Marquee from "./Components/Marquee/Marquee";
import About from "./Components/About/About";
import Eyes from "./Components/Eyes/Eyes";
import Featured from "./Components/Featured/Featured";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <Landing />

      <Marquee />
      <About />

      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
