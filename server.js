// Fastify about 20% faster than express in 2019 benchmarks

const fastify = require("fastify")({ logger: true })
fastify.register(require('fastify-swagger'),{
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'fastify-api' },
  }
})

fastify.register(require('./routes/products'))

const PORT = 4848

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
