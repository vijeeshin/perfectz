import React from "react";
import PropTypes from "prop-types";
import ClientBox from "../../components/ClientBox";

const ClientSection = (props) => {
  const { clients, desc } = props;
  return (
    <div className="section-8">
      <div className="container">
        <div className="text-1">Our Clients</div>
        <div className="text-2">{desc}</div>
        <div className="row justify-content-between">
          {clients && clients.length > 0
            ? clients.map((client, index) => (
                <ClientBox
                  url={client.url}
                  image={client.image}
                  key={`${index}`}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

ClientSection.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.object).isRequired,
  desc: PropTypes.string.isRequired,
};

export default ClientSection;
