const { Router } = require('express');
const certificates = require('./certificates')

const router = Router();
router.use('/certificates', certificates);

module.exports = router;