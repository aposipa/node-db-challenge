const express = require("express");

const ProjectsRouter = require('./projects/projects-router.js');
const ResourcesRouter = require('./resources/resources-router.js');
const TasksRouter = require('./tasks/tasks-router.js');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("<h2>Welcome to my Node db Challenge Page!</h2>");
});
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);
server.use("/api/tasks", TasksRouter);

module.exports = server;