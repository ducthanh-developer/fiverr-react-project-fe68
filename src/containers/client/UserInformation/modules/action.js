import fiverrApi from "apis/fiverrApi";
// import { FETCH__HISTORY__JOBS__SUCCESS } from "../HistoryJobs/modules/type";
import { FETCH_USER_LIST_JOBS_SUCCESS, FETCH__HISTORY__JOBS__SUCCESS, FETCH__UPLOAD__SUCCESS } from "./type";


// export const actLayCongViecChiTiet = (tittleJob) => ({
//   type: FETCH_TITTLE_SUCCESS,
//   payload: tittleJob,
// });


export const actLayDanhSachCongViecNguoiDung = (detailUser) => ({
  type: FETCH_USER_LIST_JOBS_SUCCESS,
  payload: detailUser,
});

export const actLayDanhSachCongViecNguoiDungFail = (error) => ({
  type: FETCH_USER_LIST_JOBS_SUCCESS,
  payload: error,
});

export const actFetchHistorySuccess = (historyJobs) => {
  return {
    type: FETCH__HISTORY__JOBS__SUCCESS,
    payload: historyJobs,
  }
}

export const actUploadImgSuccess = (uploadImg) => {
  return {
    type: FETCH__UPLOAD__SUCCESS,
    payload: uploadImg,
  }
}
export const actGetUserListJobs = (userId) => {
  console.log("object",);
  return (dispatch) => {
    fiverrApi
      .fetchUserListJobsApi(userId)
      .then(result => {
        dispatch(actLayDanhSachCongViecNguoiDung(result.data))
        console.log("result", result.data)
      })
      .catch(error => { console.log("errrhhh", error.response?.data); });
  }
}

export const actFetchAddUserInformation = (values, idUser, token) => {
  
  return async (dispatch) => {
    try {
      let { data } = await fiverrApi.fetchAddUserInformation(values, idUser, token);
      console.log("actionvalueshhh", values)
      alert("Thêm Thành Công")

      console.log("dta", data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};



// export const actEditUser = (values, idUser) => {
//   console.log("idUseriii", idUser)
//   console.log("values action", values)
//   return async (dispatch) => {
//     try {
//       let res = await fiverrApi.editUserApi(idUser, values);
//       console.log("values action", values)
//       dispatch(actGetUserListJobs())
//       console.log('res', res.data)
//       alert("Cập nhât thành công");

//     } catch (error) {
//       console.log(error.response?.date)

//     }
//   }
// }
export const actHistoryJobsUser = (token) => {
  return (dispatch) => {
    fiverrApi
      .fetchHistoryJobBookingApi(token)
      .then(response => {
        dispatch(actFetchHistorySuccess(response.data))
      })
      .catch(error => { console.log("errrhhh", error.response?.data); })
  }
}


export const actUploadImg = (formData, user, token) => {
  return (dispatch) => {
    fiverrApi.fetchUploadImgApi(formData, user, token)
      .then(response => {
        dispatch(actUploadImgSuccess(response.data))
        console.log("result", response.data);
        alert("Thêm Thành Công")
      })

      .catch(error => { console.log("errrhhh", error.response?.data); })
  }
}