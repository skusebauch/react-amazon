import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/react-5453f/us-central1/api", // the api cloud functino url
});

export default instance;
