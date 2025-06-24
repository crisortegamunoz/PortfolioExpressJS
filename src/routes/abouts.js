const { Router } = require('express');
const aboutController = require('../controllers/aboutController');

const router = Router();
router.post('/', aboutController.create);
router.get('/', aboutController.findAll);
router.get('/:id', aboutController.findOne);
router.put('/:id', aboutController.update);
router.delete('/:id', aboutController.delete);

module.exports = router;