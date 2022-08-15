import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const TwoSwiper = (props) => {
  return (
    <div className="slider">
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
              <div className="row">
                <div className="col col-12 col-sm-5">
                  <div>
                    <div className="text-1">
                      DESIGN AND BUILD YOUR TECH TEAM
                    </div>
                    <div className="image-1 d-sm-none">
                      <div
                        className="image-1"
                        style={{
                          backgroundPosition: " 50%",
                          height: " 500px",
                          width: "100%",
                          boxSizing: "border-box",
                          backgroundImage: `url(
                            ./assets/images/hero-object.png
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
                      <a href="#our-services" className="btn btn-primary">
                        <span>OUR SERVICES</span>
                        <img src="assets/images/arrow-forward-ios.png" />
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
                            ./assets/images/hero-object.png
                          )`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  ></div>
                </div>
              </div>
              <div className="row">
                <div className="col col-12 col-sm-5">
                  <div>
                    <div className="text-1">WE HELP TRANSFORM</div>
                    <div className="image-1 d-sm-none">
                      <div
                        className="image-1"
                        style={{
                          backgroundPosition: " 50%",
                          height: " 500px",
                          width: "100%",
                          boxSizing: "border-box",
                          backgroundImage: `url(
                            ./assets/images/hero-object2.png
                          )`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                        }}
                      ></div>
                    </div>
                    <div className="text-2">
                      Technology stack transformation
                    </div>
                    <div className="action">
                      <a href="#our-services" className="btn btn-primary">
                        <span>OUR SERVICES</span>
                        <img src="assets/images/arrow-forward-ios.png" />
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
                            ./assets/images/hero-object2.png
                          )`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  ></div>
                </div>
              </div>
              <div className="row">
                <div className="col col-12 col-sm-5">
                  <div>
                    <div className="text-1">IT TALENTS ON-DEMAND</div>
                    <div className="image-1 d-sm-none">
                      <div
                        className="image-1"
                        style={{
                          backgroundPosition: " 50%",
                          height: " 500px",
                          width: "100%",
                          boxSizing: "border-box",
                          backgroundImage: `url(
                            ./assets/images/hero-object3.png
                          )`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                        }}
                      ></div>
                    </div>
                    <div className="text-2">
                      We know that you can't build a company with innovation
                      alone, you also need IT talent to deliver products.
                    </div>
                    <div className="action">
                      <a href="#our-services" className="btn btn-primary">
                        <span>OUR SERVICES</span>
                        <img src="assets/images/arrow-forward-ios.png" />
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
                            ./assets/images/hero-object3.png
                          )`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  ></div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

TwoSwiper.propTypes = {};

export default TwoSwiper;
