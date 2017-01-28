'use strict'

const http          = require('http')
const express       = require('express')
const logger        = require('morgan')
const path          = require('path')
const pug           = require('pug')

const Skinny        = require('devpunx-skinny').builder
const skinnyRouter  = require('devpunx-skinny').router

var myWebsite = new Skinny({
  file: path.join(__dirname, 'website'),
  tmplDir: path.join(__dirname, 'templates'),
  tmplExt: '.pug'
});

myWebsite.init()

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')
app.set('port', 3000)

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(skinnyRouter)



let server = http.createServer(app)

server.listen(app.get('port'))
server.on('error', onError)
server.on('listening', onListening)

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }
}
function onListening() {
  let addr = server.address()
  let port = typeof addr === 'string'
    ? addr
    : addr.port
  console.log(`\n==> Service is up and running on http://localhost:${port}`)
}