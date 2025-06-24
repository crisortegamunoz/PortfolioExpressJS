const { Router } = require('express');
const certificates = require('./certificates');
const categories = require('./categories');
const technologies = require('./technologies');
const portfolios = require('./portfolios');
const skills = require('./skills');
const experiences = require('./experiences');
const abouts = require('./abouts');

const router = Router();
router.use('/certificates', certificates);
router.use('/categories', categories);
router.use('/technologies', technologies);
router.use('/portfolios', portfolios);
router.use('/skills', skills);
router.use('/experiences', experiences);
router.use('/abouts', abouts);

module.exports = router;