import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  Table, Container, Badge, Button,
} from 'react-bootstrap';
import { fetchMissions, missions } from '../redux/missions/missions';

export default function Missions() {
  const dispatch = useDispatch();
  const allMissions = useSelector(missions);

  useEffect(() => {
    dispatch(fetchMissions);
  }, [fetchMissions]);

  const missionComponents = allMissions.map((mission) => (
    <tr key={mission.mission_id}>
      <td><b>{mission.mission_name}</b></td>
      <td>{mission.description}</td>
      <td className="px-4 align-middle">
        <Badge className="bg-secondary">NOT A MEMBER</Badge>
      </td>
      <td className="px-4 align-middle">
        <Button variant="outline-secondary">Join&nbsp;Mission</Button>
      </td>
    </tr>
  ));
  return (
    <Container fluid>
      <Table className="my-3 table-bordered table-striped">
        <thead>
          <tr>
            <td><b>Mission</b></td>
            <td><b>Description</b></td>
            <td><b>Status</b></td>
            <td />
          </tr>
        </thead>
        <tbody>
          {missionComponents}
        </tbody>
      </Table>
    </Container>
  );
}
