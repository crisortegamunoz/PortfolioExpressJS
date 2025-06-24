const { Router } = require('express');
const certificates = require('./certificates');
const categories = require('./categories');
const technologies = require('./technologies');
const portfolios = require('./portfolios');
const skills = require('./skills');

const router = Router();
router.use('/certificates', certificates);
router.use('/categories', categories);
router.use('/technologies', technologies);
router.use('/portfolios', portfolios);
router.use('/skills', skills);

module.exports = router;