
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import{
  LeaderBoard,

} from '@app/_models';


import {HttpClient, HttpParams} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { LeaderBoardStudent } from '@app/_models/leader_board_students';


@Injectable({
  providedIn: 'root'
})
export class LeaderBoardService {
  //private url = new URL('/api/leaderboard', environment.apiBaseUrl).toString();

  constructor(
    private http: HttpClient,
    private apiService: ApiService) {

  }



  getLeaderBoards(registered = false, options?: {
    filters?: unknown,
    ordering?: unknown,
    page?: number,
    pageSize?: number
  }): Observable<LeaderBoard[]> {
    const {filters = {}, ordering = {}, page = 1, pageSize = 50} = options ? options : {};
    const url = this.apiService.getURL('leaderboardlist');
    let params = new HttpParams()
            .set('registered', String(registered))
            .set('page', String(page))
            .set('page_size', String(pageSize));

        for (const field of Object.keys(filters)) {
            params = params.set(`${field}`, String(filters[field]));
        }
      
        const orderingFields = [];
        for (const field of Object.keys(ordering)) {
            if (ordering[field]) {
                orderingFields.push(`${field}`);
            } else {
                orderingFields.push(`-${field}`);
            }
        }
        params = params.set(`ordering`, `${orderingFields.join()}`);
      
        return this.http
        .get<LeaderBoard[]>(url, {params})
        .pipe(
            catchError(
                this.apiService.handleError<LeaderBoard[]>(`Unable to load leaders.`, [])
            )
        );
      }

  getLeaderBoardStudents(): Observable<LeaderBoardStudent[]> {
    const url = this.apiService.getURL('leaderboard');
    return this.http
      .get<LeaderBoardStudent[]>(url)
      .pipe(catchError(this.apiService.handleError<LeaderBoardStudent[]>(`Unable to load leader board`, null)));
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

}
