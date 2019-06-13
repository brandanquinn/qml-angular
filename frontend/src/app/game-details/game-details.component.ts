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
  result: string;
  correct: string;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let teams: string = params.get('teams');
      this.teams = teams;
      let message: string = params.get('prediction');
      this.message = message;
      this.winningTeam = message.slice(0, 3);
      let result: string = params.get('result');
      this.result = result;
      let correct: string = params.get('correct');
      if (correct == "true") {
        this.correct = "correctly";
      } else if (correct == "false") {
        this.correct = "incorrectly";
      } else {
        this.correct = "";
      }
    })
  }

}
