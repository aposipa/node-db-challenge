const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Failed to GET resource", err });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Resources.getResourceById(id)
    .then(resource => {
        if(resource) {
            res.json(resource);
        } else {
            res.status(404).json({ message: "Resource by ID not found" });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Failed to GET resource", err });
    });
});

router.post('/', (req, res) => {
    const resourceBody = req.body;

    Resources.add(resourceBody)
    .then(createResource => {
        res.status(201).json({ message: "Resource created", createResource });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Failed to create resource", err });
    });
})

module.exports = router;