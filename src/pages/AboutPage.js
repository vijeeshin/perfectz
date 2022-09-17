import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HeaderLayout } from "../layouts/header";
import FooterLayout from "../layouts/footer/FooterLayout";
import { Config } from "../config/Config";
import ContactUsSection from "../sections/home-page/ContactUsSection";
import TalentSection from "../sections/home-page/TalentSection";
import { useParams } from "react-router-dom";

const AboutPage = () => {
  const { service } = useParams();

  const [content, setContent] = useState();

  useEffect(() => {
    if (service && Config.data.aboutPage) {
      const d = Config.data.aboutPage.services.find((s) => s.slug === service);
      setContent(d);
    }
  }, [service, Config.data.aboutPage]);

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
                        <div className="text-3">{content?.subTitle}</div>
                        <div className="text-1 text-1-1">
                          {content?.title.split(" ").map((service, index) =>
                            index === 0 ? (
                              <span key={`service-page-${index}`}>
                                <span>{service}</span>
                                <br />
                              </span>
                            ) : (
                              <span key={`service-page-${index}`}>
                                <span>{service}</span>
                                &nbsp;
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 col-sm-4">
                      <div className="higlights">
                        <ul>
                          {content?.highlights.map((highlight, index) => (
                            <li key={`service-highligh-${index}`}>
                              {highlight}
                            </li>
                          ))}
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
                <div className="text-1">{content?.body.title}</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col-12 col-sm-6 ">
              <div className="client-success d-none d-sm-block"></div>
              <div className="text-3 pt-5">
                <p>{content?.body.subtitle}</p>
              </div>
            </div>
            <div className="col col-12 col-sm-6">
              <div className="client-success-text">
                <div className="text-1 d-none d-sm-block">
                  {content?.body.title}
                </div>
                <div className="text-2">
                  {content?.body.paragraph.map((para, index) => (
                    <p key={index} className={index === 0 ? "pt-5" : ""}>
                      {para}
                    </p>
                  ))}
                </div>
                <div className="action">
                  <a href={content?.body.url} className="btn btn-primary">
                    <span>CONTACT US</span>
                    <img
                      src={`${window.location.origin}/assets/images/arrow-forward-ios.png`}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TalentSection data={Config.data.aboutPage.talentSection} />

      <ContactUsSection />
      <FooterLayout name={Config.name} url={Config.url} />
    </>
  );
};

export { AboutPage };
