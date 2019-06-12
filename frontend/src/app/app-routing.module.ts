import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodaysGamesComponent } from './todays-games/todays-games.component';
import { GetDateComponent } from './get-date/get-date.component';
import { PredictByDateComponent } from './predict-by-date/predict-by-date.component';

const routes: Routes = [
  {path: 'todays-games', component: TodaysGamesComponent},
  {
    path: 'predict-by-date', 
    component: GetDateComponent,
    pathMatch: 'full'
  },
  {path: 'predict-by-date/:date', component: PredictByDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
