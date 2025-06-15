import { request } from "@/utils/request";
import apiUrl from "@/config/ApiUrl";

const useCommon = () => {
  const fetchProducts = async () => {
    try {
      let productUrl = apiUrl.fetchProducts
      let method = "get";

      let response = await request(method, {}, productUrl);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchProducts,
  };
};

export default useCommon;
