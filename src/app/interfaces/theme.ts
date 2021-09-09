import { IUser } from ".";

export interface ITheme {
    subscribers: number;
    name: string;
    userId: IUser;
    created_at: string;
    posts: string[];
}