import styled from "styled-components";
import React, { useState } from "react";
import trailer from "../asset/video/trailer.mp4";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="trailerclip">
      <video src={trailer} autoPlay loop muted></video>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Characters</li>
            <li>Order now</li>
            <div className="nav-button">
              <button>Login</button>
              <button id="special2">Sign up </button>
            </div>
          </ul>
        </nav>
      </div>
      {/* landing page */}

      <div className="front-page">
        <h1>Grand Theft Auto VI</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          atque sit id vel harum consectetur magnam blanditiis beatae minima
          reprehenderit tempora delectus, illo alias neque ab, vitae vero magni
          eius.
        </p>

        <div className="get-now">
          <button>Get Now</button>
          <button id="special1">Find out more </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
