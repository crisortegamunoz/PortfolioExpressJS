const { Router } = require('express');
const skillController = require('../controllers/skillController');

const router = Router();
router.post('/', skillController.create);
router.get('/', skillController.findAll);
router.get('/:id', skillController.findOne);
router.put('/:id', skillController.update);
router.delete('/:id', skillController.delete);

module.exports = router;