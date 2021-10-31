import callApi from "utils/callApi";
import callApiDelete from "utils/callApiDelete";
import callApiPatch from "utils/callApiPatch";
import callApiPost from "utils/callApiPost";
import callApiPut from "utils/callApiPut";
import { ThongTinDat, User } from "_core/models/ThongTinDat";

const fiverrApi = {
  fetchListJobsApi() {
    return callApi("jobs");
  },
  fetchListTypeJobsApi() {
    return callApi("type-jobs");
  },
  fetchTittleFiverrApi(jobId) {
    return callApi(`jobs/${jobId}?`);
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
  fetchUploadImgApi(formData){
    return callApiPost(`users/upload-avatar`, formData)
  },
  loginApi(user) {
    return callApiPost(`auth/signin`, user);
  },

  registerAPi(register) {
    return callApiPost(`auth/signup`, register);
  },

  //API ADMIN
  fetchListUser() {
    return callApi('users')
  },
  deleteUser(idUser){
    return callApiDelete(`users/${idUser}`)

  },
  createUserApi(){
    return callApiPost(`users`)
  }, 
  detailUserApi(idUser){
    return callApi(`users/${idUser}`)
  },
  editUserApi(idUser){
    return callApiPut(`users/${idUser}`)
  }
};
export default fiverrApi;
