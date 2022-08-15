import React, { useEffect } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";

const TwoSwiper = (props) => {
  return (
    <>
      <div className="slider-content">
        <div className="slider-slide">
          <div className="slider-slide-content">
            <Slider autoPlay={1000} infinite={true} slideIndex={0}>
              <div className="row" key={0}>
                <div className="col col-12 col-sm-5">
                  <div className="inner">
                    <div className="text-1">
                      DESIGN AND BUILD YOUR TECH TEAM
                    </div>
                    <div
                      className="image-1 d-sm-none"
                      style={{
                        backgroundPosition: " 50%",
                        height: "70%",
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundImage: `url(
                            ./assets/images/hero-object.png
                          )`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                      }}
                    />
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
                      height: "70%",
                      width: "100%",
                      boxSizing: "border-box",
                      backgroundImage: `url(
                            ./assets/images/hero-object.png
                          )`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="row" key={1}>
                <div className="col col-12 col-sm-5">
                  <div>
                    <div className="text-1">WE HELP TRANSFORM</div>
                    <div
                      className="image-1 d-sm-none"
                      style={{
                        backgroundPosition: " 50%",
                        height: "70%",
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundImage: `url(
                            ./assets/images/hero-object2.png
                          )`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                      }}
                    />
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
                      height: "70%",
                      width: "100%",
                      boxSizing: "border-box",
                      backgroundImage: `url(
                            ./assets/images/hero-object2.png
                          )`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  />
                </div>
              </div>

              <div className="row" key={2}>
                <div className="col col-12 col-sm-5">
                  <div>
                    <div className="text-1">IT TALENTS ON-DEMAND</div>
                    <div
                      className="image-1 d-sm-none"
                      style={{
                        backgroundPosition: " 50%",
                        height: "70%",
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundImage: `url(
                            ./assets/images/hero-object3.png
                          )`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                      }}
                    />
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
                      height: "70%",
                      width: "100%",
                      boxSizing: "border-box",
                      backgroundImage: `url(
                            ./assets/images/hero-object3.png
                          )`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

TwoSwiper.propTypes = {};

export default TwoSwiper;
