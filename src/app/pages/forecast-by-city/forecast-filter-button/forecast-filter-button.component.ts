import {Component, Input} from '@angular/core';
import {ISelect} from '../../../core/models/interfaces/select.interface';
import {EForecastMode} from '../../../core/models/enums/forecast-filter-type.enum';

@Component({
  selector: 'app-forecast-filter-button',
  templateUrl: './forecast-filter-button.component.html',
  styleUrls: ['./forecast-filter-button.component.scss']
})
export class ForecastFilterButtonComponent {
  @Input() config!: ISelect<EForecastMode>;
  @Input() currentMode!: EForecastMode;
}
