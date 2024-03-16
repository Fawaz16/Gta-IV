import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function News() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="over">
      <h1>Latest News / Videos</h1>
      <div className="newsletter">
        <Slider {...settings}>
          <div class="newsletter-item">
            <img
              src="https://images.thedirect.com/media/article_full/gta-6-map_S5MWEtn.jpg"
              alt=""
            />
            <span>17th of february | 3 mins read</span>
            <h2>News Headline 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor sit amet justo porta, vel efficitur nisi
              malesuada.
            </p>
            <button> Read more</button>
          </div>
          <div class="newsletter-item">
            <img
              src="https://ichef.bbci.co.uk/images/ic/480xn/p0gzlm6p.jpg.webp"
              alt=""
            />
            <span>17th of february | 3 mins read</span>
            <h2>News Headline 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor sit amet justo porta, vel efficitur nisi
              malesuada.
            </p>
            <button> Read more</button>
          </div>
          <div class="newsletter-item">
            <img
              src="https://cdn.mos.cms.futurecdn.net/MLWGsRQPSJvT4Cfkj3FT96-1200-80.jpg"
              alt=""
            />
            <span>17th of february | 3 mins read</span>
            <h2>News Headline 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor sit amet justo porta, vel efficitur nisi
              malesuada.
            </p>
            <button> Read more</button>
          </div>
          <div class="newsletter-item">
            <img
              src="https://i.guim.co.uk/img/media/c29faf6217d6aaf486c3318f8af6ca0cbeb80811/145_0_1605_964/master/1605.jpg?width=465&dpr=1&s=none"
              alt=""
            />
            <span>17th of february | 3 mins read</span>
            <h2>News Headline 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor sit amet justo porta, vel efficitur nisi
              malesuada.
            </p>
            <button> Read more</button>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default News;
