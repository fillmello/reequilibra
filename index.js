
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')
const express = require('express')
const path = require('path')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)
server.use(express.static(path.join(__dirname, 'public/assets')))

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/assets/html/index.html'))
})

server.listen(3000, () => {
  console.log('JSON Server está em execução!')
  console.log('Acesse http://0.0.0.0:3000 para ver o site')
})
