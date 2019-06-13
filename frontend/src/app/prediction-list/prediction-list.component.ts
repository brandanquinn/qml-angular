import { Component, OnInit, Input } from '@angular/core';
import { IPrediction } from 'src/models/prediction.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prediction-list',
  templateUrl: './prediction-list.component.html',
  styleUrls: ['./prediction-list.component.css']
})
export class PredictionListComponent implements OnInit {

  @Input() predictions: IPrediction[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(selectedGame: IPrediction) {
    this.router.navigate(['/', 'game-details', 
    {
      teams: selectedGame.playing, 
      prediction: selectedGame.prediction_message, 
      result: selectedGame.actual_result,
      correct: selectedGame.is_outcome_correct
    }]);
  }

}
