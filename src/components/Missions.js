import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missions';

export default function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions);
  }, [fetchMissions]);
  return (
    <p>All Missions</p>
  );
}
