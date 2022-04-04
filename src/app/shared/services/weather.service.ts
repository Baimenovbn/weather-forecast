import { Injectable } from '@angular/core';
import { rests } from "../../core/constants/rests";
import {HttpClient} from "@angular/common/http";
import {ICoordinates} from "../../core/models/interfaces/coordinates.interface";
import {Observable} from "rxjs";
import {ICitySearchResponse} from "../../core/models/interfaces/city-search-response";
import {ICityWeatherResponse} from "../../core/models/interfaces/city-weather-response.interface";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) {}

  getCityByName(city: string): Observable<ICitySearchResponse[]> {
    return this.http.get<ICitySearchResponse[]>(rests.get_coords, { params: { q: city }})
  }

  getForecast(coords: ICoordinates, isHourly= true): Observable<ICityWeatherResponse> {
    return this.http.get<ICityWeatherResponse>(isHourly ? rests.weather.get_hourly : rests.weather.get_daily, {
      params: {
        lat: coords.latitude,
        lon: coords.longitude
      }
    });
  }
}
