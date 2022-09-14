import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const TwoSwiper = ({ data }) => {
  return (
    <div className="slider" >
      <div className="slider-content">
        <div className="slider-slide">
          <div className="slider-slide-content">
            <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
            >
              {data?.map((item, index) => (
                <div className="row" key={`slider-${index}`}>
                  <div className="col col-12 col-sm-5">
                    <div>
                      <div className="text-1">{item.title}</div>
                      <div className="image-1 d-sm-none">
                        <div
                          className="image-1"
                          style={{
                            backgroundPosition: " 50%",
                            height: " 500px",
                            width: "100%",
                            boxSizing: "border-box",
                            backgroundImage: `url(
                             ${window.location.origin}/assets/images/${item.image}.png
                          )`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                          }}
                        ></div>
                      </div>
                      <div className="text-2">
                        We create value for our clients by creating value for
                        their customers.
                      </div>
                      <div className="action">
                        <a href={`${item.url}`} className="btn btn-primary">
                          <span>{item.buttonTitle}</span>
                          <img
                            src={`${window.location.origin}/assets/images/arrow-forward-ios.png`}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-7 d-none d-sm-block">
                    <div
                      className="image-1"
                      style={{
                        backgroundPosition: " 50%",
                        height: " 500px",
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundImage: `url(
                            ${window.location.origin}/assets/images/${item.image}.png
                          )`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

TwoSwiper.propTypes = {};

export default TwoSwiper;
