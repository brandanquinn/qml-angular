import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodaysGamesComponent } from './todays-games/todays-games.component';

const routes: Routes = [
  {path: 'todays-games', component: TodaysGamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
