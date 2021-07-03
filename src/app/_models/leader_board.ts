import { User } from "./user";

export interface LeaderBoard{
    leaderboardname: string;
    course: string;
    created_by: User;
}