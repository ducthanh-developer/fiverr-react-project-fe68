import fiverrApi from "apis/fiverrApi";
import { SET_LIST_JOB_BY_TYPE, SET_TYPE_JOB_DETAIL } from "./types";

export const actFetchTypeJobDetail = (typeId) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchTypeJobDetailApi(typeId);
      dispatch({
        type: SET_TYPE_JOB_DETAIL,
        payload: result.data,
      });
    } catch (errors) {
      console.log("Errors ", errors);
    }
  };
};

export const actFetchListJobByType = (typeId) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchListJobByTypeApi(typeId);
      dispatch({
        type: SET_LIST_JOB_BY_TYPE,
        payload: result.data,
      });
    } catch (errors) {
      console.log("Errors ", errors);
    }
  };
};