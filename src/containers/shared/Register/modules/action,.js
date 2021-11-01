import fiverrApi from 'apis/fiverrApi';
import {  FETCH__REGISTER__SUCCESS } from './type';

const actRegisterSuccess = (registerUser) => ({
  type: FETCH__REGISTER__SUCCESS,
  payload: registerUser,
});


export const actRegister = (history, register, values) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.registerAPi(register, values);

      console.log("result ", result);
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
};
