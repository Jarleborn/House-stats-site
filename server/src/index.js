console.log('Hello World')
const cors = require('cors')
const express = require('express')
const app = require('express')()
const server = require('http').Server(app)
import io from './modules/socketControl'

import houseRouter from './router/houseRouter'

server.listen(1337)

app.use(express.static(__dirname + '/public'))
app.use(cors())

app.use('/house',houseRouter)

io.attach(server)
