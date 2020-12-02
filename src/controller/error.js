const error404 = (req, res) => {
  res.status(404).send('<h1>Error 404 : sorry page not found</h1>');
};
// eslint-disable-next-line no-unused-vars
const error500 = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  res
    .status(500)
    .send('<h1>Error 500 : sorry server is not responding corrctly</h1>');
};
module.exports = {
  error404,
  error500,
};
