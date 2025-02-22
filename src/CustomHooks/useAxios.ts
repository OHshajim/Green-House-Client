import axios from "axios";

const axiosPublic = axios.create({
  //   baseURL: "https://spademeet.vercel.app",
  baseURL: "http://localhost:3000",
});
const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
