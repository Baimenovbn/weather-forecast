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
import {EHourlyHeaders} from '../../../core/models/enums/hourly-headers.enum';
import {dailyCols} from '../../../core/constants/daily-cols';
import {dailyHeadersKeys} from '../../../core/models/enums/daily-headers.enum';


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
  }

  cities: string[] = [];

  public readonly EFilterType = EForecastMode;
  public readonly filterButtonsConfig: ISelect<EForecastMode>[] = [
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
  rows: any[] = [
    {
      'city': 'London',
      [EHourlyHeaders.THREE]: '15*',
      [EHourlyHeaders.SIX]: '15*',
      [EHourlyHeaders.NINE]: '15*',
      [EHourlyHeaders.TWELVE]: '15*',
      [EHourlyHeaders.FIFTEEN]: '15*',
      [EHourlyHeaders.EIGHTEEN]: '15*',
      [EHourlyHeaders.TWENTY_ONE]: '15*',
      [EHourlyHeaders.TWENTY_FOUR]: '15*',
    },
  ];

  dailyRows: any = [];
  currentCity = '';

  constructor(
    private weatherService: WeatherService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initSearchSubscription();
  }

  initSearchSubscription() {
    this.searchControl.valueChanges
      .pipe(

        debounceTime(400),
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
        if (res.daily) {
          const row: { [key: string]: any }[] = [{ city: this.currentCity }];
          res.daily.forEach((day, i) => {
            row.push({
              label: dailyHeadersKeys[i],
              value: Math.round((day.temp.max + day.temp.min) / 2)
            });
          });

          this.rows = [...this.rows, row];
        }
      })
  }

  setConfig(config: ISelect<EForecastMode>) {
    this.currentMode = config.value;
  }
}
