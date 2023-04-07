import { Ad } from "./Ad";

export type User = {
    id?: number;
    username: string;
    password: string;

    ads ?: Ad[];
}