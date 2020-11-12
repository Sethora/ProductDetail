
const faker = require('faker');
const {
  saveProduct,
  saveStore,
  saveBrand
} = require('./');

const getRandomStore = () => {
  const store = {
    code: faker.random.uuid(),
    name: `store-${faker.address.streetName()}`,
    location: faker.address.streetAddress()
  }
  console.log(store)
  return store;
};

const getRandomBrand = () => {
  const brand = {
    code: faker.random.uuid(),
    name: faker.company.companyName(),
    about: faker.company.catchPhrase()
  };
  console.log(brand)
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
    images: [1, 2, 3, 4, 5].map(el => faker.image.image())
  };
  console.log(product)
  return product;
};

const insertRandom = () => {
  for (const el of Array(100).keys()) {
    const store = getRandomStore();
    const brand = getRandomBrand();
    saveStore(store)
      .then(result => saveBrand(brand))
      .then(result => saveProduct(getRandomProduct({ store_code: store.code, brand_code: brand.code })))
      .then(result => console.log(result))
      .catch(e => console.log(e));
  }
};

insertRandom();