import React from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "../../utils/useWindowDimensions";

const BrandingSection = (props) => {
  const { data } = props;
  const { width } = useWindowDimensions();
  return (
    <div className="section-7">
      <div className={width > 768 ? "container" : "container px-5"}>
        <div className="designer-image">
          <img src={`${window.location.origin}/assets/images/designhead.png`} />
        </div>
        <div className="text-1">{data.title}</div>
        <div className="text-2">{data.desc}</div>
        <div className="action">
          <a href={data.url} className="btn btn-primary">
            <span>{data.buttonTitle}</span>
            <img
              src={`${window.location.origin}/assets/images/arrow-forward-ios.png`}
            />
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
