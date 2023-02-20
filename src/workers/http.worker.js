import axios from "axios";
import ERRORS from "../errors/errors.js";
import BASE_CALLS, { BASE_API_URL, BASE_URL } from "../utils/base.js";

class HttpWorker {
  constructor() {
    this.baseUrl = BASE_URL;
    this.baseCalls = BASE_CALLS;
    this.error = ERRORS;
    this.baseApiUrl = BASE_API_URL;
  }
  async http(call, isApiV4, params) {
    const responce = await axios.get(this.baseUrl, {
      params: {
        __call: call,
        api_version: isApiV4 === true ? 4 : undefined,
        _format: "json",
        _marker: "0",
        ctx: "wap6dot0",
        ...params,
      },
      headers: {
        authority: "www.jiosaavn.com",
        cookie: "DL=english;L=hindi%2Cenglish",
      },
    });

    return responce.data;
  }
}

export default HttpWorker;
