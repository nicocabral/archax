const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const data = require('./data');
app.use(cors({
  origin: '*'
}));
app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
