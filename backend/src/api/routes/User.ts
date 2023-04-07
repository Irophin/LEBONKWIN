import { Router } from "express";
import { AdService } from "../services/AdService";
import { Ad } from "../../models/Ad/Ad";
import { UserServices } from "../services/UserService";
import { User } from "../../models/User/User";

const routeUser = Router();

routeUser.get("/", (req, res) => {
    const users = UserServices.getUsers();
    return res.send(users);
});

routeUser.post("/", (req, res) => {
    const ad: User = req.body;
    
    const result = UserServices.createUser(ad);
    return res.send(result);
});

routeUser.post("/login", (req, res) => {
    const user: User = req.body;
    const userFound = UserServices.checkUser(user);

    const result = userFound ? true : false;

    const response = {
        result: result,
        message: result ? "Login successful" : "Login failed",
        user : userFound
    };

    return res.send(response);
});

export default routeUser;