const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const upload = require('./middleware/UploadFile');
const cors = require('cors');
const {
  getInstance,
  saveProduct,
  getProducts,
  getProduct,
  saveStore,
  getStore,
  saveBrand,
  getBrand
} = require('./database');

const app = express();
const port = 3001;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
getInstance();


app.post('/api/store/create', (req, res, next) => {
  const { store } = req.body;
  saveStore(store)
    .then(result => {
      if (result.code !== undefined) {
        res.status(200).send({ "message": "successfully inserted" })
      } else {
        res.status(404).send({ "mesage": "Oops there was an error, please try again" })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).send();
    });
});

app.post('/api/brand/create', (req, res, next) => {
  const { brand } = req.body;
  saveBrand(brand)
    .then(result => {
      if (result.code !== undefined) {
        res.status(200).send({ "message": "successfully inserted" })
      } else {
        res.status(404).send({ "message": "Oops there was an error, please try again" })
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).send();
    })
});

app.post('/api/product/create', (req, res, next) => {
  const { product } = req.body;
  saveProduct(product)
    .then(result => {
      if (result.code !== undefined) {
        res.status(200).send({ "message": "successfully inserted" })
      } else {
        res.status(404).send({ "message": "Oops there was an error, please try again" })
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).send();
    })
});

app.post('/api/product/manager/create', upload, (req, res, next) => {
  const files = req.files;
  const product = JSON.parse(req.body.product);
  const images = files.map(img => {
    const ext = img
    return {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + img.filename)),
      contentType: img.mimetype
    }
  })
  const obj = {
    ...product,
    images
  };
  saveProduct(obj)
    .then(result => {
      if (result.code !== undefined) {
        res.status(200).send({ "message": "successfully inserted" })
      } else {
        console.log(result);
        res.status(404).send({ "message": "Oops there was an error, please try again" })
      }
    }).catch(error => {
      console.log(error);
      res.status(500).send();
    });
});

app.get('/api/product/get', (req, res, next) => {
  let product;
  getProduct()
    .then(product => {
      console.log(product)
      product = product;
      return Promise.all([getStore(product.store_code), getBrand(product.brand_code), product]);
    })
    .then(result => {
      const data = {
        store: result[0],
        brand: result[1],
        product: result[2]
      };
      res.status(200).end(JSON.stringify(data));
    })
    .catch(error => {
      console.log(error);
      res.status(500).send();
    });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, (req, res, next) => {
    console.log('I\'m up');
  });
}

module.exports = {
  app
};