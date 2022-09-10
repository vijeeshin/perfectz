import React from "react";
import PropTypes from "prop-types";
import TechItem from "../../components/TechItem";
import useWindowDimensions from "../../utils/useWindowDimensions";

const LatestTechnologySection = (props) => {
  const { data } = props;
  const chunks = data?.title?.split(" ");
  const { width } = useWindowDimensions();
  return (
    <div className="section-4">
      <div className={width > 768 ? "container" : "container px-5"}>
        <div className="row">
          <div className="col col-12 col-sm-6">
            {chunks.length > 0 && (
              <div className="text-1">
                {chunks.map((chunk, index) =>
                  index === 0 ? (
                    <span key={`success-lg-${index}`}>
                      <span>{chunk}</span>
                      <br />
                    </span>
                  ) : (
                    <span key={`success-lg-${index}`}>{chunk}</span>
                  )
                )}
              </div>
            )}
            <div className="techs-image d-block d-sm-none">
              <img
                src={`${window.location.origin}/assets/images/latest-technology.png`}
              />
            </div>
            <div className="text-2">{data.desc}</div>
            <div className="text-3">
              <label>{data.boxTitle}</label>
            </div>
            <div className="techs">
              {data.stacks.map((stack, index) => (
                <TechItem key={index} url={stack.url} icon={stack.image} />
              ))}
            </div>
            <div className="action">
              <a href={data.url} className="btn">
                <span>{data.buttonTitle}</span>
                <img
                  src={`${window.location.origin}/assets/images/arrow-forward.png`}
                />
              </a>
            </div>
          </div>
          <div className="col-6 d-none d-sm-block">
            <div className="techs-image">
              <img
                src={`${window.location.origin}/assets/images/latest-technology.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LatestTechnologySection.propTypes = {
  viewAllUrl: PropTypes.string,
};

export default LatestTechnologySection;
