let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const products = {
    id: 1,
    image: '/public/images/product1.png',
    title: 'Cantilever chair',
    scu: ['green', 'pink', 'blue'],
    article: 'Y523201',
    price: 42.00,
  };
  // const products = [
  //   {
  //       id: 1,
  //       image: '/public/images/product1.png',
  //       title: 'Cantilever chair',
  //       scu: ['green', 'pink', 'blue'],
  //       article: 'Y523201',
  //       price: 42.00,
  //   },
  //   {
  //       id: 2,
  //       image: '/public/images/product2.png',
  //       title: 'Cantilever chair',
  //       scu: ['green', 'pink', 'blue'],
  //       article: 'Y523201',
  //       price: 43.00,
  //   },
  //   {
  //       id: 3,
  //       image: '/public/images/product3.png',
  //       title: 'Cantilever chair',
  //       scu: ['blue', 'green', 'pink'],
  //       article: 'Y523201',
  //       price: 47.00,
  //   },
  //   {
  //       id: 4,
  //       image: '/public/images/product4.png',
  //       title: 'Cantilever chair',
  //       scu: ['pink', 'blue', 'green'],
  //       article: 'Y523201',
  //       price: 48.00,
  //   },
  // ];
  res.send(JSON.stringify(products));
});

module.exports = router;
