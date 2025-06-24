const { Router } = require('express');
const technologyController = require('../controllers/technologyController.js');

const router = Router();
router.post('/', technologyController.create);
router.get('/', technologyController.findAll);
router.get('/:id', technologyController.findOne);
router.put('/:id', technologyController.update);
router.delete('/:id', technologyController.delete);

module.exports = router;