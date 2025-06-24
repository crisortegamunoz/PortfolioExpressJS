const portfolioService = require('../services/portfolioService');

exports.create = async (req, res) => {
    try {
        const portfolio = await portfolioService.create();
        res.status(201).json(portfolio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const portfolios = await portfolioService.findAll();
        res.json(portfolios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findOne = async (req, res) => {
    try {
        const portfolio = await portfolioService.findOne(req.params.id);
        if (!portfolio) {
            return res.status(404).json({ error: 'portfolio not found' });
        }
        res.json(portfolio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const portfolioExist = await portfolioService.findOne(req.param.id);
        if (!portfolioExist) {
            return res.status(404).json({ error: 'portfolio not found' });
        }
        const portfolio = await portfolioService.update(req.params.id, req.body);
        res.status(200).json({ message: 'portfolio updated', portfolio });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await this.portfolioService.delete(req.params.id);
        if (!result) {
            res.status(404).json({ error: 'portfolio not found' });
        }
        res.status(204).json({ message: 'portfolio deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}