
export interface GetCurrentWeatherDto {
  pageNo: number;
  dataType: string ;
  numOfRows: number;
  base_date: string;
  base_time: number[];
  nx: number;
  ny: number;
}
