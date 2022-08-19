import React from "react";
import PropTypes from "prop-types";
import TechItem from "../../components/TechItem";
import useWindowDimensions from "../../utils/useWindowDimensions";

const LatestTechnologySection = (props) => {
  const { viewAllUrl } = props;
  const { width } = useWindowDimensions();
  return (
    <div className="section-4">
      <div className={width > 768 ? "container" : "container px-5"}>
        <div className="row">
          <div className="col col-12 col-sm-6">
            <div className="text-1">
              LATEST TECHNOLOGY
              <br />
              TRAINING PROGRAM
            </div>
            <div className="techs-image d-block d-sm-none">
              <img src="assets/images/latest-technology.png" />
            </div>
            <div className="text-2">
              Join our fast growing global team to unleash your full potential.
            </div>
            <div className="text-3">
              <label>Technologies</label>
            </div>
            <div className="techs">
              <TechItem url={"/contact"} icon={"android"} />
              <TechItem url={"/contact"} icon={"ios"} />
              <TechItem url={"/contact"} icon={"androidstudio"} />
              <TechItem url={"/contact"} icon={"xcode"} />
              <TechItem url={"/contact"} icon={"react"} />
              <TechItem url={"/contact"} icon={"angular"} />
              <TechItem url={"/contact"} icon={"golang"} />
            </div>
            <div className="action">
              <a href={viewAllUrl} className="btn">
                <span>VIEW ALL COURSES</span>
                <img src="assets/images/arrow-forward.png" />
              </a>
            </div>
          </div>
          <div className="col-6 d-none d-sm-block">
            <div className="techs-image">
              <img src="assets/images/latest-technology.png" />
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
