import {LeaderBoard} from '@app/_models';

export interface LeaderBoardStudent{
    name: string;
    course: string;
    leader_board: LeaderBoard;
    token_value: number;
    team : string;
    streak : number;


}