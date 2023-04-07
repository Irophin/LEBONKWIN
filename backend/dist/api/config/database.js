"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.connection = void 0;
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
let database;
exports.database = database;
const connection = () => {
    return new Promise((resolve, reject) => {
        try {
            exports.database = database = (0, better_sqlite3_1.default)('database.db');
            load(database);
            resolve();
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.connection = connection;
const userSchema = `
    CREATE TABLE IF NOT EXISTS 
    User (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL
    );`;
const quizSchema = `
    CREATE TABLE IF NOT EXISTS
    Quiz (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL
    );`;
const questionSchema = `
    CREATE TABLE IF NOT EXISTS
    Question (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        quizId INTEGER NOT NULL,
        question TEXT NOT NULL,
        FOREIGN KEY (quizId) REFERENCES Quiz(id)
    );`;
const answerSchema = `
    CREATE TABLE IF NOT EXISTS
    Answer (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        questionId INTEGER NOT NULL,
        answer TEXT NOT NULL,
        isCorrect INTEGER NOT NULL,
        FOREIGN KEY (questionId) REFERENCES Question(id)
    );`;
const resultSchema = `
    CREATE TABLE IF NOT EXISTS
    Result (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        quizId INTEGER NOT NULL,
        score INTEGER NOT NULL,
        FOREIGN KEY (userId) REFERENCES User(id),
        FOREIGN KEY (quizId) REFERENCES Quiz(id)
    );`;
const load = (db) => {
    db.prepare(userSchema).run();
    db.prepare(quizSchema).run();
    db.prepare(questionSchema).run();
    db.prepare(answerSchema).run();
    db.prepare(resultSchema).run();
};
