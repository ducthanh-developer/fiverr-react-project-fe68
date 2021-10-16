
import axios from "axios";

const callApiPatch = (
  endpoint = null,
  data = null,
  headers="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTVlNTE2OTY5ZTcwODAwMWM5NGFhM2EiLCJlbWFpbCI6ImR1Y3RoYW5oLmRldmVsb3BlckBnbWFpbC5jb20iLCJyb2xlIjoiQ0xJRU5UIiwiaWF0IjoxNjM0MjgyNzE2fQ.JMIgDd6KlLfA2l1CnyBlJDKGfR4Kk54reqlWg9eZGhs"
) => {
  return axios({
    url: `/${endpoint}`,
    method: "PATCH",
    data,
    headers: {
      token: `${headers}`,
      tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjgiLCJIZXRIYW5TdHJpbmciOiIwNS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDY0Mzg0MDAwMDAiLCJuYmYiOjE2MTc5ODc2MDAsImV4cCI6MTY0NjU4NjAwMH0.rmNHCCoHWfPP3VnrGmrmn3_CDUS9NnNwcEeBD_71ylk"
    },
   
  });
};

export default callApiPatch;
