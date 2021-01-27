import { TOGGLE_MOVIE } from '../actionTypes';

const initialState = {
  //
};

function movies(state, action) {
  switch (action.type) {
    case TOGGLE_MOVIE: {
      const { id } = action.payload;
      return {
        ...state
      };
    }
    default:
      return state;
  }
}

export default movies;
