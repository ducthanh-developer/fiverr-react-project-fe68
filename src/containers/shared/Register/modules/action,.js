import fiverrApi from 'apis/fiverrApi';
import {  FETCH__REGISTER__SUCCESS } from './type';

const actRegisterSuccess = (registerUser) => ({
  type: FETCH__REGISTER__SUCCESS,
  payload: registerUser,
});


export const actRegister = (history, register) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.registerAPi(register);

      console.log("result ", result);
      dispatch(actRegisterSuccess(result.data));
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
};
