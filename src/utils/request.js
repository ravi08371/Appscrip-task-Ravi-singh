import axios from "axios";

export const request = async (method, payload, url) => {
  try {
    var config = {
      maxBodyLength: Infinity,
      url,
      payload,
      method,
    };

    if (!url) {
      throw new Error("Url is not present");
    }

    if (!method) {
      throw new Error("method not present");
    }
    let axiosResp = await axios(config);
    let respData = axiosResp.data;
    return respData;
  } catch (err) {
    return err;
  }
};
