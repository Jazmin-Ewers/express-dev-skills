//Require the skill model
const Skill = require("../models/skill")

module.exports = {
    index,  // shorthand for index:index; In routes we called this file index and inside this file we have a funtion named index
    show, // (3.4) Export callback function
    new : newSkill,
    create
}

function index(req, res) {
    let skills = Skill.getAll();
    res.render('skills/index', { skills });
}

function show(req, res){
    let skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    Skill.create(req.body);
    console.log(req.body);
    res.redirect('skills/');
}