import ApiService, { createAxiosDefaults } from './api.service';
import { GetCurrentWeatherDto } from './dto';
import { SERVICE_CONFIG } from '@/service/config/service.config';

class WeatherService extends ApiService {
  constructor() {
    const config: createAxiosDefaults = {
      baseURL: SERVICE_CONFIG.WEATHER.REACT_APP_WEATHER_API_ROOT_URL,
      params: {
        serviceKey: SERVICE_CONFIG.COMMON.REACT_APP_SERVICE_KEY,
      },
    };
    super(config);
  }
  getCurrentWeather = (config: GetCurrentWeatherDto) => {
    return this.get<{}, GetCurrentWeatherDto>(
      '/1360000/VilageFcstInfoService_2.0/getVilageFcst',
      config,
    );
  };
}
