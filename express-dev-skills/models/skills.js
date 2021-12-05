// Be sure to create an array of "fake" data representing some of your awesome developer skills. The specific properties describing a skill object is up to you!

const skills = [
    {id: 190, computerLanguage: "html", skillLevel: "intermediate"},
    {id: 206, computerLanguage: "javascript",  skillLevel: "beginner"},
    {id: 304, computerLanguage: "java", skillLevel: "intermediate"}
];

module.exports = {
    getAll,
};

function getAll() {
    return skills;
}

