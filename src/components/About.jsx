import React from "react";

function About() {
  return (
    <div className="about">
      <h1>
        Abo<span>ut</span>
      </h1>

      <div className="flexer">
        <img src="https://images6.alphacoders.com/134/1344450.jpeg" alt="" />
        <div className="details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiisexcepturi nulla, fuga impedit recusandae soluta?
            Explicaboreprehenderit deleniti doloribus aliquam vitae non
            similique qunihil perspiciatis, iusto praesentium, quasi
            exercitationem.
          </p>
          <div className="get-now">
            <button>Get Now</button>
            <button id="special1">Find out more </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
