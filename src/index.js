// const express = require('express');
const app = require('./app');
// const app = express();

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
  console.log(`server is running at http://localhost:${Port}`);
});
