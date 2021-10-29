import callApi from "utils/callApi";

const fiverrApi = {
  fetchTittleFiverrApi(jobId) {
    return callApi(`jobs/${jobId}`);
  },
  fetchListJobsApi(){
    return callApi('jobs');
  },
  fetchListTypeJobsApi(){
    return callApi('type-jobs')
  }
};

export default fiverrApi;
