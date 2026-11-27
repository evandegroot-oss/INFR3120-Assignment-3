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


// Display the edit assignment form
exports.showEdit = async function(req, res, next) {

    try {
        const assignment = await Assignment.findById(req.params.id);

        if (!assignment) {
            return res.status(404).send('Assignment not found');
        }

        res.render('assignments/edit', {
            title: 'Edit Assignment',
            assignment: assignment
        });

    } catch (error) {
        next(error);
    }

};

// Update an existing assignment
exports.update = async function(req, res, next) {

    try {
        const assignment = await Assignment.findByIdAndUpdate(
            req.params.id,
            {
                assignmentName: req.body.assignmentName,
                course: req.body.course,
                description: req.body.description,
                dueDate: req.body.dueDate,
                status: req.body.status
            },
            { runValidators: true }
        );

        if (!assignment) {
            return res.status(404).send('Assignment not found');
        }

        res.redirect('/assignments');

    } catch (error) {
        next(error);
    }

};

// Delete an existing assignment
exports.delete = async function(req, res, next) {

    try {
        const assignment = await Assignment.findByIdAndDelete(req.params.id);

        if (!assignment) {
            return res.status(404).send('Assignment not found');
        }

        res.redirect('/assignments');

    } catch (error) {
        next(error);
    }

};
