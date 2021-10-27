import callApi from "utils/callApi";
import callApiPatch from "utils/callApiPatch";
import callApiPost from "utils/callApiPost";
import callApiPut from "utils/callApiPut";
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
      return callApi(`users/6177e1e82b1032001c3f52a3`)
    },
    fetchAddUserInformation(formData){
      return callApiPut('users/6177e1e82b1032001c3f52a3', formData)
    },
    fetchListJobsBooking(){
      return callApi(`jobs/by-user`)
    },
    loginApi(user){
      return callApiPost(`auth/signin`,user)
    }
}

export default fiverrApi;