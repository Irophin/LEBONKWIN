import { User } from "../../models/User/User";
import { UserHelpers } from "../../models/User/helpers"

export namespace UserServices {
    export const getUsers = () => {
        return UserHelpers.getAllUsers();
    }

    export const getUser = (id: number) => {
        return UserHelpers.getUser(id);
    }

    export const createUser = (user : User) => {
        return UserHelpers.createUser(user);
    }

    export const checkUser = (user : User) : User|undefined => {
        return UserHelpers.checkUser(user);
    }
}