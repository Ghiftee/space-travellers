const FETCH_ROCKETS = 'space-travellers/rockets/FETCH_ROCKETS';
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS: return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
