
const express = require("express");
const router = express.Router();

const resourcesGetController = require("../controllers/resources/get");
const caseStudiesGetController = require("../controllers/resources/getCaseStudies");
const caseStudiesIndexGetController = require("../controllers/case_studies/index/get")

router.get(
    "/", 
    resourcesGetController
)

router.get(
    "/getAll", 
    caseStudiesGetController
)

router.get(
    "/case_studies",
    caseStudiesIndexGetController
)

module.exports = router