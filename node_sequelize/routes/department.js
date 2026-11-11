const Department = require('../models/department');
const express = require('express');
const app = express.Router();

app.post('/create', async (req, res) => {
    if (!req.body.departmentName) {
        return res.status(400).json({ error: 'Department name is required' });
    }
    try {
        const department = await Department.create({ departmentName: req.body.departmentName });
        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create department' });
    }
});

module.exports = app;