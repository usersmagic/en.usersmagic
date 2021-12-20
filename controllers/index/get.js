
module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: 'Reach your target customer',
    meta: 'usersmagic',
    includes: {
      external: {
        css: ['page', 'general', 'fontawesome'],
        js: ['page']
      }
    }
  });
}
