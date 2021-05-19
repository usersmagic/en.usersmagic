module.exports = (req, res) => {
  return res.render('tester/index', {
    page: 'tester/index',
    title: 'Easiest Way of Making Money',
    meta: 'tester',
    includes: {
      external: {
        css: ['page', 'fontawesome', 'general']
      }
    }
  });
}
