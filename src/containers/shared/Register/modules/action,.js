import fiverrApi from 'apis/fiverrApi';
import { FETCH__REGISTER__FAIL, FETCH__REGISTER__SUCCESS } from './type';

const actRegisterSuccess = (registerUser) => ({
  type: FETCH__REGISTER__SUCCESS,
  payload: registerUser,
});

const actRegisterFail = error => ({
  type: FETCH__REGISTER__FAIL,
  payload: error,
});

export const actRegister = (history, register,values ) => {
  return dispatch => {
    fiverrApi
    .registerAPi(register, values)
      .then(response => {
        dispatch(actRegisterSuccess(response.data));
        console.log("1",values)
        console.log(response.data)
        console.log("object", response.data)
        history.push('/login');
      })
      .catch(error => {
        dispatch(actRegisterFail('Unable to login!'));
        console.log("err", error.response?.data)
      });
  };
};
