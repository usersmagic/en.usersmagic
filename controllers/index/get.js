module.exports = (req, res) => {
  const hostname = req.hostname;
  const country = req.country;

  if (country && hostname == 'usersmagic' && country == 'TR')
    return res.redirect('https://tr.usersmagic.com');

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
