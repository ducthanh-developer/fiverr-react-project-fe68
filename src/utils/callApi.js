import axios from "axios";
// import { BASE_URL } from "settings/apiConfig";

const callApi = (endpoint, method = "GET", data = null) => {
  return axios({
    url: `api/${endpoint}`,
    method,
    data,
    headers: {
      tokenByClass:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjgiLCJIZXRIYW5TdHJpbmciOiIwNS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDY0Mzg0MDAwMDAiLCJuYmYiOjE2MTc5ODc2MDAsImV4cCI6MTY0NjU4NjAwMH0.rmNHCCoHWfPP3VnrGmrmn3_CDUS9NnNwcEeBD_71ylk",
    },
  });
};

export default callApi;
