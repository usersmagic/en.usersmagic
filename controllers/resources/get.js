
const CaseStudy = require("../../models/case_studies/casestudy");

module.exports = async (req, res) => {

    const caseStudyArray = await CaseStudy.find({});

    return res.render("resources/index", {
        page: 'resources/index',
        title: 'Resources',
        meta: 'resources',
        includes: {
            external: {
                css: ['page', 'general', 'header', 'confirm', 'logo', 'inputs', 'buttons', 'fontawesome', 'createPage'],
                js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage']
            }
        },
        caseStudyArray
    });
}