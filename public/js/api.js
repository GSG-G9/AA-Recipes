const search = (query) => fetch(`/search?q=${query}`)
  .then((response) => response.json())
  .then((data) => console.log(data));
