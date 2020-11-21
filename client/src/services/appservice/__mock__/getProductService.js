const fakeData = {
  "store": {
    "code": "7ee66162-ad21-416c-b494-1d2ed8d9a55b",
    "name": "store-Pacocha Alley",
    "location": "199 Cummerata Lake",
    "return policy": "If you are not completely satisfied with an online purchase or gift, you may return your U.S. or Canadian purchase in stores or by mail. Restrictions apply for returns made outside the U.S."
  },
  "brand": {
    "code": "a04d76ac-f198-4c6a-baf2-2f5bf93b7119",
    "name": "Greenfelder Inc",
    "about": "Fully-configurable zero tolerance website"
  },
  "product": {
    "images": [
      "https://grubini-images.s3.amazonaws.com/pic14.jpeg",
      "https://grubini-images.s3.amazonaws.com/pic7.jpg",
      "https://grubini-images.s3.amazonaws.com/pic20.jpg",
      "https://grubini-images.s3.amazonaws.com/pic22.jpg",
      "https://grubini-images.s3.amazonaws.com/pic8.jpg"
    ],
    "code": "LFWA45EHNQQ960696",
    "store_code": "7ee66162-ad21-416c-b494-1d2ed8d9a55b",
    "brand_code": "a04d76ac-f198-4c6a-baf2-2f5bf93b7119",
    "name": "Unbranded Plastic Chicken",
    "details": {
      "color": "sky blue",
      "material": "Frozen",
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients"
    },
    "instructions": "Non quos nihil inventore nesciunt omnis eos. Nam blanditiis veritatis voluptate recusandae tempore. Facilis odit est qui est. Omnis eos suscipit reprehenderit quia eius. Ab ullam atque dolores qui est consectetur.",
    "ingredients": "quia incidunt maiores",
    "price": 92
  },
  "tabs": [
    {
      "color": "sky blue",
      "material": "Frozen",
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients"
    },
    "Non quos nihil inventore nesciunt omnis eos. Nam blanditiis veritatis voluptate recusandae tempore. Facilis odit est qui est. Omnis eos suscipit reprehenderit quia eius. Ab ullam atque dolores qui est consectetur.",
    "quia incidunt maiores",
    {
      "code": "a04d76ac-f198-4c6a-baf2-2f5bf93b7119",
      "name": "Greenfelder Inc",
      "about": "Fully-configurable zero tolerance website"
    },
    {
      "code": "7ee66162-ad21-416c-b494-1d2ed8d9a55b",
      "name": "store-Pacocha Alley",
      "location": "199 Cummerata Lake",
      "return policy": "If you are not completely satisfied with an online purchase or gift, you may return your U.S. or Canadian purchase in stores or by mail. Restrictions apply for returns made outside the U.S."
    }
  ]
};

export default async () => {
  return await new Promise((resolve, reject) => {
    resolve(fakeData);
  });
};