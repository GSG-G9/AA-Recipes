const animesContainer = document.getElementById('food-container');
// const switchToAnimeBtn = document.getElementById('switch-to-anime');

const singleItemStructure = (response) => {
  const singleAnimeContainer = document.createElement('div');
  singleAnimeContainer.classList.add('single-container');
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
