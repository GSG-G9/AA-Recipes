const fetch = require('node-fetch');

const { API_ID, API_KEY } = process.env;

// const appid = 'cbbe1a4d';
// const appkey = 'ba846de8038642ef3e5c1e2ff1dd39e3';
// const searchTest = 'rice';

const dataHandler = (data) => {
  console.log(data, 111);
  if (Array.isArray(data.hits)) {
    const newData = data.hits.map((itme) => ({
      name: itme.recipe.label,
      url: itme.recipe.url,
      thumbNail: itme.recipe.image,
      ingredient: itme.recipe.ingredientLines,
      calories: itme.recipe.calories,
    }));
    console.log(newData, 22222);
    return newData;
  }
  return null;
};

const searchFood = (search) => fetch(
  `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`,
)
  .then((response) => response.json())
  .then((data) => dataHandler(data));

const getBySearch = (req, res) => {
  const { q } = req.query;
  searchFood(q)
    .then((result) => {
      // eslint-disable-next-line no-console
      // console.log(result);
      res.json(result);
      // eslint-disable-next-line no-console
    })
    // eslint-disable-next-line no-console
    .catch(console.error);
};

module.exports = {
  getBySearch,
};
