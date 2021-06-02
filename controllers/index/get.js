
module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: 'Unleash Your Users\' Magic',
    meta: 'usersmagic',
    includes: {
      external: {
        css: ['page', 'general', 'fontawesome'],
        js: ['page']
      }
    }
  });
}
