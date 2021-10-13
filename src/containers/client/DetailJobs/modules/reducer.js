import { FETCH_TITTLE_FAIL, FETCH_TITTLE_SUCCESS } from "./type";


const initialState = {
  tittleJob:null,
  error: '',
};

const tittleJobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TITTLE_SUCCESS:
      state.tittleJob = payload;
      return { ...state, };
    case FETCH_TITTLE_FAIL:
      state.error = payload;
      return { ...state };
    default:
      return state;
  }
};

export default tittleJobReducer;