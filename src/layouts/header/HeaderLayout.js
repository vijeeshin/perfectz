import React from "react";
import PropTypes from "prop-types";
import HeaderSection from "../../sections/header";
import { Config } from "../../config/Config";
export const HeaderLayout = () => {
  return (
    <div className="header">
      <div className="container">
        <HeaderSection
          logoImage={"assets/images/logo.png"}
          logoAlt="Perfectz Logo"
          logoUrl={Config.url}
          emailAddress={Config.emailAddress}
        />
      </div>
    </div>
  );
};
