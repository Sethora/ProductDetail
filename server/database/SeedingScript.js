
const faker = require('faker');
const random = require('./PhotosUrl');
const {
  getInstance,
  shutDownInstance,
  saveProduct,
  saveStore,
  saveBrand
} = require('./');

const getRandomStore = () => {
  const store = {
    code: faker.random.uuid(),
    name: `store-${faker.address.streetName()}`,
    location: faker.address.streetAddress(),
    policies: {
      returns: 'If you are not completely satisfied with an online purchase or gift, you may return your U.S. or Canadian purchase in stores or by mail. Restrictions apply for returns made outside the U.S.'
    }
  }
  return store;
};

const getRandomBrand = () => {
  const brand = {
    code: faker.random.uuid(),
    name: faker.company.companyName(),
    about: faker.company.catchPhrase()
  };
  return brand;
};

const getRandomProduct = ({ store_code, brand_code }) => {
  const product = {
    code: faker.vehicle.vin(),
    store_code,
    brand_code,
    name: faker.commerce.productName(),
    details: {
      color: faker.commerce.color(),
      material: faker.commerce.productMaterial(),
      desctiption: faker.commerce.productDescription(),
      instructions: faker.lorem.sentences(),
      ingredients: faker.lorem.words()
    },
    price: Number.parseFloat(faker.commerce.price()),
    images: random.getFive()
  };
  return product;
};

const insertRandom = async () => {
  for (const el of Array(100).keys()) {
    const store = getRandomStore();
    const brand = getRandomBrand();
    await saveStore(store)
      .then(result => saveBrand(brand))
      .then(result => saveProduct(getRandomProduct({ store_code: store.code, brand_code: brand.code })))
      .then(result => console.log(result))
      .catch(e => console.log(e));
  }
  shutDownInstance()
};

getInstance();
insertRandom();
