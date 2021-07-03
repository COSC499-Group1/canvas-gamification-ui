import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { LeaderBoardService } from '@app/_services/api/leaderboard.service';
import { LeaderBoard } from '@app/_models';
import { LeaderBoardStudent } from '@app/_models/leader_board_students';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leader-board-student-list.component.html',
  styleUrls: ['./leader-board-student-list.component.scss']
})
export class LeaderBoardStudentComponent {

  leaderBoardStudentList: MatTableDataSource<LeaderBoardStudent>
  allStudentLeaderBoard: LeaderBoardStudent[];
  displayedColumns: string[] = [' Name', 'Course', 'Leader Board', 'Tokens', 'Team', 'Streak']
  leaderBoardName: string;

  //users: TestModel[];
  //topThree : TestModel[] = Array();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private leaderboardservice: LeaderBoardService) {
    this.leaderBoardStudentList = new MatTableDataSource();

  }

  ngAfterViewInit(): void {
    this.leaderboardservice.getLeaderBoardStudents().subscribe((studentleaderboards) => {
        this.allStudentLeaderBoard = studentleaderboards;
        this.leaderBoardStudentList = new MatTableDataSource(studentleaderboards);
        //this.leaderBoardList.sort = this.sort;
    });
}  


  // ngOnInit(): void {
  //   this.leaderboardService
  //   .getLeaderBoard(this.leaderBoardId)
  //   .subscribe( (leaderboard)=>{
  //       this.leaderBoard = leaderboard;
  //});
  // .subscribe((users) => {
  //   console.log(users);
  //   this.users = users.sort((a, b) => {
  //     if(a.tokens < b.tokens){
  //       return 1;
  //     }
  //     if(a.tokens > b.tokens){
  //       return -1;
  //     }
  //     return 0;
  //   });

  //   for(let i = 0; i < 3; i++) {
  //     this.topThree.push(this.users.shift());

  //   }
  // })

  //   }

  // turnToGif(e: Event) : void {
  //   let parent = e.target as HTMLElement;
  //   if(parent.children[2].children[0]){
  //     let img = parent.children[2].children[0].children[0] as HTMLImageElement;
  //     let fire: String = window.location.origin + '/assets/gif/fire-still.png';
  //     let snow: String = window.location.origin + '/assets/gif/snow-still.png';
  //     console.log(fire);
  //     console.log(img.src);
  //     if(img.src == fire){
  //       img.src = 'assets/gif/fire.gif';
  //     }
  //     else if(img.src == snow) {
  //       img.src = 'assets/gif/snow.gif';
  //     }
  //   }
  // }

  // turnToStatic(e: Event) : void {
  //   let parent = e.target as HTMLElement;
  //   if(parent.children[2].children[0]){
  //     let img = parent.children[2].children[0].children[0] as HTMLImageElement;
  //     let fire: String = window.location.origin + '/assets/gif/fire.gif';
  //     let snow: String = window.location.origin + '/assets/gif/snow.gif';
  //     if(img.src == fire){
  //       img.src = 'assets/gif/fire-still.png';
  //     }
  //     else if(img.src == snow) {
  //       img.src = 'assets/gif/snow-still.png';
  //     }
  //   }
  // }




}
