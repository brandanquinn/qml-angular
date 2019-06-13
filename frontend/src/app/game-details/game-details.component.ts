import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  teams: string;
  message: string;
  winningTeam: string;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let teams = params.get('teams');
      this.teams = teams;
      let message = params.get('message');
      this.message = message;
      this.winningTeam = message.slice(0, 3);
    })
  }

}
