import callApi from "utils/callApi";
import callApiPatch from "utils/callApiPatch";
import callApiPost from "utils/callApiPost";
import callApiPut from "utils/callApiPut";
import { ThongTinDat, User } from "_core/models/ThongTinDat";

const fiverrApi = {
  // api 20
  fetchListJobsApi() {
    return callApi("jobs");
  },
  // api 14
  fetchListTypeJobsApi() {
    return callApi("type-jobs");
  },
  // api 17
  fetchTypeJobDetailApi(typeId){ 
    return callApi(`type-jobs/${typeId}`)
  },
  // api 25
  fetchListJobByTypeApi(typeId){
    return callApi(`jobs/by-type?type=${typeId}&skip=0&llimit=10`)
  },
  fetchDetailFiverrApi(jobId) {
    return callApi(`jobs/${jobId}`);
  },
  fetchBookingJob(jobId, thongTinDat = new ThongTinDat()) {
    return callApiPatch(`jobs/booking/${jobId}`);
  },
  fetchCommentApi(jobId, user = new User()) {
    return callApi(`comments/by-job/${jobId}`);
  },
  // userInformation
  fetchUserListJobsApi(userId) {
    return callApi(`users/${userId}`);
  },
  fetchAddUserInformation(userId) {
    return callApiPut(`users/${userId}`);
  },
  fetchListJobsBooking() {
    return callApi(`jobs/by-user`);
  },
  //historyJobs
  fetchHistoryJobBookingApi() {
    return callApi(`jobs/by-user`);
  },
  loginApi(user) {
    return callApiPost(`auth/signin`, user);
  },
  registerAPi(register) {
    return callApiPost(`auth/signup`, register);
  },
};
export default fiverrApi;
