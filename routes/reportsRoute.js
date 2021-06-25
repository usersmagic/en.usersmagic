
const express = require('express');
const router = express.Router();

const indexGetController = require('../controllers/reports/index/get');
const electronicsGetController = require('../controllers/reports/electronicsReport/get');
const electronicsTrGetController = require('../controllers/reports/electronicsTrReport/get');
const a101GetController = require('../controllers/reports/a101report/get');

router.get(
  '/',
  indexGetController
)

router.get(
  '/electronics_report',
  electronicsGetController
);

router.get(
  '/electronics_report_tr',
  electronicsTrGetController
);

router.get(
  '/A101_report',
  a101GetController
);

module.exports = router;