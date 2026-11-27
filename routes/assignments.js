const express = require('express');
const router = express.Router();

const assignmentsController = require('../controllers/assignments');

// Display all assignments
router.get('/', assignmentsController.list);

// Display the create assignment form
router.get('/create', assignmentsController.showCreate);

// Save a new assignment
router.post('/create', assignmentsController.create);

module.exports = router;
