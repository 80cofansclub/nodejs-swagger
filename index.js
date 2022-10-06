const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.static('static'));

const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/123', (req, res) => {
  console.log(123);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
