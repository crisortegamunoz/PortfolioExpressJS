const technologyService = require('../services/technologyService');

exports.create = async (req, res) => {
    try {
        const technology = await technologyService.create();
        res.status(201).json(technology);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const technologys = await technologyService.findAll();
        res.json(technologys);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findOne = async (req, res) => {
    try {
        const technology = await technologyService.findOne(req.params.id);
        if (!technology) {
            return res.status(404).json({ error: 'technology not found' });
        }
        res.json(technology);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const technologyExist = await technologyService.findOne(req.param.id);
        if (!technologyExist) {
            return res.status(404).json({ error: 'technology not found' });
        }
        const technology = await technologyService.update(req.params.id, req.body);
        res.status(200).json({ message: 'technology updated', technology });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await this.technologyService.delete(req.params.id);
        if (!result) {
            res.status(404).json({ error: 'technology not found' });
        }
        res.status(204).json({ message: 'technology deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}