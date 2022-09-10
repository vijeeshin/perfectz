import React from "react";
import PropTypes from "prop-types";
import TechStack from "../../components/TechStack";
import useWindowDimensions from "../../utils/useWindowDimensions";

const TechnologyStackSection = (props) => {
  const { width } = useWindowDimensions();
  const { data } = props;

  return (
    <div className="section-5">
      <div className={width > 768 ? "container" : "container px-5"}>
        <div className="text-1">{data.title}</div>
        <div className="text-2">{data.desc}</div>

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
            {data.stacks.map((stack, index) => (
              <TechStack key={index} url={stack.url} image={stack.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TechnologyStackSection.propTypes = {};

export default TechnologyStackSection;
