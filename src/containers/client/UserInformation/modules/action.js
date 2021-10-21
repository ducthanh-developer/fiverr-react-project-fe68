import fiverrApi from "apis/fiverrApi";
import { FETCH_USER_LIST_JOBS_SUCCESS } from "./type";


// export const actLayCongViecChiTiet = (tittleJob) => ({
//   type: FETCH_TITTLE_SUCCESS,
//   payload: tittleJob,
// });


export const actLayDanhSachCongViecNguoiDung = (userJobs) => ({
  type: FETCH_USER_LIST_JOBS_SUCCESS,
  payload: userJobs,
});


export const actGetUserListJobs= () => {
  console.log("object", );
  return(dispatch)=>{
    fiverrApi
    .fetchUserListJobsApi()
    .then(result=>{
      dispatch(actLayDanhSachCongViecNguoiDung(result.data))
      console.log("result", result.data)
    })
    .catch(error=>{console.log("errrhhh", error.response?.data);});
  }
}
