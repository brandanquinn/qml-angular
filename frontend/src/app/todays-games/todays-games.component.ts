import { Component, OnInit } from '@angular/core';
import { PredictionsService } from '../services/predictions.service';
import { IPrediction } from 'src/models/prediction.model';

@Component({
  selector: 'app-todays-games',
  templateUrl: './todays-games.component.html',
  styleUrls: ['./todays-games.component.css']
})
export class TodaysGamesComponent implements OnInit {

  predictions: IPrediction[] = [];
  errorMessage: string;
  loading: boolean = true;

  constructor(private predictionService: PredictionsService) { }

  ngOnInit() {
    this.predictionService.getTodaysGames()
      .subscribe(data => this.predictions = data,
                error => this.errorMessage = error
                );
    
    this.loading = false;
  }

}
