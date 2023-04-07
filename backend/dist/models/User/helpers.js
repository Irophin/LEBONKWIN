"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHelpers = void 0;
const database_1 = require("../../api/config/database");
var UserHelpers;
(function (UserHelpers) {
    UserHelpers.getResults = (user) => {
        return database_1.database.prepare("SELECT * FROM Result WHERE userId = ?").all(user.id);
    };
    UserHelpers.getAllUsers = () => {
        const users = database_1.database.prepare("SELECT * FROM User").all();
        users.forEach(user => {
            user.results = UserHelpers.getResults(user);
        });
        return users;
    };
    UserHelpers.getUser = (userId) => {
        const user = database_1.database.prepare("SELECT * FROM User WHERE id = ?").bind(userId).get();
        if (user === undefined)
            throw new Error("User not found");
        user.results = UserHelpers.getResults(user);
        return user;
    };
    UserHelpers.setResult = (user, result) => {
        database_1.database.prepare("Insert INTO Result (userId, quizId, score) VALUES (?, ?, ?)").run(user.id, result.idQuiz, result.score);
    };
    UserHelpers.createUser = (user) => {
        const userId = database_1.database.prepare("Insert INTO User (username) VALUES (?)").run(user.username).lastInsertRowid;
        user.id = userId;
        return user;
    };
})(UserHelpers = exports.UserHelpers || (exports.UserHelpers = {}));
