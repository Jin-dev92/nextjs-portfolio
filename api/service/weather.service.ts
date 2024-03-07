import APIService, {createAxiosDefaults} from "../APIService";
import {GetCurrentWeatherDto} from "./dto";

class WeatherService extends APIService {
  constructor() {
    const config: createAxiosDefaults = {
      baseURL: process.env.REACT_APP_WEATHER_API_ROOT_URL,
      params: {
        serviceKey: process.env.REACT_APP_SERVICE_KEY,
      },
    };
    super(config);
  }
  getCurrentWeather = (config: GetCurrentWeatherDto) => {
    return this.get<{}, GetCurrentWeatherDto>(
      "/1360000/VilageFcstInfoService_2.0/getVilageFcst",
      config,
    );
  };
}
