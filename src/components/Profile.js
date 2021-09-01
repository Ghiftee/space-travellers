import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  ListGroup,
} from 'react-bootstrap';

const Profile = () => {
  const rocketState = useSelector((state) => state.rocketsReducer);
  return (
    <Container>
      <Row>
        <Col>
          <h2>Missions</h2>
        </Col>
        <Col>
          <h2>My Rockets</h2>
          <ListGroup>
            {rocketState.filter((rocket) => rocket.reserved).length === 0
              ? <ListGroup.Item>No rockets reserved </ListGroup.Item>
              : rocketState.filter((rocket) => rocket.reserved).map((rocket) => <ListGroup.Item key={rocket.id} className="list-group-item">{rocket.rocket_name}</ListGroup.Item>)}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
