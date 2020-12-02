const express = require('express');

const app = express();

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`server is running at http://localhost:${Port}`);
});
