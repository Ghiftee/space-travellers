import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Badge,
  Button,
  Image,
} from 'react-bootstrap';
import { reserveRocket, cancelReservation } from '../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleReserveCancelation = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <li key={rocket.id} className="d-flex m-2 p-1">
      <Image src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="w-25 ms-2 me-3" />
      <div className="flex-grow-3">
        <h2>{rocket.rocket_name}</h2>
        <p>
          {rocket.reserved && <Badge bg="success" className="me-2">Reserved</Badge>}
          {rocket.description}
        </p>
        {rocket.reserved
          ? <Button variant="outline-secondary" onClick={() => handleReserveCancelation(rocket.id)}>Cancel Reservation</Button>
          : <Button variant="primary" onClick={() => handleReserve(rocket.id)}>Reserve Rocket</Button>}
      </div>
    </li>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};
