const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/new-route', (req, res) => {
    res.send('This is a new route!');
  });
  

  app.get('/feature', (req, res) => {
    res.send('This is a new feature!');
  });
  