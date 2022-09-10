import React from "react";
import PropTypes from "prop-types";

const HeaderMenuSection = (props) => {
  return (
    <div className="col-auto">
      <a href="http://localhost/perfectz/#">
        <img src={window.location.origin + "/assets/images/grid-view.png"} />
      </a>
    </div>
  );
};

HeaderMenuSection.propTypes = {};

export default HeaderMenuSection;
