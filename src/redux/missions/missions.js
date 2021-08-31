const apiEndpoint = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const ADD_MISSION = 'missions/ADD_MISSION';
const JOIN_MISSION = 'missions/JOIN_MISSION';

const fetchAllMissions = async () => {
  let res = await fetch(apiEndpoint);
  res = await res.json();
  return res;
};

const addMission = (mission) => ({
  type: ADD_MISSION,
  payload: mission,
});

export const joinAMission = (mission) => ({
  type: JOIN_MISSION,
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
  let newState;
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    case JOIN_MISSION:
      newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.mission_id) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    default:
      return state;
  }
};

export const missions = (state) => state.missionsReducer;
export default reducer;
