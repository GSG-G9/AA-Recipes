const fetch = require('node-fetch');

const { appid, appkey } = process.env;

const searchFood = (search) => {
  fetch(
    `https://api.edamam.com/search?q=${search}&app_id=${appid}&app_key=${appkey}`,
  )
    .then((response) => response.json());
};

const getBySearch = (req, res) => {
  const { search } = req.body;
  searchFood(search)
    .then((result) => {
      // eslint-disable-next-line no-console
      console.log(result);
      res.json(result);
      // eslint-disable-next-line no-console
    })
    // eslint-disable-next-line no-console
    .catch(console.error);
};

// searchFood(searchTest);

module.exports = {
  getBySearch,
};
