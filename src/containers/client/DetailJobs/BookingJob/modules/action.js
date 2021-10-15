
import fiverrApi from 'apis/fiverrApi';
import {BOOKIING_JOB_SUCCESS} from '../../BookingJob/modules/type'


export const acBookingJob=(bookingJob) =>({
    type: BOOKIING_JOB_SUCCESS,
    payload: bookingJob,
})

export const actDatCongViec= ( thongTinDat) => {
    return(dispatch)=>{
      fiverrApi
      .fetchBookingJobApi(thongTinDat)
      .then(result=>{
        console.log(thongTinDat)
        alert("Booking Success!");
        dispatch(acBookingJob(result.data))
      })
      .catch(error=>{console.log("errrhhh", error.response?.data);});
    }
  }