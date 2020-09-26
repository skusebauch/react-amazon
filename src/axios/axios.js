import axios from "axios";

const instance = axios.create({
  baseURL: "...", // the api cloud functino url
});

export default instance;
