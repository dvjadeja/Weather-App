import axios from "axios";

const API_KEY = "e82739e380b1acd404ad0c662982b2fa";
const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}`;

const getData = (query) => {
  return axios.get(`${URL}&query=${query}`);
};

export default getData;
