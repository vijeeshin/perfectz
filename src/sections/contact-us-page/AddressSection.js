import React from "react";
import PropTypes from "prop-types";

const AddressSection = (props) => {
  const { addresses, emailUrl, linkedInUrl } = props;
  return (
    <div className="section-10">
      <div className="container">
        <div className="logo">
          <img src="assets/images/logo.png" />
        </div>
        <div className="row justify-content-around">
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
        <div className="links">
          <div className="link">
            <label>Email:</label>
            <a href={`mailto:${emailUrl}`} target="_blank">
              {emailUrl}
            </a>
          </div>
          <div className="link">
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
