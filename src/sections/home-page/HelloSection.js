import React from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "../../utils/useWindowDimensions";

const HelloSection = (props) => {
  const { height, width } = useWindowDimensions();
  const {
    title,
    description,
    image,
    actionButtonUrl,
    actionButtonText,
    actionButtonIcon,
  } = props;
  return (
    <div className="section-3">
      <div className={width > 768 ? "container" : "container px-5"}>
        <div className="hello">
          <div className="hello-image"></div>
          <div className="hello-text">
            <div className="text-1">{title}</div>
            <div className="hello-image-1 d-block d-sm-none">
              <img
                src={`${window.location.origin}/assets/images/${image}.png`}
                alt={title}
              />
            </div>
            <div
              className="text-2"
              style={{ maxWidth: width < 600 ? "100%" : "60%" }}
            >
              {description}
            </div>
            <div className="action">
              <a href={actionButtonUrl} className="btn">
                <span>{actionButtonText}</span>
                <img
                  src={`${window.location.origin}/assets/images/${actionButtonIcon}.png`}
                  alt={actionButtonText}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HelloSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  actionButtonUrl: PropTypes.string,
  actionButtonText: PropTypes.string,
  actionButtonIcon: PropTypes.string,
};

export default HelloSection;
