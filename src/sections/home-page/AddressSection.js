import React from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "../../utils/useWindowDimensions";

const AddressSection = (props) => {
  const { addresses, emailUrl, linkedInUrl } = props;
  const { width } = useWindowDimensions();
  return (
    <div className="section-10">
      <div className="container">
        <div className="logo">
          <img src="assets/images/logo.png" />
        </div>
        <div
          className={width > 768 ? "row justify-content-around" : "row px-5"}
        >
          {addresses
            ? addresses.map((address, index) => (
                <div className="col-auto" key={`${index}`}>
                  <a
                    className="address"
                    href={address.location}
                    target="_blank"
                  >
                    <div className="address-header">{address.title}</div>
                    <div className="address-body">
                      {address.body.replace(/(?:\r\n|\r|\n)/g, "<br />")}
                    </div>
                  </a>
                </div>
              ))
            : null}
        </div>
        <div className={width > 768 ? "links" : "links px-5"}>
          <div
            className="link"
            style={{ textAlign: width > 768 ? "center" : "left" }}
          >
            <label>Email:</label>
            <a href={`mailto:${emailUrl}`} target="_blank">
              {emailUrl}
            </a>
          </div>
          <div
            className="link"
            style={{ textAlign: width > 768 ? "center" : "left" }}
          >
            <label>Follow us:</label>
            <a href={linkedInUrl} target="_blank">
              <img src="assets/images/linkedin.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

AddressSection.propTypes = {
  addresses: PropTypes.arrayOf(PropTypes.object),
  emailUrl: PropTypes.string,
  linkedInUrl: PropTypes.string,
};

export default AddressSection;
