const fetch = require('node-fetch');

// const { appid, appkey } = process.env;

const appid = 'cbbe1a4d';
const appkey = 'ba846de8038642ef3e5c1e2ff1dd39e3';

const searchFood = (search) => {
  fetch(`https://api.edamam.com/search?q=${search}&app_id=${appid}&app_key=${appkey}&from=0&to=3&calories=591-722&health=alcohol-free`)
    .then((response) => response.json());
};

const getBySearch = (req, res) => {
  const { search } = req.body;
  searchFood(search).then((result) => {
    // eslint-disable-next-line no-console
    console.log(result);
    res.json(result);
  // eslint-disable-next-line no-console
  }).catch(console.error);
};

module.exports = {
  getBySearch,
};
