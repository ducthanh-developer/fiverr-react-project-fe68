
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
  console.log("object", jobId);
  return(dispatch)=>{
    fiverrApi
    .fetchTittleFiverrApi(jobId)
    .then(result=>{
      dispatch(actLayCongViecChiTiet(result.data))
    })
    .catch(error=>{console.log("errrhhh", error.response?.data);});
  }
}

export const actGetComment= () => {
  return(dispatch)=>{
    fiverrApi
    .fetchCommentApi()
    .then(result=>{
      dispatch(actLayCommentSuccess(result.data))
      console.log("object", result.data)
    })
    .catch(error=>{console.log("errrhhh", error.response?.data);});
  }
}

