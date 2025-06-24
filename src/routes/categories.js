const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const router = Router();
router.post('/', categoryController.create);
router.get('/', categoryController.findAll);
router.get('/:id', categoryController.findOne);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);

module.exports = router;