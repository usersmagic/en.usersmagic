
const express = require('express');
const router = express.Router();

const electronicsGetController = require('../controllers/reports/electronicsReport/get');
const a101GetController = require('../controllers/reports/a101report/get');

router.get(
  '/electronics_report',
  electronicsGetController
);

router.get(
  '/A101_report',
  a101GetController
)

module.exports = router;