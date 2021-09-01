import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  Table, Container, Badge, Button,
} from 'react-bootstrap';
import { fetchMissions, joinAMission, missions } from '../redux/missions/missions';

export default function Missions() {
  const dispatch = useDispatch();
  const allMissions = useSelector(missions);

  useEffect(() => {
    dispatch(fetchMissions);
  }, [fetchMissions]);

  const joinMission = (e) => {
    dispatch(joinAMission({ mission_id: e.target.id }));
  };

  const missionComponents = allMissions.map((mission) => (
    <tr key={mission.mission_id}>
      <td><b>{mission.mission_name}</b></td>
      <td>{mission.description}</td>
      <td className="px-4 align-middle">
        {
          mission.reserved ? (
            <Badge className="bg-info">Active Member</Badge>
          ) : (
            <Badge className="bg-secondary">NOT A MEMBER</Badge>
          )
        }
      </td>
      <td className="px-4 align-middle">
        <Button variant="outline-secondary" id={mission.mission_id} onClick={joinMission}>Join&nbsp;Mission</Button>
      </td>
    </tr>
  ));
  return (
    <Container fluid className="table-responsive-sm">
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
