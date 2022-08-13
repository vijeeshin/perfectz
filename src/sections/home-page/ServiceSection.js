import React from "react";
import PropTypes from "prop-types";
import ServiceBox from "../../components/ServiceBox";
import ServiceViewAllBtn from "../../components/ServiceViewAllBtn";

const ServiceSection = (props) => {
  return (
    <div className="section-2">
      <div className="container">
        <div className="text-1">Our Services</div>
        <div className="row align-items-stretch">
          <ServiceBox
            title={"TECH TRANSFORMATION"}
            alt={"TECH TRANSFORMATION"}
            image={"assets/images/services/w/attractions.png"}
            url={"#"}
          />
          <ServiceBox
            title={"TEAM BUILDING"}
            alt={"TEAM BUILDING"}
            image={"assets/images/services/w/stream.png"}
            url={"#"}
          />
          <ServiceBox
            title={"TALENTS ON DEMAND"}
            alt={"TALENTS ON DEMAND"}
            image={"assets/images/services/w/ads-click.png"}
            url={"#"}
          />
          <ServiceBox
            title={"PRODUCT MANAGEMENT"}
            alt={"PRODUCT MANAGEMENT"}
            image={"assets/images/services/w/volunteer-activism.png"}
            url={"#"}
          />
          <ServiceBox
            title={"DISCOVERY WORKSHOP"}
            alt={"DISCOVERY WORKSHOP"}
            image={"assets/images/services/w/travel-explore.png"}
            url={"#"}
          />
          <ServiceBox
            title={"LATEST TECHNOLOGY TRAINING"}
            alt={" LATEST TECHNOLOGY TRAINING"}
            image={"assets/images/services/w/magic-button.png"}
            url={"#"}
          />
          <ServiceBox
            title={"UIUX DESIGN"}
            alt={"UIUX DESIGN"}
            image={"assets/images/services/w/dashboard.png"}
            url={"#"}
          />
          <ServiceViewAllBtn url={"#"} />
        </div>
      </div>
    </div>
  );
};

ServiceSection.propTypes = {};

export default ServiceSection;
