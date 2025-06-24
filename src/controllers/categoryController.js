const categoryService = require('../services/categoryService');

exports.create = async (req, res) => {
    try {
        const category = await categoryService.create();
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const categories = await categoryService.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findOne = async (req, res) => {
    try {
        const category = await categoryService.findOne(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const categoryExist = await categoryService.findOne(req.param.id);
        if (!categoryExist) {
            return res.status(404).json({ error: 'category not found' });
        }
        const category = await categoryService.update(req.params.id, req.body);
        res.status(200).json({ message: 'category updated', category });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await this.categoryService.delete(req.params.id);
        if (!result) {
            res.status(404).json({ error: 'category not found' });
        }
        res.status(204).json({ message: 'category deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}