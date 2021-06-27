import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd44c0ad3a4cf4f6a7786676c3d0cda10';

const fetch = (typeReq = 'trending/movie/day', options) => {
  const searchParams = new URLSearchParams({
    ...options,
    api_key: API_KEY,
  });
  return axios
    .get(`${BASE_URL}/${typeReq}?${searchParams}`)
    .then(res => res.data);
};

export default fetch;
