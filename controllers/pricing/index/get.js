
module.exports = async (req, res) => {


    return res.render("pricing/index", {
        page: 'pricing/index',
        title: 'Pricing',
        meta: 'pricing',
        includes: {
            external: {
                css: ['page', 'general', 'header', 'confirm', 'logo', 'inputs', 'buttons', 'fontawesome', 'createPage'],
                js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage']
            }
        },
        browser_lang: '["en"]'
    });
}