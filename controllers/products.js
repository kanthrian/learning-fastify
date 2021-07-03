const { v4: uuidv4 }  = require('uuid')
let products = require('../products')

const getProducts = (req, reply) =>  {
  reply.send(products)
}

const getProduct = (req, reply) => {
  const {id} = req.params
  
    const product = products.find(p => p.id === id)
    reply.send(product)
}

const addProduct = (req, reply) => {
  const {name} = req.body
  const product = {
    id: uuidv4(),
    name
  }

  products.push(product)
  reply.code(201).send(product)
}

const deleteProduct = (req, reply) => {
  const {id} = req.params
  // const product = products.find(p => p.id === id)
  // products.pop(product)

  products = products.filter(p => p.id !== id)
  reply.send({ message: `Product ${id} has been removed.`} )
}

const updateProduct = (req, reply) => {
  const {id} = req.params
  const {name} = req.body

  products = products.map(p => (p.id === id ? { id, name } : p))
  product = products.find(p => p.id === id)
  reply.send(product)
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct
}
