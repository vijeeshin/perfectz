import React from "react";
import PropTypes from "prop-types";
import { HeaderLayout } from "../layouts/header";
import FooterLayout from "../layouts/footer/FooterLayout";
import { Config } from "../config/Config";

const AllServicePage = () => {
  return (
    <>
      <HeaderLayout />
      <div className="hero header-size-pad">
        <div className="container">
          <div className="slider slider-1">
            <div className="slider-content">
              <div className="slider-slide">
                <div className="slider-slide-content">
                  <div className="row">
                    <div className="col col-12 col-sm-6">
                      <div>
                        <div className="text-3">We help companies with</div>
                        <div className="text-1">OUR SERVICES</div>
                      </div>
                    </div>
                    <div className="col col-12 col-sm-6">
                      <div className="image-2">
                        <img src="assets/images/all-services.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="container">
          <div className="text-1">Our Services</div>
          <div className="row">
            <div className="col col-12 col-sm-6">
              <div className="service">
                <div className="service-content">
                  <div className="service-image">
                    <img src="assets/images/services/y/attractions.png" />
                  </div>
                  <div className="service-name">Tech Transformation</div>
                  <div className="service-desc">
                    Lorem ipsum dolor sit amet, consectetur redoven adipiscing
                    elit. Quam scelerisque purus tincidunt lorem elementum.
                    Aliquam magna egestas.
                  </div>
                  <div className="service-action">
                    <a href="#" className="btn btn-primary">
                      <span>DISCOVER MORE</span>
                      <img src="assets/images/arrow-forward-ios.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-12 col-sm-6">
              <div className="service">
                <div className="service-content">
                  <div className="service-image">
                    <img src="assets/images/services/y/attractions.png" />
                  </div>
                  <div className="service-name">Tech Transformation</div>
                  <div className="service-desc">
                    Lorem ipsum dolor sit amet, consectetur redoven adipiscing
                    elit. Quam scelerisque purus tincidunt lorem elementum.
                  </div>
                  <div className="service-action">
                    <a href="#" className="btn btn-primary">
                      <span>DISCOVER MORE</span>
                      <img src="assets/images/arrow-forward-ios.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-12 col-sm-6">
              <div className="service">
                <div className="service-content">
                  <div className="service-image">
                    <img src="assets/images/services/y/attractions.png" />
                  </div>
                  <div className="service-name">Tech Transformation</div>
                  <div className="service-desc">
                    Lorem ipsum dolor sit amet, consectetur redoven adipiscing
                    elit. Quam scelerisque purus tincidunt lorem elementum.
                    Aliquam magna egestas.
                  </div>
                  <div className="service-action">
                    <a href="#" className="btn btn-primary">
                      <span>DISCOVER MORE</span>
                      <img src="assets/images/arrow-forward-ios.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-12 col-sm-6">
              <a className="service know-more">
                <div className="service-content">
                  <div className="service-name">KNOW MORE ABOUT US</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterLayout name={Config.name} url={Config.url} />
    </>
  );
};

export { AllServicePage };
