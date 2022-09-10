import React from "react";
import PropTypes from "prop-types";

const ClientBox = (props) => {
  const { url, image } = props;
  return (
    <div className="col col-6 col-sm-3">
      <a href={url}>
        <div className="client">
          <img
            src={`${window.location.origin}/assets/images/clients/${image}.png`}
            alt={"client"}
          />
        </div>
      </a>
    </div>
  );
};

ClientBox.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
};

export default ClientBox;
