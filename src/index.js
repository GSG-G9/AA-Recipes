const app = require('./app');

const Port = app.get('port');

app.listen(Port, () => {
  console.log(`server is running at http://localhost:${Port}`);
});
