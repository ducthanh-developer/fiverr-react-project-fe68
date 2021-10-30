import { FETCH__LIST__USER__FAIL, FETCH__LIST__USER__SUCCESS } from "./type";


const innitialState = {
  userList: [],
  error: null
};

 const listUserReducer = (state = innitialState, { type, payload }) => {
  switch (type) {
    case FETCH__LIST__USER__SUCCESS: {
      state.userList = payload;
      return { ...state };
    }
    case FETCH__LIST__USER__FAIL: {
      state.userList = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
export default listUserReducer;