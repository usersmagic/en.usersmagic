
const CaseStudy = require("../../models/case_studies/casestudy");

module.exports = (req, res) => {

    CaseStudy.find({}, (err, caseStudyArray) => {
        if (err) {
            return res.status(400).send(err)
        }
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
            caseStudyArray,
            browser_lang: '["en"]'
        });
    });
}