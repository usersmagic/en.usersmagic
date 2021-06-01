const { width, height } = require("screenz");

module.exports = (req, res) => {
  if (width < 600) {
    return res.redirect('/tester');
  } else {
    return res.redirect('/company');
  }
}
