import callApi from "utils/callApi";
import callApiPatch from "utils/callApiPatch";
import callApiPost from "utils/callApiPost";
import callApiPut from "utils/callApiPut";
import { ThongTinDat, User } from "_core/models/ThongTinDat";

const fiverrApi = {
  fetchAllJobFiverrApi() {
    return callApi(`jobs`);
  },
  fetchListJobsApi(){
    return callApi(`jobs`);
  },
  //detailJobs
  fetchTittleFiverrApi(jobId) {
    return callApi(`jobs/${jobId}`);
  },
  fetchBookingJob(jobId, thongTinDat = new ThongTinDat()) {
    return callApiPatch(`jobs/booking/${jobId}`);
  },
  fetchCommentApi(jobId, user = new User()) {
    return callApi(`comments/by-job/${jobId}`)
  },
  // userInformation
  fetchUserListJobsApi(userId) {
    return callApi(`users/${userId}`)
  },
  fetchAddUserInformation(userId) {
    return callApiPut(`users/${userId}`)
  },
  fetchListJobsBooking() {
    return callApi(`jobs/by-user`)
  },
  //historyJobs
  fetchHistoryJobBookingApi() {
    return callApi(`jobs/by-user`)
  },
  fetchUploadImg(formData){
    return callApi(`users/upload-avatar`, formData)
  },
  loginApi(user) {
    return callApiPost(`auth/signin`, user)
  },
  registerAPi(register) {
    return callApiPost(`auth/signup`,register)
  }
}
export default fiverrApi;
