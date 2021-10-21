import {
  FETCH_LOGIN_SUCCESS,
  LOGOUT,
  //   FETCH_LOGIN_FAIL,
  //   FETCH_LOGIN_RESQUEST,
} from "./types";
import { message } from "antd";
import fiverrApi from "apis/fiverrApi";

export const actFetchMovieLoginSuccess = (userLogin) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: userLogin,
});

export const loginAction = (user, history) => {
  return (dispatch) => {
    fiverrApi
      .fetchMovieUserLoginApi(user)
      .then((rs) => {
        const { content } = rs.data;
        message.success("Xin chao " + content.hoTen, 2);
        console.log("object user", user);
        dispatch(actFetchMovieLoginSuccess(content));
        if (content.maLoaiNguoiDung === "QuanTri") {
          history.push("/Admin/MovieManager");
        } else {
          history.push("/");
        }
        console.log("OK 200 Login");
      })
      .catch((err) => {
        message.error(err.response.data);
        console.log("Lỗi Login");
      });
  };
};

export const actLogout = () => ({
  type: LOGOUT,
  payload: null,
});
