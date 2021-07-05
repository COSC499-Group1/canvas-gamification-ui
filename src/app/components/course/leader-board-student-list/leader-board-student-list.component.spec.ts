import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBoardStudentComponent } from './leader-board-student-list.component';

describe('LeaderboardComponent', () => {
  let component: LeaderBoardStudentComponent;
  let fixture: ComponentFixture<LeaderBoardStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderBoardStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderBoardStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
