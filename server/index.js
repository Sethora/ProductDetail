const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { getInstance } = require('./database');

const routes = require('./routes');


const app = express();
const port = 3100;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
getInstance();

app.use('/api', routes.apiRoutes);
app.use('/', routes.webRoutes);




if (process.env.NODE_ENV !== 'test') {
  app.listen(port, (req, res, next) => {
    console.log('I\'m up');
  });
}

module.exports = {
  app
};