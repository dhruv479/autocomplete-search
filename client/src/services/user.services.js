import api from "./api.interface";
import URL from "./url";

export const getUserSearchService = ({ text = "" }) =>
  api
    .get(URL.buildUrl("USER_SEARCH", {}, { text }))
    .then((response) => response.data)
    .catch((error) => error.response.data);
