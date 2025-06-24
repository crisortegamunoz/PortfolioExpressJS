const experienceService = require('../services/experienceService');

exports.create = async (req, res) => {
    try {
        const experience = await experienceService.create();
        res.status(201).json(experience);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const experiences = await experienceService.findAll();
        res.json(experiences);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findOne = async (req, res) => {
    try {
        const experience = await experienceService.findOne(req.params.id);
        if (!experience) {
            return res.status(404).json({ error: 'experience not found' });
        }
        res.json(experience);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const experienceExist = await experienceService.findOne(req.param.id);
        if (!experienceExist) {
            return res.status(404).json({ error: 'experience not found' });
        }
        const experience = await experienceService.update(req.params.id, req.body);
        res.status(200).json({ message: 'experience updated', experience });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await this.experienceService.delete(req.params.id);
        if (!result) {
            res.status(404).json({ error: 'experience not found' });
        }
        res.status(204).json({ message: 'experience deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}