import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IPrediction } from 'src/models/prediction.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {

  constructor(private http: HttpClient) { }

  // private _url: string = "/api/todays-games";

  getTodaysGames(): Observable<IPrediction[]> {
    return this.http.get<IPrediction[]>('/api/todays-games')
                    .pipe(catchError(this.errorHandler));
  }

  predictByDate(date: string): Observable<IPrediction[]> {
    return this.http.post<IPrediction[]>('/api/predict-by-date', date)
                    .pipe(catchError(this.errorHandler));
  }

  matchupPrediction(t1: string, t2: string) {
    return this.http.post<IPrediction[]>('/api/matchup-predict', {t1, t2})
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
  
}
