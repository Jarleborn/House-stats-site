const dbData = require('../api/db-ish.json')


function getSpecificHouse(id) {
  return new Promise(function(resolve, reject) {
    for (var i = 0; i < dbData.houses.length; i++) {
      if ( Object.keys(dbData.houses[i])[0] === id) {
        resolve(dbData.houses[i])
      }
    }
    reject('sorry could not find that')
  })
}

function getAllHouses() {
  return new Promise(function(resolve, reject) {
    if(dbData){
      resolve(dbData.houses)
    }
    reject('sorry the db seems empty')
  })
}



export {getSpecificHouse, getAllHouses}
