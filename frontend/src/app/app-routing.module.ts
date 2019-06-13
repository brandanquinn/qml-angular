import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodaysGamesComponent } from './todays-games/todays-games.component';
import { GetDateComponent } from './get-date/get-date.component';
import { PredictByDateComponent } from './predict-by-date/predict-by-date.component';
import { MatchupPredictionComponent } from './matchup-prediction/matchup-prediction.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const routes: Routes = [
  {path: 'todays-games', component: TodaysGamesComponent},
  {
    path: 'predict-by-date', 
    component: GetDateComponent,
    pathMatch: 'full'
  },
  {path: 'predict-by-date/:date', component: PredictByDateComponent},
  {path: 'matchup-prediction', component: MatchupPredictionComponent},
  {path: 'game-details', component: GameDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
