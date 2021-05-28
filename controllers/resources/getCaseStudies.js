const CaseStudy = require("../../models/case_studies/casestudy");

module.exports = async (req, res) => {
    try {
        const caseStudyArray = await CaseStudy.find({});
        res.send(caseStudyArray);
    } catch (e) {
        res.status(404);
    }
}