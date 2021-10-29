// import axios from "axios";

// const callApi = (endpoint, method = "GET", data = null) => {
//   return axios({
//     url: `/${endpoint}`,
//     method,
//     data,
//     headers: {
//       tokenByClass:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjgiLCJIZXRIYW5TdHJpbmciOiIwNS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDY0Mzg0MDAwMDAiLCJuYmYiOjE2MTc5ODc2MDAsImV4cCI6MTY0NjU4NjAwMH0.rmNHCCoHWfPP3VnrGmrmn3_CDUS9NnNwcEeBD_71ylk",
//     },
//   });
// };

// export default callApi;


// import axios from "axios";
// import { TOKEN, TOKENBYCLASS } from "settings/apiConfig";

// const callApi = (endpoint, method = "GET", data = null ) => {
//   return axios({
//     url: `${endpoint}`,
//     method,
//     data,
//     headers: {
//       token: TOKEN,
//       tokenByClass: TOKENBYCLASS,
//     },
//   });
// };

// export default callApi;

import axios from "axios";

const callApi= (
  endpoint = null,
  data = null,
  headers="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdhOWM2ZDA3ZmUwMTAwMWNhYmNhMzciLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYzNTQ3MTc3NH0.IeqqcL4yQcRJXbQWGuN_1mcv1A-MvIuGK3-OkopCMhg"
) => {
  return axios({
    url: `/${endpoint}`,
    method: "GET",
    data,
    headers: {
      token: `${headers}`,
      tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjgiLCJIZXRIYW5TdHJpbmciOiIwNS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDY0Mzg0MDAwMDAiLCJuYmYiOjE2MTc5ODc2MDAsImV4cCI6MTY0NjU4NjAwMH0.rmNHCCoHWfPP3VnrGmrmn3_CDUS9NnNwcEeBD_71ylk"
    },
  });
};

export default callApi;
