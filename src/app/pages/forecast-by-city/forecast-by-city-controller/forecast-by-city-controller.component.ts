import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs';
import {SubscribeDestroyerDirective} from '../../../shared/subscribe-destroyer.directive';
import {EForecastFilterType} from '../../../core/models/enums/forecast-filter-type.enum';
import {ISelect} from '../../../core/models/interfaces/select.interface';

@Component({
  selector: 'app-forecast-by-city-controller',
  templateUrl: './forecast-by-city-controller.component.html',
  styleUrls: ['./forecast-by-city-controller.component.scss']
})
export class ForecastByCityControllerComponent extends SubscribeDestroyerDirective implements OnInit {
  searchControl = new FormControl('');
  currentFilter = EForecastFilterType.BY_DAY;

  public readonly EFilterType = EForecastFilterType;
  public readonly filterButtonsConfig: ISelect<EForecastFilterType>[] = [
    {
      label: 'By Hour',
      value: EForecastFilterType.BY_HOUR,
    },
    {
      label: 'By Day',
      value: EForecastFilterType.BY_DAY,
    }
  ];

  ngOnInit(): void {
    this.initSearchSubscription();
  }

  initSearchSubscription() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        takeUntil(this.isDestroyed$),
      )
      .subscribe(val => {
        console.log(val);
      })
  }
}
