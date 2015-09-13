exports.index = function (req, res) {
  res.render('index', {title: 'Test SITE'});
  console.log('New GET request on /');
};
