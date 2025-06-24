const { Router } = require('express');
const experienceController = require('../controllers/experienceController');

const router = Router();
router.post('/', experienceController.create);
router.get('/', experienceController.findAll);
router.get('/:id', experienceController.findOne);
router.put('/:id', experienceController.update);
router.delete('/:id', experienceController.delete);

module.exports = router;