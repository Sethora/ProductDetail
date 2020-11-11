const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '../public'));

app.post('/test', (req, res, next) => {
  const { message } = req.body;
  console.log(message);
});

app.listen(port, (req, res, next) => {
  console.log('I\'m up');
});