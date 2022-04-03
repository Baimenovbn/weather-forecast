import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'forecast-by-city',
  },
  {
    path: 'forecast-by-city',
    loadChildren: () => import('./pages/forecast-by-city/forecast-by-city.module').then(
      (m) => m.ForecastByCityModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
