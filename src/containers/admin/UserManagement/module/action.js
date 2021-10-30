import fiverrApi from 'apis/fiverrApi';
import { FETCH__LIST__USER__SUCCESS } from './type';

const actListUserSuccess = (userList) => ({
  type: FETCH__LIST__USER__SUCCESS,
  payload: userList,
});


// const actDeleteSuccss = (userList) => ({
//   type: FETCH__LIST__USER__SUCCESS,
//   payload: userList,
// });

export const actListUserAdmin = () => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchListUser();

      console.log("result ", result);
      dispatch(actListUserSuccess(result.data));
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
};

export const actDeleteUser = (idUser) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.deleteUser(idUser);
      console.log("result ", result);
      dispatch(actListUserAdmin(result.data));
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
};
