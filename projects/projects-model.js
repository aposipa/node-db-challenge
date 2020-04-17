const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getProjectById,
    add
}

function getProjects() {
    return db("projects");
  }
  
  function getProjectById(id) {
    return db("projects")
      .where({ id })
      .first();
  }
  
  function add(post) {
    return db("projects")
      .insert(post)
      .then(ids => {
        return getProjectById(ids[0]);
      });
  }