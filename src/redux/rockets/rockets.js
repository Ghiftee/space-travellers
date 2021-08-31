const FETCH_ROCKETS = 'space-travellers/rockets/FETCH_ROCKETS';
const RESERVE_ROCKET = 'space-travellers/rockets/RESERVE_ROCKET';
const initialState = [];
const baseAPI = 'https://api.spacexdata.com/v3/';

export const fetchRockets = () => async (dispatch) => {
  const fetched = await fetch(`${baseAPI}rockets`);
  const list = await fetched.json();
  const rockets = [];
  list.map((rocket) => rockets.push({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));

  dispatch({
    type: FETCH_ROCKETS,
    payload: rockets,
  });
};

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS: return [...action.payload];
    case RESERVE_ROCKET: return state.map((rocket) => {
      if (rocket.id !== action.payload) return rocket;
      return { ...rocket, reserved: true };
    });
    default:
      return state;
  }
};

export default reducer;
