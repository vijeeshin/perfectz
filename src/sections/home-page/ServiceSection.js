import React from "react";
import PropTypes from "prop-types";
import ServiceBox from "../../components/ServiceBox";
import ServiceViewAllBtn from "../../components/ServiceViewAllBtn";
import useWindowDimensions from "../../utils/useWindowDimensions";

const ServiceSection = ({ data }) => {
  const { width } = useWindowDimensions();
  return (
    <div className="section-2">
      <div className={width > 768 ? "container" : "container px-5"}>
        <div className="text-1">Our Services</div>
        <div className="row align-items-stretch">
          {data.map((service, index) => (
            <ServiceBox
              key={index}
              title={service.title}
              alt={service.title}
              image={`${window.location.origin}/assets/images/services/w/${service.image}.png`}
              url={service.url}
            />
          ))}
          {data?.length >= 7 && <ServiceViewAllBtn url={"/services"} />}
        </div>
      </div>
    </div>
  );
};

ServiceSection.propTypes = {};

export default ServiceSection;
