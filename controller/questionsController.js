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
        const qid = parseInt(req.params.qid);
        const question = await Question.findOne({ QID: qid, paidOnly: false });
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json(question);
    } catch (error) {
        console.error('Error fetching question by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getQuestionsByDifficulty = async (req, res) => {
    try {
        const difficulty = req.params.difficulty;
        const questions = await Question.find({ difficulty: difficulty, paidOnly: false  });
        if (questions.length === 0) {
            return res.status(404).json({ message: 'No questions found for the specified difficulty' });
        }
        res.json(questions);
    } catch (error) {
        console.error('Error fetching questions by difficulty:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// exports.getQuestionsByTopicTag = async (req, res) => {
//     try {
//         const tags = req.params.tag;
//         const questions = await Question.find({ topicTags: tags });
//         if (!questions || questions.length === 0) {
//             return res.status(404).json({ message: 'No questions found with the specified topic tag' });
//         }
//         res.json(questions);
//     } catch (error) {
//         console.error('Error fetching questions by topic tag:', error); 
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };