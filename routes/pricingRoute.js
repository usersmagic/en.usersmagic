
const express = require('express');
const router = express.Router();

const indexGetController = require('../controllers/pricing/index/get')

router.get(
    "/",
    indexGetController
)

module.exports = router;