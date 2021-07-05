
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { environment } from '@environments/environment';
import { LeaderBoardStudent } from '@app/_models/leader_board_students';
import { LeaderBoard } from '@app/_models/leader_board';


@Injectable({
  providedIn: 'root'
})
export class LeaderBoardService {
  private leaderboard_url = new URL('/api/leaderboard', environment.apiBaseUrl).toString();
  private leaderboard_students_url = new URL('/api/leaderboard-students', environment.apiBaseUrl).toString();

  constructor(
    private http: HttpClient,
    private apiService: ApiService) {

  
  }



  getLeaderBoards(): Observable<LeaderBoard[]>{
    return this.http
    .get<LeaderBoard[]>(this.leaderboard_url)
    .pipe(catchError(this.apiService.handleError<LeaderBoard[]>(`Unable to load leader board`, null)))

  }

  getLeaderBoardStudents(): Observable<LeaderBoardStudent[]> {
    return this.http
    .get<LeaderBoardStudent[]>(this.leaderboard_students_url)
    .pipe(catchError(this.apiService.handleError<LeaderBoardStudent[]>(`Unable to load leaderboard students`, null)))
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

}
