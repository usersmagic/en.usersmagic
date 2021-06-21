
module.exports = (req, res) => {
  const photos = {
    usersmagicLogo: '/res/images/reports/footer_logo.png',
    usersmagicSmallLogo: '/res/images/reports/small_logo_blue.png',
  }
  return res.render('reports/a101', {
    page: 'reports/a101',
    title: 'A101 Report',
    meta: 'A101 Report',
    includes: {
      external: {
        css: ['page', 'general', 'confirm', 'logo', 'inputs', 'buttons', 'reports', 'fontawesome', 'createPage', "index"],
        js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage']
      }
    },
    photos
  });
}