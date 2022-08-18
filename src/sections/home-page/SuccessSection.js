import React from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "../../utils/useWindowDimensions";

const SuccessSection = (props) => {
  const { width } = useWindowDimensions();

  return (
    <div className="section-1">
      <div className={width > 768 ? "container" : "container px-5"}>
        <div className="d-block d-sm-none">
          <div className="row">
            <div className="col">
              <div className="client-success"></div>
            </div>
            <div className="col">
              <div className="text-1">
                COMPLETE
                <br />
                CLIENT SUCCESS
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col d-none d-sm-block">
            <div className="client-success"></div>
          </div>
          <div className="col">
            <div className="client-success-text">
              <div className="text-1 d-none d-sm-block">
                COMPLETE
                <br />
                CLIENT SUCCESS
              </div>
              <div className="text-2">
                Count on PERFECTZ DIGITAL to deliver essential solutions and
                measurable results again and again
              </div>
              <div className="action">
                <a href="/contact" className="btn btn-primary">
                  <span>KNOW MORE ABOUT US</span>
                  <img src="assets/images/arrow-forward-ios.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SuccessSection.propTypes = {};

export default SuccessSection;
