exports.test = function (req, res) {
  res.sendfile('/images/test-image.png');
  console.log('sending file');
};
