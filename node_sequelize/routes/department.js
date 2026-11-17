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

app.get('/', async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve departments' });
    }
});

app.delete('/:id', async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }
        await department.destroy();
        res.status(200).json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete department' });
    }
});

app.put('/:id', async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }
        if (!req.body.departmentName) {
            return res.status(400).json({ error: 'Department name is required' });
        }
        department.departmentName = req.body.departmentName;
        await department.save();
        res.status(200).json(department);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update department' });
    }
});

module.exports = app;