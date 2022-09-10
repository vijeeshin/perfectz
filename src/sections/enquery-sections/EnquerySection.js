import React from "react";
import PropTypes from "prop-types";
import ContactUsForm from "../../forms/ContactUsForm";
import useWindowDimensions from "../../utils/useWindowDimensions";
import EnqueryForm from "../../forms/EnqueryForm";

const EnquerySection = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="section-9">
      <div className="container">
        <div className="text-1">Enroll Now</div>

        <EnqueryForm />
      </div>
    </div>
  );
};

export default EnquerySection;
