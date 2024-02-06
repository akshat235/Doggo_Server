const Question = require('../models/questions');




exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
        // console.log(questions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json(question);
    } catch (error) {
        console.error('Error fetching question by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};