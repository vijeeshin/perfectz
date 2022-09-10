import React from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "../../utils/useWindowDimensions";

const SuccessSection = ({ data }) => {
  const { width } = useWindowDimensions();
  const chunks = data?.title?.split(" ");

  return (
    <div className="section-1">
      <div className={width > 768 ? "container" : "container px-5"}>
        <div className="d-block d-sm-none">
          <div className="row">
            <div className="col">
              <div className="client-success"></div>
            </div>
            <div className="col">
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
                {chunks.length > 0 && (
                  <div className="text-1">
                    {chunks.map((chunk, index) =>
                      index === 0 ? (
                        <span key={`success-${index}`}>
                          <span>{chunk}</span>
                          <br />
                        </span>
                      ) : (
                        <span key={`success-${index}`}>{chunk}</span>
                      )
                    )}
                  </div>
                )}
              </div>
              <div className="text-2">{data.description}</div>
              <div className="action">
                <a href={data.url} className="btn btn-primary">
                  <span>{data.buttonTitle}</span>
                  <img
                    src={`${window.location.origin}/assets/images/arrow-forward-ios.png`}
                  />
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
