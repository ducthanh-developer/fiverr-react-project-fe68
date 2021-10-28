import axios from "axios";
import { TOKEN, TOKENBYCLASS } from "settings/apiConfig";

const callApi = (endpoint, method = "GET", data = null, token = TOKEN) => {
  return axios({
    url: `${endpoint}`,
    method,
    data,
    headers: {
      token,
      tokenByClass: TOKENBYCLASS,
    },
  });
};

export default callApi;
