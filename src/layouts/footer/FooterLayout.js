import React from "react";
import PropTypes from "prop-types";

const FooterLayout = (props) => {
  const { name, url } = props;
  const date = new Date().getFullYear();
  return (
    <footer className="page-footer">
      <div className="container">
        <ul className="copyright">
          <li>&copy; {date.toString()}</li>
          <li>|</li>
          <li>
            <a href={url}>{name}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

FooterLayout.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default FooterLayout;
