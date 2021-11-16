
module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: 'Hedef kitlenizi belirleyin',
    meta: 'usersmagic',
    includes: {
      external: {
        css: ['page', 'general', 'fontawesome'],
        js: ['page']
      }
    }
  });
}
