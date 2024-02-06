const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    QID: { type: Number, required: true },
    title: { type: String, required: true },
    titleSlug: { type: String, required: true },
    difficulty: { type: String, required: true },
    acceptanceRate: { type: Number, required: true },
    paidOnly: { type: Boolean, required: true },
    topicTags: { type: [String], required: true },
    categorySlug: { type: String, required: true },
    hints: { type: [String], default: [] },
    companies: { type: [String], default: [] },
    similarQuestions: { type: [Number], default: [] },
    code: { type: String, required: true },
    body: { type: String, required: true },
    isPaidOnly: { type: Boolean, required: true }
});

const Question = mongoose.model('Question', questionSchema, 'code_questions');

module.exports = Question;