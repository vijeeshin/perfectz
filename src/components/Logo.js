import React from "react";
import PropTypes from "prop-types";
const Logo = ({ anchorStyle, imageStyle, image, alt, url }) => {
  return (
    <a href={`${url}`} className="logo" style={anchorStyle}>
      {image ? (
        <img src={`${image}`} alt={alt ?? image} style={imageStyle} />
      ) : null}
    </a>
  );
};

Logo.propTypes = {
  anchorStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  image: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
};

export { Logo };
