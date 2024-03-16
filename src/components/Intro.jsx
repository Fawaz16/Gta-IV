import React from "react";
import styled from "styled-components";
import logo from "../asset/video/rockstar.mp4";

function Intro() {
  return (
    <div className="intro">
      <container>
        <div className="videoclip">
          <video src={logo} autoPlay loop muted></video>
        </div>
      </container>
    </div>
  );
}

export default Intro;
