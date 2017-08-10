const dbData = require('../../api/db-ish.json')

//Test to add house
//
// curl -H "Content-Type: application/json" -X PATCH -d '{"house5": {
//         "adress": "testvägen 1",
//         "rooms": [
//           { "name": "Vardagsrum", "temperature": 21, "humidity": 0.5 },
//           { "name": "Farstun", "temperature": -3, "humidity": 95 },
//           { "name": "Köket", "temperature": 23, "humidity": 0.5 },
//           { "name": "Toa1", "temperature": 30, "humidity": 0.6 },
//           { "name": "Toa2", "temperature": 25, "humidity": 0.7 },
//           { "name": "Sovrum1", "temperature": 19, "humidity": 0.4 },
//           { "name": "Sovrum2", "temperature": 17, "humidity": 0.5 },
//           { "name": "Garage", "temperature": 2, "humidity": 94 }
//         ]
//       }}' http://localhost:1337/house/

function addHouse(newHouse) {
  return new Promise(function(resolve, reject) {
    dbData.houses.push(newHouse)
    resolve(dbData.houses)
  })
}


//Test to add room
//
// curl -H "Content-Type: application/json" -X PATCH -d '{ "name": "testrum", "temperature": 21, "humidity": 0.5 }' http://localhost:1337/house/house1
function addRoom(houseId, newRoom) {

  return new Promise(function(resolve, reject) {

    for (var i = 0; i < dbData.houses.length; i++) {
      if ( Object.keys(dbData.houses[i])[0] === houseId) {
        dbData.houses[i][houseId].rooms.push(newRoom)
        console.log(dbData.houses[i][houseId].rooms)
      }
    }

    resolve(dbData.houses)

  })
}


export {addHouse, addRoom}
