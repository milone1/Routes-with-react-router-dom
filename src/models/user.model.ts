import { Rols } from "./rols";

export interface UserInfo {
    id: number;
    name: string;
    email: string;
    rol?: Rols
}