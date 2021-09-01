import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
} from 'react-bootstrap';
import { cancelReservation } from '../redux/rockets/rockets';

const Profile = () => {
  const rocketState = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  return (
    <Container fluid className="border-top pt-2 w-100">
      <Row>
        <Col>
          <h2>Missions</h2>
        </Col>
        <Col>
          <h2>My Rockets</h2>
          <ListGroup>
            {rocketState.filter((rocket) => rocket.reserved).length === 0
              ? <ListGroup.Item>No rockets reserved </ListGroup.Item>
              : rocketState.filter((rocket) => rocket.reserved).map((rocket) => (
                <ListGroup.Item key={rocket.id} className="list-group-item d-flex justify-content-between">
                  {rocket.rocket_name}
                  {' '}
                  <Button variant="danger" onClick={() => dispatch(cancelReservation(rocket.id))}>Cancel Reservation</Button>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
