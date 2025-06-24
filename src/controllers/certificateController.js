const certificateService = require('../services/certificateService');

exports.create = async (req, res) => {
    try {
        const certificate = await certificateService.create();
        res.status(201).json(certificate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const certificates = await certificateService.findAll();
        res.json(certificates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findOne = async (req, res) => {
    try {
        const certificate = await certificateService.findOne(req.params.id);
        if (!certificate) {
            return res.status(404).json({ error: 'Certificate not found' });
        }
        res.json(certificate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const certificateExist = await certificateService.findOne(req.param.id);
        if (!certificateExist) {
            return res.status(404).json({ error: 'Certificate not found' });
        }
        const certificate = await certificateService.update(req.params.id, req.body);
        res.status(200).json({ message: 'Certificate updated', certificate });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await this.certificateService.delete(req.params.id);
        if (!result) {
            res.status(404).json({ error: 'Certificate not found' });
        }
        res.status(204).json({ message: 'Certificate deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}