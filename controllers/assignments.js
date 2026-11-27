const Assignment = require('../models/assignment');

// Display all assignments
exports.list = async function(req, res, next) {

    try {
        const assignments = await Assignment.find({});

        res.render('assignments/index', {
            title: 'My Assignments',
            assignments: assignments
        });

    } catch (error) {
        next(error);
    }

};

// Display the create assignment form
exports.showCreate = function(req, res) {

    res.render('assignments/create', {
        title: 'Create Assignment'
    });

};

// Save a new assignment
exports.create = async function(req, res, next) {

    try {
        const assignment = new Assignment({
            assignmentName: req.body.assignmentName,
            course: req.body.course,
            description: req.body.description,
            dueDate: req.body.dueDate,
            status: req.body.status
        });

        await assignment.save();

        res.redirect('/assignments');

    } catch (error) {
        next(error);
    }

};
