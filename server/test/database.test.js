const request = require('supertest');
const { app } = require('../');
const { getRandomStore, getRandomBrand, getRandomProduct } = require('../database/SeedingScript');

test('creating a store', async (done) => {
  const store = getRandomStore();
  const res = await request(app)
    .post('/store/create')
    .send({ store });
  const message = { message: 'successfully inserted' };
  expect(JSON.parse(res.text)).toEqual(message);
  done();
});

test('creating a brand', async (done) => {
  const brand = getRandomBrand();
  const res = await request(app)
    .post('/brand/create')
    .send({ brand });
  const message = { message: 'successfully inserted' };
  expect(JSON.parse(res.text)).toEqual(message);
  done();
});

test('creating a random product', async (done) => {
  const store = getRandomStore();
  const brand = getRandomBrand();
  const product = getRandomProduct({ store_code: store.code, brand_code: brand.code });
  const res = await request(app)
    .post('/product/create')
    .send({ product });
  const message = { message: 'successfully inserted' };
  expect(JSON.parse(res.text)).toEqual(message);
  done();
});