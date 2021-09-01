import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap';
import { cancelReservation } from '../redux/rockets/rockets';
import { missions, toggleMissionState } from '../redux/missions/missions';

const Profile = () => {
  const allMissions = useSelector(missions);
  const dispatch = useDispatch();

  const leaveMission = (e) => {
    dispatch(toggleMissionState({ mission_id: e.target.id }));
  };

  const reservedMissions = allMissions.filter((mission) => mission.reserved).map(
    (mission) => (
      <ListGroupItem key={mission.mission_id} className="d-flex align-items-center justify-content-between">
        {mission.mission_name}
        <Button variant="outline-danger" id={mission.mission_id} onClick={leaveMission}>Leave&nbsp;Mission</Button>
      </ListGroupItem>
    ),
  );
  const rocketState = useSelector((state) => state.rocketsReducer);
  return (
    <Container fluid className="border-top w-100 pt-2">
      <Row>
        <Col xs={12} md={6}>
          <h4 className="ps-2 pb-2">My Missions</h4>
          <Card>
            <ListGroup>
              {reservedMissions.length > 0 ? reservedMissions : (
                <ListGroupItem>
                  No Missions Joined
                </ListGroupItem>
              )}
            </ListGroup>
          </Card>
        </Col>
        <Col xs={12} md={6}>
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
