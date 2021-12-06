// Be sure to create an array of "fake" data representing some of your awesome developer skills. The specific properties describing a skill object is up to you!

const skills = [
    {id: 190, computerLanguage: "html", skillLevel: "intermediate"},
    {id: 206, computerLanguage: "javascript",  skillLevel: "beginner"},
    {id: 304, computerLanguage: "java", skillLevel: "intermediate"}
];


module.exports = {
    getAll,
    getOne  // (3.5) Export function that return one id
};

function getAll() {
    return skills;
}

// (3.4) Add another function that return one id
function getOne(id) {
    id = parseInt(id);
    console.log(id, typeof(id))
    return skills.find(skill => skill.id === id)
}