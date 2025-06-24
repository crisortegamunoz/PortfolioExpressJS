const { Router } = require('express');
const certificates = require('./certificates');
const categories = require('./categories');
const technologies = require('./technologies');

const router = Router();
router.use('/certificates', certificates);
router.use('/categories', categories);
router.use('/technologies', technologies);

module.exports = router;