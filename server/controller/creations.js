const fs = require('fs');
const {
  saveProduct,
  saveStore,
  saveBrand
} = require('../database');

exports.createStore = (req, res, next) => {
  const { store } = req.body;
  saveStore(store)
    .then(result => {
      if (result.code !== undefined) {
        res.status(200).send({ "message": "successfully inserted" });
      } else {
        res.status(404).send({ "mesage": "Oops there was an error, please try again" });
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).send();
    });
};
exports.createBrand = (req, res, next) => {
  const { brand } = req.body;
  saveBrand(brand)
    .then(result => {
      if (result.code !== undefined) {
        res.status(200).send({ "message": "successfully inserted" });
      } else {
        res.status(404).send({ "message": "Oops there was an error, please try again" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).send();
    });
};
exports.createProduct = (req, res, next) => {
  const { product } = req.body;
  saveProduct(product)
    .then(result => {
      if (result.code !== undefined) {
        res.status(200).send({ "message": "successfully inserted" });
      } else {
        res.status(404).send({ "message": "Oops there was an error, please try again" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).send();
    });
};
exports.createProductWithImages = (req, res, next) => {
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
        res.status(200).send({ "message": "successfully inserted" });
      } else {
        console.log(result);
        res.status(404).send({ "message": "Oops there was an error, please try again" });
      }
    }).catch(error => {
      console.log(error);
      res.status(500).send();
    });
};