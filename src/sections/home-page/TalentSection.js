import React from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "../../utils/useWindowDimensions";

const TalentSection = (props) => {
  const { data } = props;
  const { width } = useWindowDimensions();
  return (
    <div className="section-6">
      <div className={width > 768 ? "container" : "container px-5"}>
        <div className="row">
          <div className="col col-12 col-sm-6">
            <div className="text-1">{data.desc}</div>
            <div className="action">
              <a href={data.url} className="btn">
                <span>{data.buttonTitle}</span>
                <img
                  src={`${window.location.origin}/assets/images/arrow-forward.png`}
                />
              </a>
            </div>
          </div>
          <div className="col col-12 col-sm-6">
            <div className="talents-image">
              <img src={`${window.location.origin}/assets/images/hpt.png`} />
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
