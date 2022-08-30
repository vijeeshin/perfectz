import React from "react";
import PropTypes from "prop-types";
import { HeaderLayout } from "../layouts/header";
import FooterLayout from "../layouts/footer/FooterLayout";
import { Config } from "../config/Config";
import ContactUsSection from "../sections/home-page/ContactUsSection";

const ServicePage = () => {
  return (
    <>
      <HeaderLayout />
      <div className="hero header-size-pad">
        <div className="container px-5">
          <div className="slider slider-1">
            <div className="slider-content">
              <div className="slider-slide">
                <div className="slider-slide-content">
                  <div className="row">
                    <div className="col col-12 col-sm-8">
                      <div>
                        <div className="text-3">We help companies for</div>
                        <div className="text-1 text-1-1">
                          TECH
                          <br />
                          TRANSFORMATION
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 col-sm-4">
                      <div className="higlights">
                        <ul>
                          <li>Quam scelerisque purus</li>
                          <li>Quam scelerisque purus</li>
                          <li>Quam scelerisque purus</li>
                          <li>Quam scelerisque purus</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-11">
        <div className="container px-5">
          <div className="d-block d-sm-none">
            <div className="row">
              <div className="col">
                <div className="client-success"></div>
              </div>
              <div className="col">
                <div className="text-1">
                  Lorem ipsum dolo rsit amet, consect etur adipiscing
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col-12 col-sm-6 ">
              <div className="client-success d-none d-sm-block"></div>
              <div className="text-3 pt-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                  scelerisque purus tincidunt lorem elementum. Aliquam magna
                  egestas purus massa leo. Malesuada scelerisque phasellus eget
                  viverra semper lacus. Venenatis massa mauris.
                </p>
              </div>
            </div>
            <div className="col col-12 col-sm-6">
              <div className="client-success-text">
                <div className="text-1 d-none d-sm-block">
                  Lorem ipsum dolo rsit amet, consect etur adipiscing
                </div>
                <div className="text-2">
                  <p className="pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quam scelerisque purus tincidunt lorem elementum. Aliquam
                    magna egestas purus massa leo. Malesuada scelerisque
                    phasellus eget viverra semper lacus. Venenatis massa mauris
                    sit augue magna ac, ut nisl consectetur.
                  </p>
                  <p>
                    Orci neque, egestas consectetur cras quis orci morbi.
                    Euismod arcu convallis convallis sed orci venenatis pharetra
                    facilisi netus. Nunc quisque a senectus lacus id. Ornare
                    cras consectetur. pharetra facilisi netus.
                  </p>
                </div>
                <div className="action">
                  <a href="/contact" className="btn btn-primary">
                    <span>CONTACT US</span>
                    <img src="assets/images/arrow-forward-ios.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-6">
        <div className="container px-5">
          <div className="row">
            <div className="col col-12 col-sm-6">
              <div className="text-1">
                We are here to provide Talents-on-Demand to create High
                Performance Teams (HPTs)
              </div>
              <div className="action">
                <a href="/contact" className="btn">
                  <span>CONTACT US NOW</span>
                  <img src="assets/images/arrow-forward.png" />
                </a>
              </div>
            </div>
            <div className="col col-12 col-sm-6">
              <div className="talents-image">
                <img src="assets/images/hpt.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactUsSection />
      <FooterLayout name={Config.name} url={Config.url} />
    </>
  );
};

export { ServicePage };
