// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { EffectFade, EffectFlip } from "swiper";
const TwoSwiper = (props) => {
  return (
    <>
      <div className="slider">
        <div className="slider-content">
          <div className="slider-slide">
            <div className="slider-slide-content">
              <div className="row">
                <div className="col col-12 col-sm-5">
                  <div>
                    <Swiper>
                      <SwiperSlide>
                        <div className="text-1">
                          DESIGN AND BUILD YOUR TECH TEAM
                        </div>
                        <div className="text-2">
                          We create value for our clients by creating value for
                          their customers.
                        </div>
                        <div className="action">
                          <a
                            href="http://localhost/perfectz/#our-services"
                            className="btn btn-primary"
                          >
                            <span>OUR SERVICES</span>
                            <img src="./assets/images/arrow-forward-ios.png" />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="text-1">Beyond the limit</div>
                        <div className="text-2">
                          We create value for our clients by creating value for
                          their customers.
                        </div>
                        <div className="action">
                          <a
                            href="http://localhost/perfectz/#our-services"
                            className="btn btn-primary"
                          >
                            <span>OUR SERVICES</span>
                            <img src="./assets/images/arrow-forward-ios.png" />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="text-1">
                          DESIGN AND BUILD YOUR TECH TEAM
                        </div>
                        <div className="text-2">
                          We create value for our clients by creating value for
                          their customers.
                        </div>
                        <div className="action">
                          <a
                            href="http://localhost/perfectz/#our-services"
                            className="btn btn-primary"
                          >
                            <span>OUR SERVICES</span>
                            <img src="./assets/images/arrow-forward-ios.png" />
                          </a>
                        </div>
                      </SwiperSlide>
                    </Swiper>

                    <div className="image-1 d-sm-none">
                      <Swiper
                        effect={"flip"}
                        grabCursor={true}
                        modules={[EffectFlip]}
                        spaceBetween={0}
                        slidesPerView={1}
                        speed={100}
                        loop={true}
                        autoplay={true}
                        touchRatio={1.5}
                        navigation={false}
                        pagination={{ clickable: true }}
                      >
                        <SwiperSlide>
                          <div className="image-1">
                            <img src="./assets/images/hero-object.png" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="image-1">
                            <img src="./assets/images/hero-object.png" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="image-1">
                            <img src="./assets/images/hero-object.png" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="image-1">
                            <img src="./assets/images/hero-object.png" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="image-1">
                            <img src="./assets/images/hero-object.png" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="image-1">
                            <img src="./assets/images/hero-object.png" />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-sm-7 d-none d-sm-block">
                  <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    pagination={false}
                    navigation={false}
                    loop={true}
                    autoplay={500}
                    modules={[EffectFlip]}
                  >
                    <SwiperSlide>
                      <div className="image-1">
                        <img src="./assets/images/hero-object.png" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image-1">
                        <img src="./assets/images/hero-object.png" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image-1">
                        <img src="./assets/images/hero-object.png" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image-1">
                        <img src="./assets/images/hero-object.png" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image-1">
                        <img src="./assets/images/hero-object.png" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image-1">
                        <img src="./assets/images/hero-object.png" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TwoSwiper.propTypes = {};

export default TwoSwiper;
