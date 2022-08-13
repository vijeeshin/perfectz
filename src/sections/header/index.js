import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../../components/Logo";
import HeaderLogoSection from "./HeaderLogoSection";
import HeaderEmailSection from "./HeaderEmailSection";
import HeaderMenuSection from "./HeaderMenuSection";

const HeaderSection = (props) => {
  return (
    <div className="row align-items-center justify-content-between">
      <HeaderLogoSection
        logoUrl={props.logoUrl}
        logoImage={props.logoImage}
        logoAlt={props.logoAlt}
        logoImageStyle={props.logoImageStyle}
        logoAnchorStyle={props.logoAnchorStyle}
      />
      <div className="col uamenu">
        <div className="row align-items-center justify-content-end">
          <HeaderEmailSection emailAddress={props.emailAddress} />
          <HeaderMenuSection />
        </div>
      </div>
    </div>
  );
};

HeaderSection.propTypes = {
  logoUrl: PropTypes.string,
  logoImage: PropTypes.string,
  logoAlt: PropTypes.string,
  logoImageStyle: PropTypes.object,
  logoAnchorStyle: PropTypes.object,
  emailAddress: PropTypes.string.isRequired,
};

export default HeaderSection;
