import ApiService from './api.service';
import { SERVICE_CONFIG } from '@/services/config/service.config';
import { CreateAxiosDefaults } from 'axios';

class MovieService extends ApiService {
  constructor() {
    const config: CreateAxiosDefaults = {
      // https://www.themoviedb.org/documentation/api
      baseURL: SERVICE_CONFIG.MOVIE.REACT_APP_MOVIE_DB_API_ROOT_URL,
      headers: {
        Authorization: `Bearer ${SERVICE_CONFIG.MOVIE.REACT_APP_MOVIE_DB_API_ACCESS_TOKEN}`,
      },
      params: {
        language: 'ko',
        include_image_language: 'ko',
      },
    };
    super(config);
  }

  getSearchMovieByQuery = (config: {}) => this.get<{}>(`/search/movie`, config);
  getPopularMovieList = (config: {}) => this.get(`/movie/popular`, config);
  getTopRatedMovieList = (config: {}) => this.get(`/movie/top_rated`, config);
  getGenresMovieList = (config: {}) => this.get(`/genre/movie/list`, config);
}

export default new MovieService();
