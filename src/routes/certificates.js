const { Router } = require('express');
const certificateController = require('../controllers/certificateController');

const router = Router();
router.post('/', certificateController.create);
router.get('/', certificateController.findAll);
router.get('/:id', certificateController.findOne);
router.put('/:id', certificateController.update);
router.delete('/:id', certificateController.delete);

module.exports = router;