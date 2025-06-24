const skillService = require('../services/skillService');

exports.create = async (req, res) => {
    try {
        const skill = await skillService.create();
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const skills = await skillService.findAll();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findOne = async (req, res) => {
    try {
        const skill = await skillService.findOne(req.params.id);
        if (!skill) {
            return res.status(404).json({ error: 'skill not found' });
        }
        res.json(skill);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const skillExist = await skillService.findOne(req.param.id);
        if (!skillExist) {
            return res.status(404).json({ error: 'skill not found' });
        }
        const skill = await skillService.update(req.params.id, req.body);
        res.status(200).json({ message: 'skill updated', skill });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await this.skillService.delete(req.params.id);
        if (!result) {
            res.status(404).json({ error: 'skill not found' });
        }
        res.status(204).json({ message: 'skill deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}