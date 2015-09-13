exports.index = function (req, res) {
  res.render('index', {title: 'Philipp Keil'});
  console.log('New GET request on /');
};
