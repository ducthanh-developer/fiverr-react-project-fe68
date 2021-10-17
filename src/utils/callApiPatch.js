
import axios from "axios";

const callApiPatch = (
  endpoint = null,
  data = null,
  headers="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQ2MDAzODZhMDgwMDAwMWMxODdlMTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYzNDM4OTg5M30.LsTI3ZiINW2Cgv2RbV2cjX3GB-wplWUQUOAO6vH8vzw"
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
