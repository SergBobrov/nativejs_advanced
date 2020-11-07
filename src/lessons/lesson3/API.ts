import axios from 'axios';

const configOMB = {
  baseURL: 'http://www.omdbapi.com/',
};
const key = '?apikey=5eb6f113';
const axiosInstance = axios.create(configOMB);

const API = {
  searchFilmsByTitle: (title: string): Promise<any> => {
    const query = `${key}&s=${title}`;
    return axiosInstance.get(query);
  },
  searchFilmsByType: (title: string, type: string) => {
  },
};


export default API;
