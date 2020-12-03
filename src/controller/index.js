const fetch = require('node-fetch');

const { API_ID, API_KEY } = process.env;

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
      res.json(result);
    })
    // eslint-disable-next-line no-console
    .catch(console.error);
};

module.exports = {
  getBySearch,
};
