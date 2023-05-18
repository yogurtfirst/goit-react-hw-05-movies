import axios from 'axios';

const API_KEY = 'd3ec04061e411f67d0c4daad21c62464';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendMovies = async () => {
  const response = await axios.get(`trending/movie/day?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return response.data.results;
};