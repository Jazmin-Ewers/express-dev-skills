//Require the skill model
const Skill = require("../models/skills")

module.exports = {
    index  // shorthand for index:index; In routes we called this file index and inside this file we have a funtion named index
}

function index(req,res) {
    let skills = Skill.getAll();
    res.render('skills/index', {
        skills
    });
}

