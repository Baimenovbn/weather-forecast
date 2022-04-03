import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastByCityControllerComponent } from './forecast-by-city-controller/forecast-by-city-controller.component';
import {ForecastByCityRoutingModule} from './forecast-by-city-routing.module';
import {InputsModule} from '../../common-modules/inputs';
import {ButtonsModule} from '../../common-modules/buttons';
import { ForecastFilterButtonComponent } from './forecast-filter-button/forecast-filter-button.component';
import {TablesModule} from '../../common-modules/tables/tables.module';

@NgModule({
  declarations: [
    ForecastByCityControllerComponent,
    ForecastFilterButtonComponent,
  ],
  imports: [
    CommonModule,
    ForecastByCityRoutingModule,
    InputsModule,
    ButtonsModule,
    TablesModule,
  ]
})
export class ForecastByCityModule { }
