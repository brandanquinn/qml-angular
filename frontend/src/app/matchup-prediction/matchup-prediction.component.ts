import { Component, OnInit } from '@angular/core';
import { PredictionsService } from '../services/predictions.service';
import { IPrediction } from 'src/models/prediction.model';

@Component({
  selector: 'app-matchup-prediction',
  templateUrl: './matchup-prediction.component.html',
  styleUrls: ['./matchup-prediction.component.css']
})
export class MatchupPredictionComponent implements OnInit {

  t1_id: string;
  t2_id: string;

  predictions: IPrediction[] = [];
  errorMessage: string;

  constructor(private predictionService: PredictionsService) { }

  ngOnInit() {
  }

  getPrediction() {
    this.predictionService.matchupPrediction(this.t1_id, this.t2_id)
      .subscribe(data => this.predictions = data,
                error => this.errorMessage = error);
  }

}
