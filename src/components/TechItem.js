import React from "react";
import PropTypes from "prop-types";

const TechItem = (props) => {
  const { url, icon } = props;
  return (
    <a className="techs-item" href={url}>
      <img src={`assets/images/techs/${icon}.png`} />
    </a>
  );
};

TechItem.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.string,
};

export default TechItem;
