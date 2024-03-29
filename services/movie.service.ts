import ApiService, { createAxiosDefaults } from './api.service';
import { SERVICE_CONFIG } from '@/service/config/service.config';

class MovieService extends ApiService {
  constructor() {
    const config: createAxiosDefaults = {
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

export default MovieService;
