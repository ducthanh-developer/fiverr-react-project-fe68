import fiverrApi from "apis/fiverrApi";
import { FETCH__LIST__TYPE__JOBS__SUCCESS, FETCH__LIST__TYPE__JOBS__FAIL, FETCH__ADD__JOB__TYPE__FAIL, FETCH__ADD__JOB__TYPE__SUCCESS } from "./type";

const actListTypeJobsSuccess = (listTypeJob) => ({
    type: FETCH__LIST__TYPE__JOBS__SUCCESS,
    payload: listTypeJob,
});

export const actListTypeJobsFail = (error) => ({
    type: FETCH__LIST__TYPE__JOBS__FAIL,
    payload: error,
})

export const actAddTypeSuccess = (addJobType) => ({
    type: FETCH__ADD__JOB__TYPE__SUCCESS,
    payload: addJobType,
})
export const actAddTypeJobFail = (error) => ({
    type: FETCH__ADD__JOB__TYPE__FAIL,
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


export const actAddTypeJob = (jobType, values) => {
    return dispatch => {
        fiverrApi.createListTypeJobApi(jobType, values)
            .then((response) => {
                dispatch(actAddTypeSuccess(response.data))
            })
            .catch(error => { console.log("errrhhh", error.response?.data); })
    }
}

export const actDetailTypeJob = () => {
    return dispatch => {
        fiverrApi.detailTypeJobApi()
            .then((response) => {
                dispatch(actAddTypeSuccess())
            })
            .catch(error => {
                console.log("errrhhh", error.response
                )
            })
    }
}