module.exports = (req, res) => {
  return res.render('company/index', {
    page: 'company/index',
    title: 'Unleash Your Users\' Magic',
    meta: 'company',
    includes: {
      external: {
        css: ['page', 'general', 'header', 'confirm', 'logo', 'inputs', 'buttons', 'fontawesome', 'createPage'],
        js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage']
      }
    }
  });
}
