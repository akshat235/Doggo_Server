const express = require('express');
const router = express.Router();
const questionController = require('../controller/questionsController');


router.get('/getAllQuestions', questionController.getAllQuestions);

router.get('/:qid', questionController.getQuestionById);

router.get('/difficulty/:difficulty', questionController.getQuestionsByDifficulty);

// router.get('/by-tags', questionController.getQuestionsByTopicTag);



module.exports = router;