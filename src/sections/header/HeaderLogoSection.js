import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../../components/Logo";

const HeaderLogoSection = (props) => {
  return (
    <div className="col">
      <Logo
        url={props.logoUrl}
        image={props.logoImage}
        anchorStyle={props.anchorStyle}
        imageStyle={props.logoImageStyle}
        alt={props.logoAlt}
      />
    </div>
  );
};

HeaderLogoSection.propTypes = {
  logoUrl: PropTypes.string,
  logoImage: PropTypes.string,
  logoAlt: PropTypes.string,
  logoImageStyle: PropTypes.object,
  logoAnchorStyle: PropTypes.object,
};

export default HeaderLogoSection;
