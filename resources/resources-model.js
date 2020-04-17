const db = require("../data/dbConfig.js");

module.exports = {
    getResources,
    getResourceById,
    add
};

function getResources() {
    return db("resources");
}

function getResourceById(id) {
    return db('resources');
}

function add(post) {
    return db('resources')
    .insert(post)
    .then(ids => {
        return getResourceById(ids[0]);
    });
}