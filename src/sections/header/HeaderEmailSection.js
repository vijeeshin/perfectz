import React from "react";
import PropTypes from "prop-types";

const HeaderEmailSection = (props) => {
  return (
    <div className="col-auto">
      <a href={`mailto:${props.emailAddress}`} target="_blank">
        <img
          src={window.location.origin + "/assets/images/email.png"}
          alt="perfectz email"
        />
        <span className="d-none d-sm-block">{props.emailAddress}</span>
      </a>
    </div>
  );
};

HeaderEmailSection.propTypes = {
  emailAddress: PropTypes.string.isRequired,
};

export default HeaderEmailSection;
