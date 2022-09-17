import React from "react";
import PropTypes from "prop-types";

const ServiceBox = (props) => {
  return (
    <div className="col col-6 col-md-3 col-sm-6 col-xs-3">
      <a href={props.url} className="service">
        <div className="service-content">
          <div className="service-icon">
            <img src={props.image} alt={props.alt} />
          </div>
          <div className="service-label">{props.title}</div>
        </div>
      </a>
    </div>
  );
};

ServiceBox.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default ServiceBox;
