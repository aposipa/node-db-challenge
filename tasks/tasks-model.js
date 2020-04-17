const db = require("../data/dbConfig.js");

module.exports = {
    getTasks,
    getTasksById,
    add
};


function getTasks() {
    return db('tasks as t')
    .join("projects as p", "p.id", "t.task_project_id")
    .select(
        "p.project_name",
        "p.project_description",
        "t.task_project_id",
        "t.task_description",
        "t.task_notes",
        "t.id"
    );
}

function getTasksById(id) {
    return db('tasks as t')
    .where({ task_project_id: id });
}

function add(post) {
    return db('tasks')
    .insert(post)
    .then(ids => {
        return getTasksById(ids[0]);
    });
}