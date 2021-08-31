import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <li key={rocket.id} className="d-flex m-2 p-1">
    <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="w-25 ms-2 me-3" />
    <div className="flex-grow-3">
      <h2>{rocket.rocket_name}</h2>
      <p>{rocket.description}</p>
      <button type="button" className="btn btn-primary">Reserve Rocket</button>
    </div>
  </li>
);

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf().isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
