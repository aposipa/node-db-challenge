const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) =>{
    Projects.getProjects()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Failed to GET projects", err });
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Projects.getProjectById(id)
    .then(project => {
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ message: "Project not found by ID" });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Failed to GET projects by ID", err });
    });
});

router.post('/', (req, res) => {
    const projectBody = req.body;

    Projects.add(projectBody)
    .then(createProject => {
        res.status(201).json({ message: "New Project Created", createProject });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Failed to create a project", err });
    });
});

module.exports = router;
