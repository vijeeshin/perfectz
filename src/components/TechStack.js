import React from "react";
import PropTypes from "prop-types";

const TechStack = (props) => {
  const { url, image } = props;
  return (
    <a href={url}>
      <div className="slider-slide">
        <div className="slider-slide-content">
          <div className="image">
            <img src={`assets/images/techstack/${image}.png`} />
          </div>
        </div>
      </div>
    </a>
  );
};

TechStack.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
};

export default TechStack;
