
module.exports = (req, res) => {
  const photos = {
    usersmagicLogo: '/res/images/reports/footer_logo.png',
    usersmagicSmallLogo: '/res/images/reports/small_logo_blue.png',
    emirFoto: '/res/images/reports/emir_foto.png',
    yasinFoto: '/res/images/reports/yasin_foto.png'
  }
  return res.render('reports/electronics', {
    page: 'reports/electronics',
    title: 'Electronics Report',
    meta: 'Electronics Report',
    includes: {
      external: {
        css: ['page', 'general', 'confirm', 'logo', 'inputs', 'buttons', 'reports', 'fontawesome', 'createPage', "index"],
        js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage']
      }
    },
    photos
  });
}