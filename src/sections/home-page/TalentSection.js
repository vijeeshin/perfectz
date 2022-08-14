import React from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "../../utils/useWindowDimensions";

const TalentSection = (props) => {
  const { url } = props;
  const { width } = useWindowDimensions();
  return (
    <div className="section-6">
      <div className={width > 768 ? "container" : "container px-5"}>
        <div className="row">
          <div className="col col-12 col-sm-6">
            <div className="text-1">
              We are here to provide Talents-on-Demand to create High
              Performance Teams (HPTs)
            </div>
            <div className="action">
              <a href={url} className="btn">
                <span>CONTACT US NOW</span>
                <img src="assets/images/arrow-forward.png" />
              </a>
            </div>
          </div>
          <div className="col col-12 col-sm-6">
            <div className="talents-image">
              <img src="assets/images/hpt.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TalentSection.propTypes = {
  url: PropTypes.string,
};

export default TalentSection;
