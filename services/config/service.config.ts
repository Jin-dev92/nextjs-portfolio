import dotenv from 'dotenv';

dotenv.config();

export const SERVICE_CONFIG = {
  COMMON: {
    REACT_APP_SERVICE_KEY: process.env.REACT_APP_SERVICE_KEY,
    SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
  MOVIE: {
    REACT_APP_MOVIE_SERVICE_KEY: process.env.REACT_APP_MOVIE_SERVICE_KEY,
    REACT_APP_MOVIE_DB_API_KEY: process.env.REACT_APP_MOVIE_DB_API_KEY,
    REACT_APP_MOVIE_DB_API_ACCESS_TOKEN: process.env.REACT_APP_MOVIE_DB_API_ACCESS_TOKEN,
    REACT_APP_MOVIE_DB_IMAGE_ROOT: process.env.REACT_APP_MOVIE_DB_IMAGE_ROOT,
    REACT_APP_MOVIE_DB_API_ROOT_URL: process.env.REACT_APP_MOVIE_DB_API_ROOT_URL,
  },
  GAME: {},
  WEATHER: {
    REACT_APP_WEATHER_API_ROOT_URL: process.env.REACT_APP_WEATHER_API_ROOT_URL,
  },
};
