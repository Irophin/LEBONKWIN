import { database } from "../../api/config/database";
import { Ad } from "../Ad/Ad";
import { User } from "./User";


export namespace UserHelpers {

    export const getAllUsers = (): User[] => {
        const users = database.prepare("SELECT * FROM User").all() as User[];
        users.forEach(user => {
            user.ads = getUsersAds(user.id);
        });
        return users;
    }

    export const getUser = (userId: number): User => {
        const user = database.prepare("SELECT * FROM User WHERE id = ?").bind(userId).get() as User | undefined;
        if (user === undefined)
            throw new Error("User not found");

        user.ads = getUsersAds(userId);

        return user;
    }

    export const getUsersAds = (userId: number): Ad[] => {
        const ads = database.prepare("SELECT * FROM Ad WHERE userId = ?").bind(userId).all() as Ad[];
        return ads;
    }

    export const createUser = (user: User): User => {
        const newUser = { ...user };
        const userId = database.prepare("Insert INTO User (username, password) VALUES (?,?)").run(user.username, user.password).lastInsertRowid;
        newUser.id = userId as number;
        return newUser;
    }

    export const checkUser = (user: User): User | undefined => {
        const userFound = database.prepare("SELECT * FROM User WHERE username = ? AND password = ?").bind(user.username, user.password).get() as User | undefined;
        return userFound;
    }

}