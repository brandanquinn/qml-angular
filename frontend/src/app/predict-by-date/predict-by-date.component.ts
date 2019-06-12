import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { PredictionsService } from '../services/predictions.service';
import { IPrediction } from 'src/models/prediction.model';

@Component({
  selector: 'app-predict-by-date',
  templateUrl: './predict-by-date.component.html',
  styleUrls: ['./predict-by-date.component.css']
})
export class PredictByDateComponent implements OnInit {

  date: string;
  predictions: IPrediction[] = [];
  errorMessage: string;

  constructor(private route: ActivatedRoute, private predictionService: PredictionsService) { }

  ngOnInit() {
    // this.parsedDate =  this.date.replace(/\-/g, '');
    console.log('initialized component');
    this.route.paramMap.subscribe(params => {
      this.date = params.get("date")
    })

    this.predictionService.predictByDate(this.date)
      .subscribe(data => this.predictions = data,
                error => this.errorMessage = error);

  }
}
