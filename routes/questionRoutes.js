const express = require('express');
const router = express.Router();
const dataController = require('../controller/questionsController');


router.get('/getAllQuestions', dataController.getAllQuestions);

router.get('/:id', dataController.getQuestionById);

module.exports = router;