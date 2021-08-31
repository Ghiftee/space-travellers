import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions, missions } from '../redux/missions/missions';

export default function Missions() {
  const dispatch = useDispatch();
  const allMissions = useSelector(missions);

  useEffect(() => {
    dispatch(fetchMissions);
  }, [fetchMissions]);
}
