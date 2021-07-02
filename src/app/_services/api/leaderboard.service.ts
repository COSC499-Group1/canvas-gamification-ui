
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { LeaderBoard } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class LeaderBoardService {
  //private url = new URL('/api/leaderboard', environment.apiBaseUrl).toString();

  constructor(
    private http: HttpClient,
    private apiService: ApiService) {

  }

  getLeaderBoard(): Observable<LeaderBoard> {
    const url = this.apiService.getURL('leaderboard');
    return this.http
      .get<LeaderBoard>(url)
      .pipe(catchError(this.apiService.handleError<LeaderBoard>(`Unable to load leader board`, null)));
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

}
