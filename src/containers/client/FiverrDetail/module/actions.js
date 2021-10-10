
import fiverrApi from "apis/fiverrApi";
import { FETCH_DETAIL_JOB_SUCCESS } from "./types";


export const actFetchListSuccess = (jobDetail) => ({
  type: FETCH_DETAIL_JOB_SUCCESS,
  payload: jobDetail,
});
export const actGetJobDetail = () => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchAllJobFiverrApi();

      console.log("result ", result);
      dispatch(actFetchListSuccess(result.data));
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
};





// export const actGetJobDetail = () => {
//   return dispatch => {
//     fiverrApi.fetchAllJobFiverrApi()
//       .then(res => {
//         console.log(res.data.content);
//         dispatch({
//           type: FETCH_DETAIL_JOB_SUCCESS,
//           payload: res.data.content,
//         })
//       }).catch(error => {
//         console.log("sai ne", error.response.data)
//         dispatch({
//           type: FETCH_DETAIL_JOB_FAIL,
//           payload: error.response.data
//         })

//       })
//   }
// }