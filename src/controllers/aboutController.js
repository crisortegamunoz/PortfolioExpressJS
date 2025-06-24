const aboutService = require('../services/aboutService');

exports.create = async (req, res) => {
    try {
        const about = await aboutService.create();
        res.status(201).json(about);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const abouts = await aboutService.findAll();
        res.json(abouts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findOne = async (req, res) => {
    try {
        const about = await aboutService.findOne(req.params.id);
        if (!about) {
            return res.status(404).json({ error: 'about not found' });
        }
        res.json(about);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const aboutExist = await aboutService.findOne(req.param.id);
        if (!aboutExist) {
            return res.status(404).json({ error: 'about not found' });
        }
        const about = await aboutService.update(req.params.id, req.body);
        res.status(200).json({ message: 'about updated', about });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await this.aboutService.delete(req.params.id);
        if (!result) {
            res.status(404).json({ error: 'about not found' });
        }
        res.status(204).json({ message: 'about deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}