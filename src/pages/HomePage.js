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
import _ from "lodash";

const HomePage = (props) => {
  const { width } = useWindowDimensions();
  const data = require("../data/data.json");
  return (
    <>
      <HeaderLayout />
      <div className="hero header-size-pad">
        <div className={width > 768 ? "container" : "container px-5"}>
          <TwoSwiper data={data.homepage.slider} />
        </div>
      </div>
      <SuccessSection data={data.homepage.successSection} />
      <ServiceSection data={_.chunk(data.homepage.services, 7)[0]} />
      <HelloSection
        title={data.homepage.helloSection.title}
        description={data.homepage.helloSection.subtitle}
        image={"handshake"}
        actionButtonIcon={"arrow-forward"}
        actionButtonText={data.homepage.helloSection.buttonTitle}
        actionButtonUrl={data.homepage.helloSection.url}
      />
      <LatestTechnologySection data={data.homepage.latestTechnologies} />
      <TechnologyStackSection data={data.homepage.technologiesStack} />
      <TalentSection data={data.homepage.talentSection} />
      <BrandingSection data={data.homepage.brandingSection} />
      <ClientSection
        clients={data.homepage.client.clients}
        desc={data.homepage.client.description}
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
