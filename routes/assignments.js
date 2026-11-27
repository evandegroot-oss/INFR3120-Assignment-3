const express = require('express');
const router = express.Router();

const assignmentsController = require('../controllers/assignments');

// Display all assignments
router.get('/', assignmentsController.list);

// Display the create assignment page
router.get('/create', assignmentsController.showCreate);

// Save a new assignment
router.post('/create', assignmentsController.create);

// Display the edit assignment page
router.get('/edit/:id', assignmentsController.showEdit);

// Update an existing assignment
router.post('/edit/:id', assignmentsController.update);

// Delete an existing assignment
router.post('/delete/:id', assignmentsController.delete);

module.exports = router;
