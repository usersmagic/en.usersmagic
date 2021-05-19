const express = require('express');
const router = express.Router();

const indexGetController = require('../controllers/tester/get');

router.get(
  '/', 
    indexGetController
);

module.exports = router;
