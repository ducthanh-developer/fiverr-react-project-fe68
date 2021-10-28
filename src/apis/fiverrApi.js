import callApi from "utils/callApi";

const fiverrApi = {
  fetchTittleFiverrApi(jobId) {
    return callApi(`jobs/${jobId}?`);
  },
  fetchListJobsApi(){
    return callApi(`jobs`);
  }
};

export default fiverrApi;
