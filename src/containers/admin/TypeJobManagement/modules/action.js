import fiverrApi from "apis/fiverrApi";
import { FETCH__LIST__TYPE__JOBS__SUCCESS, FETCH__LIST__TYPE__JOBS__FAIL } from "./type";

const actListTypeJobsSuccess = (listTypeJob) => ({
    type: FETCH__LIST__TYPE__JOBS__SUCCESS,
    payload: listTypeJob,
});

export const actListTypeJobsFail = (error) => ({
    type: FETCH__LIST__TYPE__JOBS__FAIL,
    payload: error,
})


export const actListTypeJob = () => {
    return dispatch => {
        fiverrApi.fetchListTypeJobApi()
        .then((response) => {
            dispatch(actListTypeJobsSuccess(response.data))
        })
      .catch((error) => {
          dispatch(actListTypeJobsFail(error))
      })

    }

}
