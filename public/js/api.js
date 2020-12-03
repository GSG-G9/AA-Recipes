const searchReq = (query) => fetch(`/search?q=${query}`)
  .then((response) => response.json());
