
import fiverrApi from "apis/fiverrApi";
import { FETCH_TITTLE_SUCCESS } from "../modules/type";


export const actLayCongViecChiTiet = (tittleJob) => ({
  type: FETCH_TITTLE_SUCCESS,
  payload: tittleJob,
});
// export const actGetJobTittle = (jobId) => {
//   return async (dispatch) => {
//     try {
//       const result = await fiverrApi.fetchTittleFiverrApi(jobId);

//       console.log("result1111 ", result);
//       dispatch(actLayCongViecChiTiet(result.data));
//     } catch (error) {
//       console.log("saihhhh", error.response?.data);
//     }
//   };
// };





export const actGetJobTittle= (jobId) => {
  return(dispatch)=>{
    fiverrApi
    .fetchTittleFiverrApi(jobId)
    .then(result=>{
      dispatch(actLayCongViecChiTiet(result.data))
    })
    .catch(error=>{console.log("errrhhh", error.response?.data);});
  }
}

// export const actFetchMovieDetailApi = (movieId) => {
//   return (dispatch) => {
//       movieApi
//           .fetchMovieDetailApi(movieId)
//           .then((res) => {
//               const { content } = res.data;
//               dispatch(actFetchMovieDetailSuccess(content));
//           })
//           .catch(
//               (err) => console.log(err)
//           );
//   };
// };