import fiverrApi from "apis/fiverrApi";
// import { FETCH__HISTORY__JOBS__SUCCESS } from "../HistoryJobs/modules/type";
import { FETCH_USER_LIST_JOBS_SUCCESS,FETCH__HISTORY__JOBS__SUCCESS } from "./type";


// export const actLayCongViecChiTiet = (tittleJob) => ({
//   type: FETCH_TITTLE_SUCCESS,
//   payload: tittleJob,
// });


export const actLayDanhSachCongViecNguoiDung = (userJobs) => ({
  type: FETCH_USER_LIST_JOBS_SUCCESS,
  payload: userJobs,
});


export const actFetchHistorySuccess=(historyJobs) => {
  return{
      type: FETCH__HISTORY__JOBS__SUCCESS,
      payload:historyJobs,
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

export const actFetchAddUserInformation = (values) => {
  return async (dispatch) => {
    try {
      let { data } = await fiverrApi.fetchAddUserInformation(values);
      console.log("actionvalueshhh", values)
      console.log("dta", data);
      alert("Thêm Thành Công")

    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const actHistoryJobsUser =()=>{
  return (dispatch)=>{
      fiverrApi
      .fetchHistoryJobBookingApi()
      .then(response=>{
          dispatch(actFetchHistorySuccess(response.data))
      })
      .catch(error=>{console.log("errrhhh", error.response?.data);})
  }
}