import React from "react";
import PropTypes from "prop-types";
import { HeaderLayout } from "../layouts/header";
import FooterLayout from "../layouts/footer/FooterLayout";
import { Config } from "../config/Config";
import { motion } from "framer-motion";
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
                        <div className="text-3">
                          {Config.data.allServicesPage.subtitle}
                        </div>
                        <div className="text-1">
                          <motion.div
                            whileHover={{
                              scale: [1, 1.5, 1.5, 1, 1],
                              transition: { duration: 1 },
                            }}
                          >
                            {Config.data.allServicesPage.title}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 col-sm-6">
                      <div className="image-2">
                        <img
                          src={`${window.location.origin}/assets/images/all-services.png`}
                        />
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
            {Config.data.allServicesPage.services.map((service, index) => {
              return (
                <div
                  className="col col-12 col-sm-6"
                  key={`services-key-${index}`}
                >
                  <div className="service">
                    <div className="service-content">
                      <div className="service-image">
                        <img
                          src={`${window.location.origin}/assets/images/services/y/${service.image}.png`}
                        />
                      </div>
                      <div className="service-name">{service.title}</div>
                      <div className="service-desc">
                        Lorem ipsum dolor sit amet, consectetur redoven
                        adipiscing elit. Quam scelerisque purus tincidunt lorem
                        elementum. Aliquam magna egestas.
                      </div>
                      <div className="service-action">
                        <a
                          href={`/services/${service.slug}`}
                          className="btn btn-primary"
                        >
                          <span>DISCOVER MORE</span>
                          <img
                            src={`${window.location.origin}/assets/images/arrow-forward-ios.png`}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="col col-12 col-sm-6">
              <a className="service know-more" href="/contact">
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
