const express = require('express');
const { route } = require('.');
const router = express.Router();

// Require the controller that exports the skills CRUD functions
const skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// GET "/skills" - Index Route
router.get('/', skillsCtrl.index);

// POST "/skills" - Create Route
router.post('/', skillsCtrl.create);

// GET "skills/new" - New Route
router.get('/new', skillsCtrl.new);

// GET "/skills/:id" - Show Route
router.get('/:id', skillsCtrl.show);

// DELETE "/skills/:id" - Delete Route
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
