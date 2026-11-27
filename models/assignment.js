const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({

    assignmentName: {
        type: String,
        required: true
    },

    course: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    dueDate: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started'
    }

});

module.exports = mongoose.model('Assignment', assignmentSchema);