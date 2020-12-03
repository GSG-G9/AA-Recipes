const searchInput = document.getElementById('search-input');
const switchTofoodBtn = document.getElementById('switch-to-food');

const renderData = (data) => {
  // console.log(data);
  data.forEach((item) => {
    singleItemStructure(item);
  });
};

const makeEmpty = () => {
  const blockArr = document.querySelectorAll('.single-container');
  blockArr.forEach((item) => {
    item.remove();
  });
};

switchTofoodBtn.addEventListener('click', () => {
  makeEmpty();
  searchReq(searchInput.value)
    .then(renderData);
  // renderData(searchReq(searchInput.value));
});

searchReq('rice').then(renderData);
