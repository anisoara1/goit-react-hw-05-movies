import axios from 'axios';

//Cheie unică de acces la API-ul Themoviedb.org
const KEY = '31f983f348449a195193bb21b3bde7b3';

//O funcție care preia o listă de filme populare (Home page)
export const fetchTrends = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
  const { data } = await axios({
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });
  return data;
};

//O funcție care preia informații despre un anumit film (pentru pagina MovieDetails)
export const fetchMovie = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

//O funcție care preia o listă de filme după cuvinte cheie (pentru pagina Filme)
export const fetchMovies = async query => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
  const { data } = await axios({
    params: {
      api_key: KEY,
      query,
    },
  });
  return data;
};

//O funcție care preia informații despre distribuția unui anumit film (pentru componenta Cast)
export const fetchCast = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

//O funcție care preia informații despre recenzii pentru un anumit film (pentru componenta Recenzii)
export const fetchReviews = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

//Exemple de cereri corecte
// https://api.themoviedb.org/3/movie/447277?api_key=31f983f348449a195193bb21b3bde7b3

// https://api.themoviedb.org/3/trending/movie/day?api_key=31f983f348449a195193bb21b3bde7b3

//https://api.themoviedb.org/3/movie/447277/reviews?api_key=31f983f348449a195193bb21b3bde7b3
