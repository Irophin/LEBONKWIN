"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const helpers_1 = require("../../models/User/helpers");
var UserServices;
(function (UserServices) {
    UserServices.getUsers = () => {
        return helpers_1.UserHelpers.getAllUsers();
    };
    UserServices.getUser = (id) => {
        return helpers_1.UserHelpers.getUser(id);
    };
    UserServices.setResult = (idUser, idQuiz, score) => {
        const result = {
            idUser: idUser,
            idQuiz: idQuiz,
            score: score,
            date: (new Date()).toDateString()
        };
        const user = UserServices.getUser(idUser);
        return helpers_1.UserHelpers.setResult(user, result);
    };
})(UserServices = exports.UserServices || (exports.UserServices = {}));
