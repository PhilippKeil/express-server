exports.index = function (req, res) {
  res.render('index', {title: 'Test SITE'});
  console.log('New GET request on /');
};

exports.test = function (req, res) {
  res.sendFile(path.join(__dirname, '/images/test-image.png'));
  console.log('sending file');
};
