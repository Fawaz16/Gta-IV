import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Character() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="overall">
      <p id="hidden">hdhdhdhd</p>
      <div className="decription">
        <h1>Characters</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          ipsum, ar Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Harum eligendi nam, expedita deleniti similique possimus eum explicabo
          nemo voluptatum quam nostrum porro
        </p>
        {/* carousel */}
        <div>
          <Slider {...settings}>
            <div className="slides">
              <img
                src="https://images.immediate.co.uk/production/volatile/sites/3/2023/12/radio-times-gta-6-lucia-prison-c774721.jpg?quality=90&resize=980,654"
                alt="first"
              />
            </div>
            <div className="slides">
              <img
                src="https://pbs.twimg.com/media/Fc6xWvJXkAAIHcg.jpg"
                alt="first"
              />
            </div>
            <div className="slides">
              <img
                src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Grand-Theft-Auto-6-Four-Protagonists-Leak-Change-GTA-6-Female-Playable-Character.jpg"
                alt="first"
              />
            </div>
            <div className="slides">
              <img
                src="https://static.independent.co.uk/2023/12/05/15/newFile-2.jpg"
                alt="first"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Character;
