import callApi from "utils/callApi";

const fiverrApi = {
    fetchAllJobFiverrApi() {
      return  callApi(`jobs`);
      
    },
    fetchTittleFiverrApi(jobId) {
      return  callApi(`jobs/${jobId}?`);
      
    }
}


export default fiverrApi;