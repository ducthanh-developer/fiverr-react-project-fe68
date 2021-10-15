import callApi from "utils/callApi";
import callApiPatch from "utils/callApiPatch";
import { ThongTinDat } from "_core/models/ThongTinDat";

const fiverrApi = {
    fetchAllJobFiverrApi() {
      return  callApi(`jobs`);
      
    },
    //detailJobs
    fetchTittleFiverrApi(jobId) {
      return  callApi(`jobs/${jobId}?`);
      
    },
    //
    fetchBookingJob(jobId, thongTinDat = new ThongTinDat()){
      return callApiPatch(`jobs/booking/${jobId}?`, thongTinDat);

    }
}


export default fiverrApi;