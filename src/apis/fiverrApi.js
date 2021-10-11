import callApi from "utils/callApi";

const fiverrApi = {
    fetchAllJobFiverrApi() {
      return  callApi(`jobs`);
      
    }
}

export default fiverrApi;