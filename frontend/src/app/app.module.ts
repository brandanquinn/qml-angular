import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodaysGamesComponent } from './todays-games/todays-games.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetDateComponent } from './get-date/get-date.component';
import { PredictByDateComponent } from './predict-by-date/predict-by-date.component';
import { PredictionListComponent } from './prediction-list/prediction-list.component';
import { TeamSelectComponent } from './team-select/team-select.component';
import { MatchupPredictionComponent } from './matchup-prediction/matchup-prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    TodaysGamesComponent,
    GetDateComponent,
    PredictByDateComponent,
    PredictionListComponent,
    TeamSelectComponent,
    MatchupPredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
