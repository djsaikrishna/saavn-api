import axios from "axios";
import { queryAndHeaders } from "../base.js";

const fetch = async (call, givenParams) => {
   const { params, headers } = queryAndHeaders(call);

   const response = await axios.get("https://www.jiosaavn.com/api.php", {
      params: {
         ...params,
         ...givenParams,
      },
      headers,
   });
   return response.data;
};

export default fetch;
