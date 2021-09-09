import { ITheme, IUser } from ".";

export interface IPost {
    userId: IUser;
    themeId: ITheme;
    created_at: string;
}