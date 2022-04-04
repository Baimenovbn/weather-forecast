import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, switchMap, takeUntil, tap} from 'rxjs';
import {SubscribeDestroyerDirective} from '../../../shared/subscribe-destroyer.directive';
import {EForecastMode} from '../../../core/models/enums/forecast-filter-type.enum';
import {ISelect} from '../../../core/models/interfaces/select.interface';
import {WeatherService} from "../../../shared/services/weather.service";
import {IColumn} from '../../../core/models/interfaces/column.interface';
import {messages} from '../../../core/constants/messages';
import {hourlyCols} from '../../../core/constants/hourly-cols';
import {hourlyHeaderKeys} from '../../../core/models/enums/hourly-headers.enum';
import {dailyCols} from '../../../core/constants/daily-cols';
import {ICityWeatherResponse} from '../../../core/models/interfaces/city-weather-response.interface';
import {dailyHeadersKeys} from '../../../core/models/enums/daily-headers.enum';

const CELCIUS_SIGN = '°';

@Component({
  selector: 'app-forecast-by-city-controller',
  templateUrl: './forecast-by-city-controller.component.html',
  styleUrls: ['./forecast-by-city-controller.component.scss']
})
export class ForecastByCityControllerComponent extends SubscribeDestroyerDirective implements OnInit {
  searchControl = new FormControl('');

  private _currentMode = EForecastMode.BY_HOUR;
  get currentMode() {
    return this._currentMode;
  }
  set currentMode(mode: EForecastMode) {
    this._currentMode = mode;
    this.cols = (this.currentMode === EForecastMode.BY_HOUR) ? hourlyCols : dailyCols;
    this.rows = (this.currentMode === EForecastMode.BY_HOUR) ? this.hourlyRows : this.dailyRows;
  }

  cities: string[] = [];

  filterButtonsConfig: ISelect<EForecastMode>[] = [
    {
      label: 'By Hour',
      value: EForecastMode.BY_HOUR,
    },
    {
      label: 'By Day',
      value: EForecastMode.BY_DAY,
    }
  ];
  errorMessage = messages.cityNotFound;
  isError = false;
  cols: IColumn[] = hourlyCols;
  rows: any[] = [];

  dailyRows: any[] = [];
  hourlyRows: any[] = []
  currentCity = '';

  constructor(
    private weatherService: WeatherService,
  ) {
    super();
    this.rows = this.hourlyRows;
  }

  ngOnInit(): void {
    this.initSearchSubscription();
  }

  initSearchSubscription() {
    this.searchControl.valueChanges
      .pipe(

        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.isError = false),
        filter(search => search),

        switchMap(city => this.weatherService.getCityByName(city)),
        tap(res => this.isError = !Boolean(res.length)),
        filter(res => Boolean(res.length)),

        switchMap(res => {
          const coords = { latitude: res[0].lat, longitude: res[0].lon };
          this.currentCity = res[0].name;
          return this.weatherService.getForecast(coords, this.currentMode === EForecastMode.BY_HOUR);
        }),
        takeUntil(this.isDestroyed$),
      )
      .subscribe((res) => {
        this.setDailyRows(res);
        this.setHourlyRows(res);
        this.rows = (this.currentMode === EForecastMode.BY_HOUR) ? this.hourlyRows : this.dailyRows;
      })
  }

  setConfig(config: ISelect<EForecastMode>) {
    this.currentMode = config.value;
  }

  private setDailyRows(res: ICityWeatherResponse) {
    if (res.daily) {
      const row: { [key: string]: any } = { city: this.currentCity };


      dailyHeadersKeys.forEach((key, i) => {
        row[key] = Math.round((res.daily[i].temp.min + res.daily[i].temp.max) / 2) + CELCIUS_SIGN;
      })

      this.dailyRows = [...this.dailyRows, row];
    }
  }

  private setHourlyRows(res: ICityWeatherResponse) {
    if (res.hourly) {
      const row: { [key: string]: any } = { city: this.currentCity };


      hourlyHeaderKeys.forEach((key, i) => {
        const temperatureIndex =
          (i === 0)
            ? 0
            : i + 2;
        row[key] = res.hourly[temperatureIndex].temp + CELCIUS_SIGN
      })
      this.hourlyRows = [...this.hourlyRows, row];
    }
  }
}
