const io = require('socket.io')()

import {getAllHouses} from './JSONreader'

io.on('connection', function (socket){
  getAllHouses()
  .then(res =>{
    socket.emit('initHouse',{houses: res})
  })
  .catch(err => {
    console.log(err)
  })
})

export default io
