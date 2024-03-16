import React from "react";
import Nav from "../components/Nav";
import About from "../components/About";
import Character from "../components/Character";
import { useState, useEffect } from "react";
import Intro from "../components/Intro";
import News from "../components/News";
import Footer from "../components/Footer";

const Home = () => {
  const [showNav, setShowNav] = useState(false);
  const [introShown, setIntroShown] = useState(false);

  useEffect(() => {
    if (!introShown) {
      // Show the Intro section initially
      const introTimer = setTimeout(() => {
        setIntroShown(true);
        setShowNav(true); // After intro, show the Nav section
      }, 4000); // Adjust the duration (in milliseconds) as needed

      return () => clearTimeout(introTimer);
    }
  }, [introShown]); // Run the effect when introShown changes

  return (
    <div className="Header">
      <div className={`intro-section ${introShown ? "hidden" : ""}`}>
        <Intro />
      </div>
      <div className={`nav-section ${showNav ? "visible" : ""}`}>
        {showNav && <Nav />}
      </div>

      <About />

      <Character />

      <News />
      <Footer />
    </div>
  );
};

export default Home;
