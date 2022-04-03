import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForecastByCityControllerComponent} from './forecast-by-city-controller/forecast-by-city-controller.component';

const routes: Routes = [
  {
    path: '',
    component: ForecastByCityControllerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastByCityRoutingModule { }
