const photos = [
  'https://grubini-images.s3.amazonaws.com/pic1.jpeg',
  'https://grubini-images.s3.amazonaws.com/pic2.jpeg',
  'https://grubini-images.s3.amazonaws.com/pic3.jpg',
  'https://grubini-images.s3.amazonaws.com/pic4.png',
  'https://grubini-images.s3.amazonaws.com/pic5.jpeg',
  'https://grubini-images.s3.amazonaws.com/pic6.jpeg',
  'https://grubini-images.s3.amazonaws.com/pic7.jpg',
  'https://grubini-images.s3.amazonaws.com/pic8.jpg',
  'https://grubini-images.s3.amazonaws.com/pic8.jpg',
  'https://grubini-images.s3.amazonaws.com/pic9.jpeg',
  'https://grubini-images.s3.amazonaws.com/pic10.jpg',
  'https://grubini-images.s3.amazonaws.com/pic11.jpg',
  'https://grubini-images.s3.amazonaws.com/pic12.jpg',
  'https://grubini-images.s3.amazonaws.com/pic13.jpg',
  'https://grubini-images.s3.amazonaws.com/pic14.jpg',
  'https://grubini-images.s3.amazonaws.com/pic15.jpg',
  'https://grubini-images.s3.amazonaws.com/pic16.jpg',
  'https://grubini-images.s3.amazonaws.com/pic17.jpg',
  'https://grubini-images.s3.amazonaws.com/pic18.jpg',
  'https://grubini-images.s3.amazonaws.com/pic19.jpg',
  'https://grubini-images.s3.amazonaws.com/pic20.jpg',
  'https://grubini-images.s3.amazonaws.com/pic21.jpg',
  'https://grubini-images.s3.amazonaws.com/pic22.jpg',
  'https://grubini-images.s3.amazonaws.com/pic23.jpg',
  'https://grubini-images.s3.amazonaws.com/pic24.jpg',
  'https://grubini-images.s3.amazonaws.com/pic25.jpg',
];

const random = () => Math.floor(Math.random() * 25) + 1;
const getFive = () => [1, 2, 3, 4, 5].map(el => photos[random() - 1]);


exports.getFive = getFive;