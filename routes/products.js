const {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/products');

const Product = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

// Options
const getProductsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        products: Product,
      },
    },
  },
  // handler: function (req, reply) {
  //   reply.send(products)
  // }
  handler: getProducts,
};

const getProductOpts = {
  schema: {
    response: {
      200: Product,
    },
  },
  handler: getProduct,
};

const addProductOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: Product,
    },
  },
  handler: addProduct,
};

const deleteProductOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteProduct,
};

const updateProductOpts = {
  schema: {
    response: {
      200: Product,
    },
  },
  handler: updateProduct,
};

function productsRoute(fastify, options, done) {
  fastify.get('/products', getProductsOpts);
  fastify.get('/products/:id', getProductOpts);
  fastify.post('/products', addProductOpts);
  fastify.delete('/products/:id', deleteProductOpts);
  fastify.put('/products/:id', updateProductOpts);

  done();
}

module.exports = productsRoute;
