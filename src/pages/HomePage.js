import React from "react";
import PropTypes from "prop-types";
import { HeaderLayout } from "../layouts/header";
import TwoSwiper from "../components/TwoSwiper";
import ServiceBox from "../components/ServiceBox";
import HelloSection from "../sections/home-page/HelloSection";
import ServiceSection from "../sections/home-page/ServiceSection";
import SuccessSection from "../sections/home-page/SuccessSection";
import LatestTechnologySection from "../sections/home-page/LatestTechnologySection";
import TechnologyStackSection from "../sections/home-page/TechnologyStackSection";
import TalentSection from "../sections/home-page/TalentSection";
import ClientSection from "../sections/home-page/ClientSection";
import FooterLayout from "../layouts/footer/FooterLayout";
import { Config } from "../config/Config";
import AddressSection from "../sections/home-page/AddressSection";
import ContactUsForm from "../forms/ContactUsForm";
import ContactUsSection from "../sections/home-page/ContactUsSection";
import BrandingSection from "../sections/home-page/BrandingSection";
import useWindowDimensions from "../utils/useWindowDimensions";

const HomePage = (props) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <HeaderLayout />

      <div className="hero header-size-pad">
        <div className={width > 768 ? "container" : "container px-5"}>
          <TwoSwiper />
        </div>
      </div>
      <SuccessSection />
      <ServiceSection />
      <HelloSection
        title={"HELLO!"}
        description={"Why settle for a vendor when you need is a partner?"}
        image={"handshake"}
        actionButtonIcon={"arrow-forward"}
        actionButtonText={"CONTACT US NOW"}
        actionButtonUrl={"/contact"}
      />
      <LatestTechnologySection />

      <TechnologyStackSection />

      <TalentSection url={"/contact"} />
      <BrandingSection url={"/contact"} />
      <ClientSection
        clients={Config.data.client.clients}
        desc={Config.data.client.description}
      />

      <ContactUsSection />

      <AddressSection
        addresses={Config.data.addresses}
        emailUrl={Config.emailAddress}
        linkedInUrl={Config.linkedInUrl}
      />
      <FooterLayout name={Config.name} url={Config.url} />
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
