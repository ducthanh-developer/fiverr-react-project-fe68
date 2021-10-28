import fiverrApi from 'apis/fiverrApi';
import { LOGIN_FAIL,  LOGIN_SUCCESS, LOGOUT } from '../modules/type';

const actLoginSuccess = currentUser => ({
  type: LOGIN_SUCCESS,
  payload: currentUser,
});

const actLoginFail = error => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const actLogin = (user, history) => {
  return dispatch => {
    fiverrApi
    .loginApi(user)
      .then(response => {
        dispatch(actLoginSuccess(response.data));
        console.log(response.data)
        history.push('/');
      })
      .catch(error => {
        dispatch(actLoginFail('Unable to login!'));
      });
  };
};
export const actLogout = () => ({
  type: LOGOUT,
  payload: null,
});
