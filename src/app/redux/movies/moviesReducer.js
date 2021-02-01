import { SET_NEW_URL } from './moviesTypes';

const initialState = {
  fetchUrl: 'https://academy-video-api.herokuapp.com/content/free-items'
};

function moviesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_NEW_URL: {
      console.log(state, payload);
      return { fetchUrl: payload.newUrl };
    }
    default:
      return state;
  }
}

export default moviesReducer;
