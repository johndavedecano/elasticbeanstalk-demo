const express = require('express')

const createServer = require('http').createServer

const app = express()

app.get('/', (_req, res) => res.json({ message: 'hello' }))

const server = createServer(app)

server.listen(8000, () => console.log('ExpressJS Server has started...'))

process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    debug('HTTP server closed')
  })
})
