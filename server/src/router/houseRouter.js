const express = require('express')
const houseRouter = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
import io from '../modules/socketControl'
import {getSpecificHouse, getAllHouses} from '../modules/JSONreader'
import {addHouse, addRoom} from '../modules/extras/JSONwriter'

houseRouter.get('/:id', function (req, res) {
  getSpecificHouse(req.params.id)
  .then(response =>{
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
})

houseRouter.get('/', function (req, res) {
  getAllHouses(req.params.id)
  .then(response =>{
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
})

houseRouter.patch('/',jsonParser, function (req, res) {
  addHouse(req.body)
  .then(res =>{
    io.emit('added', res)
  })
  .catch(err => {
  })
  res.end()
})

houseRouter.patch('/:id',jsonParser, function (req, res) {
  addRoom(req.params.id, req.body)
  .then(res =>{
    io.emit('updated', res)
  })
  .catch(err => {
  })
  res.end()
})

export default houseRouter
