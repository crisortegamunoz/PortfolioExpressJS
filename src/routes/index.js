const { Router } = require('express');
const certificates = require('./certificates');
const categories = require('./categories')

const router = Router();
router.use('/certificates', certificates);
router.use('/categories', categories);

module.exports = router;