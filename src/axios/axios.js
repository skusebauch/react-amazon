import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-react-5453f.cloudfunctions.net/api",
  // http://localhost:5001/react-5453f/us-central1/api
});

export default instance;
