"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const QuizService_1 = require("../services/QuizService");
const route = (0, express_1.Router)();
route.get("/", (req, res) => {
    res.send(QuizService_1.QuizService.getAllQuizz());
});
route.post("/", (req, res) => {
    const quiz = req.body;
    const result = QuizService_1.QuizService.createQuiz(quiz);
    return res.send(result);
});
route.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send("Invalid id");
    }
});
route.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send("Invalid id");
    }
    const quiz = QuizService_1.QuizService.getQuiz(id);
    if (quiz === undefined) {
        return res.status(404).send("Quiz not found");
    }
    return res.send(quiz);
});
exports.default = route;
