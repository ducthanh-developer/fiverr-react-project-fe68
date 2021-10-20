import callApi from "utils/callApi";
import callApiPatch from "utils/callApiPatch";
import { ThongTinDat, User } from "_core/models/ThongTinDat";

const fiverrApi = {
    fetchAllJobFiverrApi() {
      return  callApi(`jobs`);
      
    },
    //detailJobs
    fetchTittleFiverrApi(jobId) {
      return  callApi(`jobs/${jobId}?`);
    },
    fetchBookingJob(jobId, thongTinDat= new ThongTinDat()) { 
      return callApiPatch(`jobs/booking/${jobId}`);
    },
    fetchCommentApi(jobId, user =new User()){
      return callApi(`comments/by-job/${jobId}`)
    },
    // userInformation
    fetchUserListJobsApi(){
      return callApi(`users/614600386a0800001c187e11`)
    }
}

export default fiverrApi;