"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizService = void 0;
const helpers_1 = require("../../models/Quiz/helpers");
var QuizService;
(function (QuizService) {
    QuizService.getQuiz = (quizId) => {
        return helpers_1.QuizHelpers.getQuiz(quizId);
    };
    QuizService.getAllQuizz = () => {
        return helpers_1.QuizHelpers.getAllQuizz();
    };
    QuizService.createQuiz = (quiz) => {
        return helpers_1.QuizHelpers.createQuiz(quiz);
    };
})(QuizService = exports.QuizService || (exports.QuizService = {}));
