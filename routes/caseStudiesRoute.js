const express = require("express");
const router = express.Router();

const indexGetController = require("../controllers/case_studies/index/get")

router.get(
    "/",
    indexGetController
)

module.exports = router