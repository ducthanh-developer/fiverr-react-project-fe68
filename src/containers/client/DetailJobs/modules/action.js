
import fiverrApi from "apis/fiverrApi";
import { FETCH_COMMENT_SUCCESS, FETCH_TITTLE_SUCCESS } from "../modules/type";


export const actLayCongViecChiTiet = (tittleJob) => ({
  type: FETCH_TITTLE_SUCCESS,
  payload: tittleJob,
});


export const actLayCommentSuccess = (commentJob) => ({
  type: FETCH_COMMENT_SUCCESS,
  payload: commentJob,
});


export const actGetJobTittle= (jobId) => {
  console.log("jobId", jobId);
  return(dispatch)=>{
    fiverrApi
    .fetchTittleFiverrApi(jobId)
    .then(result=>{
      dispatch(actLayCongViecChiTiet(result.data))
    })
    .catch(error=>{console.log("errrhhh", error.response?.data);});
  }
}

export const actGetComment = (jobId) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchCommentApi(jobId);

      console.log("resulthhhhh ", result);
      console.log('data', result.data);
      dispatch(actLayCommentSuccess(result.data));
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
};
