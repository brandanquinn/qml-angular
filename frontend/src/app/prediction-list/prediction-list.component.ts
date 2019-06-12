import { Component, OnInit, Input } from '@angular/core';
import { IPrediction } from 'src/models/prediction.model';

@Component({
  selector: 'app-prediction-list',
  templateUrl: './prediction-list.component.html',
  styleUrls: ['./prediction-list.component.css']
})
export class PredictionListComponent implements OnInit {

  @Input() predictions: IPrediction[] = [];

  constructor() { }

  ngOnInit() {
  }

}
