const express = require('express');
const { route } = require('.');
const router = express.Router();

// Require the controller that exports the skills CRUD functions
const skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"


// Implement index functionality for the skills resource
router.get("/", skillsCtrl.index);

// Implement show functionality for the skills resource
// (3.1) Define "/skills/:id route"
router.get("/:id",  );

module.exports = router;
