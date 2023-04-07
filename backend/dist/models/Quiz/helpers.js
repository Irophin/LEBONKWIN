"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizHelpers = void 0;
const database_1 = require("../../api/config/database");
var QuizHelpers;
(function (QuizHelpers) {
    QuizHelpers.getQuiz = (quizId) => {
        const quiz = database_1.database.prepare("SELECT * FROM Quiz WHERE id = ?").bind(quizId).get();
        if (quiz === undefined)
            throw new Error("Quiz not found");
        const questions = database_1.database.prepare("SELECT * FROM Question WHERE quizId = ?").all(quizId);
        quiz.questions = questions;
        quiz.questions.forEach(question => {
            const answers = database_1.database.prepare("SELECT * FROM Answer WHERE questionId = ?").all(question.id);
            question.propositions = answers;
        });
        return quiz;
    };
    QuizHelpers.getAllQuizz = () => {
        const quiz = database_1.database.prepare("SELECT * FROM Quiz").all();
        return quiz.map(quiz => QuizHelpers.getQuiz(quiz.id));
    };
    QuizHelpers.createQuiz = (quiz) => {
        const idQuiz = database_1.database.prepare("INSERT INTO Quiz (title, description) VALUES (?, ?)").run(quiz.title, quiz.description).lastInsertRowid;
        quiz.questions.forEach(question => {
            const idQuestion = database_1.database.prepare("INSERT INTO Question (quizId, question) VALUES (?, ?)").run(idQuiz, question.question).lastInsertRowid;
            question.propositions.forEach(answer => {
                database_1.database.prepare("INSERT INTO Answer (questionId, answer, isCorrect) VALUES (?, ?, ?)").run(idQuestion, answer.answer, answer.isCorrect);
            });
        });
        return QuizHelpers.getQuiz(idQuiz);
    };
})(QuizHelpers = exports.QuizHelpers || (exports.QuizHelpers = {}));
