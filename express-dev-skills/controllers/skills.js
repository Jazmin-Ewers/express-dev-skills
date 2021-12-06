//Require the skill model
const Skill = require("../models/skill")

module.exports = {
    index,  // shorthand for index:index; In routes we called this file index and inside this file we have a funtion named index
    show // (3.4) Export callback function
}

function index(req,res) {
    let skills = Skill.getAll();
    res.render('skills/index', {
        skills  // passing model objects to the html page
    });
}

// (3.2) Set up the callback function in controller for the route
function show(req,res){
    // (3.6) Use the model functions to extract id vaule and render on "skill/:id" html page 
    let skill = Skill.getOne(req.params.id);
    console.log(skill)
    res.render("skills/show", { skill });

}

