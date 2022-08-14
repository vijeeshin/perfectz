import React from "react";
import PropTypes from "prop-types";
import TechStack from "../../components/TechStack";
import useWindowDimensions from "../../utils/useWindowDimensions";

const TechnologyStackSection = (props) => {
  const { width } = useWindowDimensions();
  return (
    <div className="section-5">
      <div className={width > 768 ? "container" : "container px-5"}>
        <div className="text-1">Technology Stack</div>
        <div className="text-2">
          All our engineers are expertise in latest Mobile, Web and Backend
          technology stack
        </div>

        <div className="slider">
          <div
            className="slider-content"
            style={{
              width: "100%",
              overflow: "auto",
              display: "flex",
              scrollbarWidth: 0,
            }}
          >
            <TechStack url={"#"} image={"android"} />
            <TechStack url={"#"} image={"ios"} />
            <TechStack url={"#"} image={"aws"} />
            <TechStack url={"#"} image={"gworkspace"} />
            <TechStack url={"#"} image={"react"} />
            <TechStack url={"#"} image={"figma"} />
          </div>
        </div>
      </div>
    </div>
  );
};

TechnologyStackSection.propTypes = {};

export default TechnologyStackSection;
