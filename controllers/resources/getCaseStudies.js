const CaseStudy = require("../../models/case_studies/casestudy");

module.exports = (req, res) => {

    CaseStudy.find({}, (err, caseStudyArray) => {
        if (err) {
            return res.status(400).send(err);
        }
        res.send(caseStudyArray);
    });
}