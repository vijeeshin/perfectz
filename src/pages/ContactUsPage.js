import React from "react";
import PropTypes from "prop-types";
import { HeaderLayout } from "../layouts/header";
import FooterLayout from "../layouts/footer/FooterLayout";
import AddressSection from "../sections/contact-us-page/AddressSection";
import { Config } from "../config/Config";
import ContactUsSection from "../sections/contact-us-page/ContactUsSection";

const ContactUsPage = () => {
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
                    <div className="col col-12 col-sm-5">
                      <div>
                        <div className="text-3">Let’s send a message</div>
                        <div className="text-1">
                          WE ARE HERE
                          <br />
                          TO HELP
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 col-sm-7">
                      <div className="image-2">
                        <img src="assets/images/contact-us.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUsSection />
      <AddressSection
        addresses={Config.data.addresses}
        emailUrl={Config.emailAddress}
        linkedInUrl={Config.linkedInUrl}
      />

      <FooterLayout name={"perfectz"} />
    </>
  );
};

export default ContactUsPage;
