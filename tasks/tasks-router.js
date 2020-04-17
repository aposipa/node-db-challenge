const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(tasks => {
        res.json(tasks);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Failed to GET Tasks", err });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Tasks.getTasksById(id)
    .then(task => {
        if(task) {
            res.json(task);
        } else { 
            res.status(404).json({ message: 'Task not found by ID' });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Failed to GET Task by ID", err });
    });
});

router.post("/", (req, res) => {
    const taskBody = req.body;

    Tasks.add(taskBody)
    .then(createTask => {
        res.status(201).json({ message: "New Task Created", createTask });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Failed to create a new task", err });
    });
});

module.exports = router;