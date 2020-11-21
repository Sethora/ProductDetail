const request = require('supertest');
const { app } = require('../');

jest.useFakeTimers();

test('get a product properties', async (done) => {
  const response = Object.keys({
    "images": [
      "https://grubini-images.s3.amazonaws.com/pic7.jpg",
      "https://grubini-images.s3.amazonaws.com/pic14.jpeg",
      "https://grubini-images.s3.amazonaws.com/pic3.jpg",
      "https://grubini-images.s3.amazonaws.com/pic9.jpeg",
      "https://grubini-images.s3.amazonaws.com/pic24.jpg"
    ],
    "code": "RE9EXEDZKRCJ18899",
    "store_code": "98575475-c99b-47e6-b744-46459ec20f48",
    "brand_code": "a54b992c-8ece-4851-acb2-c663ce983912",
    "name": "Awesome Fresh Ball",
    "details": {
      "color": "purple",
      "material": "Wooden",
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
    },
    "instructions": "Qui fugit pariatur molestiae dolores. Et dolorem sequi minus molestiae ut. Aperiam deleniti quia provident maiores qui neque. Nemo cupiditate esse voluptas eum delectus qui qui fugit numquam.",
    "ingredients": "non ad porro",
    "price": 507
  });
  const res = await request(app).get('/product/get');
  const resurrected = JSON.parse(res.text);
  expect(Object.keys(resurrected.product)).toEqual(response);
  done();
});
test('get a store properties', async (done) => {
  const response = Object.keys({
    "code": "98575475-c99b-47e6-b744-46459ec20f48",
    "name": "store-Melany Unions",
    "location": "0027 Leannon Burgs",
    "return policy": "If you are not completely satisfied with an online purchase or gift, you may return your U.S. or Canadian purchase in stores or by mail. Restrictions apply for returns made outside the U.S.",
  });
  const res = await request(app).get('/product/get');
  const resurrected = JSON.parse(res.text);
  expect(res.status).toBe(200);
  expect(Object.keys(resurrected.store)).toEqual(response);
  done();
});
test('get a brand properties', async (done) => {
  const response = Object.keys({
    "code": "a54b992c-8ece-4851-acb2-c663ce983912",
    "name": "Trantow - Schroeder",
    "about": "Upgradable static projection",
  });
  const res = await request(app).get('/product/get');
  const resurrected = JSON.parse(res.text);
  expect(Object.keys(resurrected.brand)).toEqual(response);
  done();
});