import React from "react";
import PropTypes from "prop-types";

const ServiceViewAllBtn = (props) => {
  const { url } = props;
  return (
    <div className="col col-6 col-sm-3">
      <a href={url} className="service view-all">
        <div className="service-content">
          <div className="service-label">
            VIEW ALL
            <br />
            SERVICES
          </div>
        </div>
      </a>
    </div>
  );
};

ServiceViewAllBtn.propTypes = {
  url: PropTypes.string,
};

export default ServiceViewAllBtn;
