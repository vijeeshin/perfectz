import React from "react";
import PropTypes from "prop-types";

const BrandingSection = (props) => {
  const { url } = props;
  return (
    <div className="section-7">
      <div className="container">
        <div className="designer-image">
          <img src="assets/images/designhead.png" />
        </div>
        <div className="text-1">
          Refresh Your Brands’ with our World class designers
        </div>
        <div className="text-2">
          We believe “Mobile first design” principle is the core of any product
          design.
        </div>
        <div className="action">
          <a href={url} className="btn btn-primary">
            <span>KNOW MORE</span>
            <img src="assets/images/arrow-forward-ios.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

BrandingSection.propTypes = {
  url: PropTypes.string,
};

export default BrandingSection;
