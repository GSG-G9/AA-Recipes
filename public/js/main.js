const searchInput = document.getElementById('search-input');
const animesContainer = document.getElementById('food-container');
// const switchToBooksBtn = document.getElementById('switch-to-books');
const switchToAnimeBtn = document.getElementById('switch-to-anime');
// const weatherDataContainer = document.getElementById('weather-data-container');
// const showWeatherDataBtn = document.getElementById('show-weather-data-btn');

// const dataProcessAnime = (data) => data.results.map((item) => ({
//   name: item.title,
//   image_url: item.image_url,
//   description: item.synopsis,
//   url: item.url,
//   rating: item.score,
//   episodes: item.episodes,
// }));

// const dataProcessBook = (data) => data.items.map((item) => ({
//   name: item.volumeInfo.title,
//   image_url: item.volumeInfo.imageLinks.thumbnail,
//   description: item.volumeInfo.description.slice(0, 270),
//   url: item.volumeInfo.infoLink,
//   rating: item.volumeInfo.averageRating,
// }));

// const getAnimeData = (search = 'no game no life', callBack) => {
//   search = search || 'nogame no life';
//   const url = `https://api.jikan.moe/v3/search/anime?q=${search}`;
//   fetch(url, (data) => {
//     callBack(dataProcessAnime(data));
//   });
// };

// const getBookData = (search, callBack) => {
//   search = search || 'nogame no life';
//   const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
//   fetch(url, (data) => {
//     callBack(dataProcessBook(data));
//   });
// };

const singleItemStructure = (response) => {
  const singleAnimeContainer = document.createElement('div');
  singleAnimeContainer.classList.add('single-anime-container');
  const animeImage = document.createElement('img');
  animeImage.src = `${response.thumbNail}`;
  const watchMe = document.createElement('a');
  watchMe.href = response.url;
  const animeTitle = document.createElement('p');
  animeTitle.innerText = response.name;
  const singleAnimeInfo = document.createElement('div');
  singleAnimeInfo.classList.add('info');
  const animeEpisodes = document.createElement('p');
  animeEpisodes.innerText = response.calories ? response.calories : '';
  const animeDescription = document.createElement('p');
  animeDescription.innerText = `Description: ${response.description}`;
  singleAnimeInfo.append(animeEpisodes, animeDescription);
  watchMe.append(animeImage, singleAnimeInfo);
  singleAnimeContainer.append(watchMe, animeTitle);
  animesContainer.appendChild(singleAnimeContainer);
};

const renderData = (data) => {
    console.log(data);
  data.forEach((item) => {
    singleItemStructure(item);
  });
};

// switchToBooksBtn.addEventListener('click', () => {
//   makeEmpty();
//   getBookData(searchInput.value, renderData);
// });


// const makeEmpty = () => {
//   const blockArr = document.querySelectorAll('.single-anime-container');
//   blockArr.forEach((item) => {
//     item.remove();
//   });
// };

// switchToAnimeBtn.addEventListener('click', () => {
//   makeEmpty();
//   getAnimeData(searchInput.value, renderData);
// });

const arrErr = [{
  name: 'a',
  url: 'aa',
  thumbNail: 'aaa',
  ingredient: 'aaaa',
  calories: 'aaaaa',
}, {
  name: 'a',
  url: 'aa',
  thumbNail: 'aaa',
  ingredient: 'aaaa',
  calories: 'aaaaa',
}, {
  name: 'a',
  url: 'aa',
  thumbNail: 'aaa',
  ingredient: 'aaaa',
  calories: 'aaaaa',
}, {
  name: 'a',
  url: 'aa',
  thumbNail: 'aaa',
  ingredient: 'aaaa',
  calories: 'aaaaa',
}, {
  name: 'a',
  url: 'aa',
  thumbNail: 'aaa',
  ingredient: 'aaaa',
  calories: 'aaaaa',
}];

renderData(arrErr);
// getBookData('The Rising of the Shield Hero', renderData);

