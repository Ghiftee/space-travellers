const apiEndpoint = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const ADD_MISSION = 'rockets/ADD_MISSION';

const fetchAllMissions = async () => {
  let res = await fetch(apiEndpoint);
  res = await res.json();
  return res;
};

const addMission = (mission) => ({
  type: ADD_MISSION,
  payload: mission,
});

export const fetchMissions = async (dispatch, getState) => {
  if (getState().missionsReducer.length > 0) return;
  const missions = await fetchAllMissions();
  missions.forEach((mission) => {
    const newMission = {
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    };
    dispatch(addMission(newMission));
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
