import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Weather} from '../model/weather.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   /*****
    We should always take Url from Environment
    eg: baseUrl: string = environment.baseUrl
   *********/
  baseUrl =  "http://localhost:8080/rest/v1/weather-info/";
  constructor(private http: HttpClient) { }

  getWeather(cityName: string) {
      return this.http.get<Weather>(this.baseUrl + 'city?name='+ cityName);
    }

}
